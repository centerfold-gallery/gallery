    var camera, scene, renderer;
    var geometry, material, mesh, geometry2, mesh2;
    var image;
    var controls;
    var objects = [];
    var raycaster;
    var overlay = document.getElementById( 'overlay' );
    var instructions = document.getElementById( 'instructions' );
    THREE.ImageUtils.crossOrigin = "";
    // http://www.html5rocks.com/en/tutorials/pointerlock/intro/
    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
    if ( havePointerLock ) {
        var element = document.body;
        var pointerlockchange = function ( event ) {
            if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
                controlsEnabled = true;
                controls.enabled = true;
                overlay.style.display = 'none';
            } else {
                controls.enabled = false;
                overlay.style.display = '-webkit-box';
                overlay.style.display = '-moz-box';
                overlay.style.display = 'box';
                instructions.style.display = '';
            }
        };
        var pointerlockerror = function ( event ) {
            instructions.style.display = '';
        };
        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
        instructions.addEventListener( 'click', function ( event ) {
            instructions.style.display = 'none';
            // Ask the browser to lock the pointer
            element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
            element.requestPointerLock();
        }, false );
    } else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API :( - Please try this on Chrome.';
    }
    init();
    animate();
    var controlsEnabled = false;
    var moveForward = false;
    var moveBackward = false;
    var moveLeft = false;
    var moveRight = false;
    var canJump = false;
    var prevTime = performance.now();
    var velocity = new THREE.Vector3();
    function init() {
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.updateMatrixWorld()
        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0xfffbfb, 0, 750 );

        var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
        var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xfffbfb, side: THREE.BackSide } );
        var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
        skyBox.position.set(0,0,0);
        scene.add( skyBox );
        var light = new THREE.PointLight( 0xffffff, 0xffffff, 1 );
        light.position.set( 0.5, 1, 0.75 );
        scene.add( light );

        image = document.createElement( 'img' );
        image.setAttribute("id", "image-1");
        document.body.appendChild( image );
        var texture2 = new THREE.Texture( image );
        texture2 = THREE.ImageUtils.loadTexture('https://centerfold-website.s3.amazonaws.com/assets/floor.jpg');
        var material2 = new THREE.MeshPhongMaterial( {
            color: 0xff0000,
            specular: 0xffffff,
            shininess: 100,
            map: texture2,
        } );
        var geometry2 = new THREE.SphereGeometry( 20, 20, 20 );
        // modify UVs to accommodate MatCap texture
        var faceVertexUvs = geometry2.faceVertexUvs[ 0 ];
        for ( i = 0; i < faceVertexUvs.length; i ++ ) {
            var uvs = faceVertexUvs[ i ];
            var face = geometry2.faces[ i ];
            for ( var j = 0; j < 3; j ++ ) {
                uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
                uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
            }
        }

        //controls
        controls = new THREE.PointerLockControls( camera );
        scene.add( controls.getObject() );
        var onKeyDown = function ( event ) {
            switch ( event.keyCode ) {
                case 38: // up
                case 87: // w
                    moveForward = true;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = true; break;
                case 40: // down
                case 83: // s
                    moveBackward = true;
                    break;
                case 39: // right
                case 68: // d
                    moveRight = true;
                    break;
                case 32: // space
                    if ( canJump === true ) velocity.y += 250;
                    canJump = false;
                    break;
            }
        };
        var onKeyUp = function ( event ) {
            switch( event.keyCode ) {
                case 38: // up
                case 87: // w
                    moveForward = false;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = false;
                    break;
                case 40: // down
                case 83: // s
                    moveBackward = false;
                    break;
                case 39: // right
                case 68: // d
                    moveRight = false;
                    break;
            }
        };
        document.addEventListener( 'keydown', onKeyDown, false );
        document.addEventListener( 'keyup', onKeyUp, false );
        raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

        var centerfoldlogogeometry = new THREE.CubeGeometry(50,50,0);
        var centerfoldlogotexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/three-logo.png' );
        var centerfoldlogomaterial = new THREE.MeshBasicMaterial( { map: centerfoldlogotexture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var centerfoldlogo = new THREE.Mesh( centerfoldlogogeometry, centerfoldlogomaterial );
        centerfoldlogo.position.set(0,15,-50);
        scene.add( centerfoldlogo );

        var curatory1geometry = new THREE.CubeGeometry(50,50,0);
        var curatory1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/curatorial-statement-1.png' );
        var curatory1material = new THREE.MeshBasicMaterial( { map: curatory1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var curatory1 = new THREE.Mesh( curatory1geometry, curatory1material );
        curatory1.position.set(-75,10,-200);
        scene.add( curatory1 );

        var curatory2geometry = new THREE.CubeGeometry(50,50,0);
        var curatory2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/curatorial-statement-2.png' );
        var curatory2material = new THREE.MeshBasicMaterial( { map: curatory2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var curatory2 = new THREE.Mesh( curatory2geometry, curatory2material );
        curatory2.position.set(-25,10,-200);
        scene.add( curatory2 );

        var curatory3geometry = new THREE.CubeGeometry(50,50,0);
        var curatory3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/curatorial-statement-3.png' );
        var curatory3material = new THREE.MeshBasicMaterial( { map: curatory3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var curatory3 = new THREE.Mesh( curatory3geometry, curatory3material );
        curatory3.position.set(25,10,-200);
        scene.add( curatory3 );

        var curatory4geometry = new THREE.CubeGeometry(50,50,0);
        var curatory4texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/curatorial-statement-4.png' );
        var curatory4material = new THREE.MeshBasicMaterial( { map: curatory4texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var curatory4 = new THREE.Mesh( curatory4geometry, curatory4material );
        curatory4.position.set(75,10,-200);
        scene.add( curatory4 );

        var resultsstatementgeometry = new THREE.CubeGeometry(40,40,0);
        var resultsstatementtexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/results-statement.png' );
        var resultsstatementmaterial = new THREE.MeshBasicMaterial( { map: resultsstatementtexture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var resultsstatement = new THREE.Mesh( resultsstatementgeometry, resultsstatementmaterial );
        resultsstatement.position.set(0,10,-300);
        scene.add( resultsstatement );








        var results1geometry = new THREE.CubeGeometry(40,40,0);
        var results1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/results-1.png' );
        var results1material = new THREE.MeshBasicMaterial( { map: results1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1 = new THREE.Mesh( results1geometry, results1material );
        results1.position.set(300,17,-200);
        results1.rotation.y = Math.PI / 2;
        scene.add( results1 );

        var results1work1geometry = new THREE.CubeGeometry(40,40,1);
        var results1work1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/emblematic.png' );
        var results1work1material = new THREE.MeshBasicMaterial( { map: results1work1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work1 = new THREE.Mesh( results1work1geometry, results1work1material );
        results1work1.position.set(300,17,-250);
        results1work1.rotation.y = Math.PI / 2;
        scene.add( results1work1 );

        var results1work1labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results1work1labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/emblematic-label.png' );
        var results1work1labelmaterial = new THREE.MeshBasicMaterial( { map: results1work1labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work1label = new THREE.Mesh( results1work1labelgeometry, results1work1labelmaterial );
        results1work1label.position.set(300,-11,-250);
        results1work1label.rotation.y = Math.PI / 2;
        scene.add( results1work1label );

        var results1work2geometry = new THREE.CubeGeometry(40,40,1);
        var results1work2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/ghetto-rich.png' );
        var results1work2material = new THREE.MeshBasicMaterial( { map: results1work2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work2 = new THREE.Mesh( results1work2geometry, results1work2material );
        results1work2.position.set(300,17,-300);
        results1work2.rotation.y = Math.PI / 2;
        scene.add( results1work2 );

        var results1work2labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results1work2labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/ghetto-rich-label.png' );
        var results1work2labelmaterial = new THREE.MeshBasicMaterial( { map: results1work2labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work2label = new THREE.Mesh( results1work2labelgeometry, results1work2labelmaterial );
        results1work2label.position.set(300,-11,-300);
        results1work2label.rotation.y = Math.PI / 2;
        scene.add( results1work2label );

        var results1work3geometry = new THREE.CubeGeometry(40,40,1);
        var results1work3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/purple-rain.png' );
        var results1work3material = new THREE.MeshBasicMaterial( { map: results1work3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work3 = new THREE.Mesh( results1work3geometry, results1work3material );
        results1work3.position.set(300,17,-350);
        results1work3.rotation.y = Math.PI / 2;
        scene.add( results1work3 );

        var results1work3labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results1work3labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/koku/purple-rain-label.png' );
        var results1work3labelmaterial = new THREE.MeshBasicMaterial( { map: results1work3labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results1work3label = new THREE.Mesh( results1work3labelgeometry, results1work3labelmaterial );
        results1work3label.position.set(300,-11,-350);
        results1work3label.rotation.y = Math.PI / 2;
        scene.add( results1work3label );



        var results2geometry = new THREE.CubeGeometry(40,40,0);
        var results2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/results-2.png' );
        var results2material = new THREE.MeshBasicMaterial( { map: results2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2 = new THREE.Mesh( results2geometry, results2material );
        results2.position.set(500,17,-200);
        results2.rotation.y = Math.PI / 2;
        scene.add( results2 );

        var results2work1geometry = new THREE.CubeGeometry(40,40,1);
        var results2work1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/boost.jpg' );
        var results2work1material = new THREE.MeshBasicMaterial( { map: results2work1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work1 = new THREE.Mesh( results2work1geometry, results2work1material );
        results2work1.position.set(500,17,-250);
        results2work1.rotation.y = Math.PI / 2;
        scene.add( results2work1 );

        var results2work1labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results2work1labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/boost-label.png' );
        var results2work1labelmaterial = new THREE.MeshBasicMaterial( { map: results2work1labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work1label = new THREE.Mesh( results2work1labelgeometry, results2work1labelmaterial );
        results2work1label.position.set(500,-11,-250);
        results2work1label.rotation.y = Math.PI / 2;
        scene.add( results2work1label );

        var results2work2geometry = new THREE.CubeGeometry(40,40,1);
        var results2work2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/fade-into-you.jpg' );
        var results2work2material = new THREE.MeshBasicMaterial( { map: results2work2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work2 = new THREE.Mesh( results2work2geometry, results2work2material );
        results2work2.position.set(500,17,-300);
        results2work2.rotation.y = Math.PI / 2;
        scene.add( results2work2 );

        var results2work2labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results2work2labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/fade-into-you-label.png' );
        var results2work2labelmaterial = new THREE.MeshBasicMaterial( { map: results2work2labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work2label = new THREE.Mesh( results2work2labelgeometry, results2work2labelmaterial );
        results2work2label.position.set(500,-11,-300);
        results2work2label.rotation.y = Math.PI / 2;
        scene.add( results2work2label );

        var results2work3geometry = new THREE.CubeGeometry(40,40,1);
        var results2work3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/untitled.jpg' );
        var results2work3material = new THREE.MeshBasicMaterial( { map: results2work3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work3 = new THREE.Mesh( results2work3geometry, results2work3material );
        results2work3.position.set(500,17,-350);
        results2work3.rotation.y = Math.PI / 2;
        scene.add( results2work3 );

        var results2work3labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results2work3labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/gab/untitled-label.png' );
        var results2work3labelmaterial = new THREE.MeshBasicMaterial( { map: results2work3labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results2work3label = new THREE.Mesh( results2work3labelgeometry, results2work3labelmaterial );
        results2work3label.position.set(500,-11,-350);
        results2work3label.rotation.y = Math.PI / 2;
        scene.add( results2work3label );




        var results3geometry = new THREE.CubeGeometry(40,40,0);
        var results3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/results-3.png' );
        var results3material = new THREE.MeshBasicMaterial( { map: results3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3 = new THREE.Mesh( results3geometry, results3material );
        results3.position.set(700,17,-200);
        results3.rotation.y = Math.PI / 2;
        scene.add( results3 );

        var results3work1geometry = new THREE.CubeGeometry(40,40,1);
        var results3work1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/alaska-in-montreal.jpg' );
        var results3work1material = new THREE.MeshBasicMaterial( { map: results3work1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work1 = new THREE.Mesh( results3work1geometry, results3work1material );
        results3work1.position.set(700,17,-250);
        results3work1.rotation.y = Math.PI / 2;
        scene.add( results3work1 );

        var results3work1labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results3work1labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/alaska-in-montreal-label.png' );
        var results3work1labelmaterial = new THREE.MeshBasicMaterial( { map: results3work1labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work1label = new THREE.Mesh( results3work1labelgeometry, results3work1labelmaterial );
        results3work1label.position.set(700,-11,-250);
        results3work1label.rotation.y = Math.PI / 2;
        scene.add( results3work1label );

        var results3work2geometry = new THREE.CubeGeometry(40,40,1);
        var results3work2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/dahlia-in-new-york.jpg' );
        var results3work2material = new THREE.MeshBasicMaterial( { map: results3work2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work2 = new THREE.Mesh( results3work2geometry, results3work2material );
        results3work2.position.set(700,17,-300);
        results3work2.rotation.y = Math.PI / 2;
        scene.add( results3work2 );

        var results3work2labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results3work2labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/dahlia-in-new-york-label.png' );
        var results3work2labelmaterial = new THREE.MeshBasicMaterial( { map: results3work2labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work2label = new THREE.Mesh( results3work2labelgeometry, results3work2labelmaterial );
        results3work2label.position.set(700,-11,-300);
        results3work2label.rotation.y = Math.PI / 2;
        scene.add( results3work2label );

        var results3work3geometry = new THREE.CubeGeometry(40,40,1);
        var results3work3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/ella-in-montreal.jpg' );
        var results3work3material = new THREE.MeshBasicMaterial( { map: results3work3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work3 = new THREE.Mesh( results3work3geometry, results3work3material );
        results3work3.position.set(700,17,-350);
        results3work3.rotation.y = Math.PI / 2;
        scene.add( results3work3 );

        var results3work3labelgeometry = new THREE.CubeGeometry(40,16,1);
        var results3work3labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/results/nastia/ella-in-montreal-label.png' );
        var results3work3labelmaterial = new THREE.MeshBasicMaterial( { map: results3work3labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var results3work3label = new THREE.Mesh( results3work3labelgeometry, results3work3labelmaterial );
        results3work3label.position.set(700,-11,-350);
        results3work3label.rotation.y = Math.PI / 2;
        scene.add( results3work3label );










        var art1geometry = new THREE.CubeGeometry(40,40,1);
        var art1texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/emile1.jpg' );
        var art1material = new THREE.MeshBasicMaterial( { map: art1texture, side: THREE.DoubleSide } );
        var art1 = new THREE.Mesh( art1geometry, art1material );
        art1.position.set(-58,17,-450);
        scene.add( art1 );

        var art1labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art1labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/emile.png' );
        var art1labelmaterial = new THREE.MeshBasicMaterial( { map: art1labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art1label = new THREE.Mesh( art1labelgeometry, art1labelmaterial );
        art1label.position.set(-58,-11,-450);
        scene.add( art1label );

        var art2geometry = new THREE.CubeGeometry(40,40,1);
        var art2texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Celia1.JPG' );
        var art2material = new THREE.MeshBasicMaterial( { map: art2texture, side: THREE.DoubleSide } );
        var art2 = new THREE.Mesh( art2geometry, art2material );
        art2.position.set(56,17,-550);
        art2.rotation.y = Math.PI / 1.4;
        scene.add( art2 );

        var art2labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art2labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/celia.png' );
        var art2labelmaterial = new THREE.MeshBasicMaterial( { map: art2labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art2label = new THREE.Mesh( art2labelgeometry, art2labelmaterial );
        art2label.position.set(56,-11,-550);
        art2label.rotation.y = Math.PI / 1.4;
        scene.add( art2label );

        var art3geometry = new THREE.CubeGeometry(40,40,1);
        var art3texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Ali3.jpg' );
        var art3material = new THREE.MeshBasicMaterial( { map: art3texture, side: THREE.DoubleSide } );
        var art3 = new THREE.Mesh( art3geometry, art3material );
        art3.position.set(-100,17,-650);
        art3.rotation.y = Math.PI / 4;
        scene.add( art3 );

        var art3labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art3labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/ali.png' );
        var art3labelmaterial = new THREE.MeshBasicMaterial( { map: art3labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art3label = new THREE.Mesh( art3labelgeometry, art3labelmaterial );
        art3label.position.set(-100,-11,-650);
        art3label.rotation.y = Math.PI / 4;
        scene.add( art3label );

        var art4geometry = new THREE.CubeGeometry(40,40,1);
        var art4texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Pascal4_new.jpg' );
        var art4material = new THREE.MeshBasicMaterial( { map: art4texture, side: THREE.DoubleSide } );
        var art4 = new THREE.Mesh( art4geometry, art4material );
        art4.position.set(80,17,-750);
        art4.rotation.y = Math.PI / 1.4;
        scene.add( art4 );

        var art4labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art4labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/pascal.png' );
        var art4labelmaterial = new THREE.MeshBasicMaterial( { map: art4labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art4label = new THREE.Mesh( art4labelgeometry, art4labelmaterial );
        art4label.position.set(80,-11,-750);
        art4label.rotation.y = Math.PI / 1.4;
        scene.add( art4label );

        var art5geometry = new THREE.CubeGeometry(40,40,1);
        var art5texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Jade1.jpg' );
        var art5material = new THREE.MeshBasicMaterial( { map: art5texture, side: THREE.DoubleSide } );
        var art5 = new THREE.Mesh( art5geometry, art5material );
        art5.position.set(-60,17,-850);
        art5.rotation.y = Math.PI / 4;
        scene.add( art5 );

        var art5labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art5labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/jade.png' );
        var art5labelmaterial = new THREE.MeshBasicMaterial( { map: art5labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art5label = new THREE.Mesh( art5labelgeometry, art5labelmaterial );
        art5label.position.set(-60,-11,-850);
        art5label.rotation.y = Math.PI / 4;
        scene.add( art5label );

        var art6geometry = new THREE.CubeGeometry(40,40,1);
        var art6texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Sayeh2.jpg' );
        var art6material = new THREE.MeshBasicMaterial( { map: art6texture, side: THREE.DoubleSide } );
        var art6 = new THREE.Mesh( art6geometry, art6material );
        art6.position.set(0,17,-950);
        art6.rotation.y = Math.PI / 3.6;
        scene.add( art6 );

        var art6labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art6labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/sayeh.png' );
        var art6labelmaterial = new THREE.MeshBasicMaterial( { map: art6labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art6label = new THREE.Mesh( art6labelgeometry, art6labelmaterial );
        art6label.position.set(0,-11,-950);
        art6label.rotation.y = Math.PI / 3.6;
        scene.add( art6label );

        var art7geometry = new THREE.CubeGeometry(40,40,1);
        var art7texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Nastia2.jpg' );
        var art7material = new THREE.MeshBasicMaterial( { map: art7texture, side: THREE.DoubleSide } );
        var art7 = new THREE.Mesh( art7geometry, art7material );
        art7.position.set(70,17,-1050);
        art7.rotation.y = Math.PI / 1.4;
        scene.add( art7 );

        var art7labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art7labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/nastia.png' );
        var art7labelmaterial = new THREE.MeshBasicMaterial( { map: art7labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art7label = new THREE.Mesh( art7labelgeometry, art7labelmaterial );
        art7label.position.set(70,-11,-1050);
        art7label.rotation.y = Math.PI / 1.4;
        scene.add( art7label );

        var art8geometry = new THREE.CubeGeometry(40,40,1);
        var art8texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Gab2.jpg' );
        var art8material = new THREE.MeshBasicMaterial( { map: art8texture, side: THREE.DoubleSide } );
        var art8 = new THREE.Mesh( art8geometry, art8material );
        art8.position.set(-30,17,-1150);
        art8.rotation.y = Math.PI / 4;
        scene.add( art8 );

        var art8labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art8labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/gab.png' );
        var art8labelmaterial = new THREE.MeshBasicMaterial( { map: art8labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art8label = new THREE.Mesh( art8labelgeometry, art8labelmaterial );
        art8label.position.set(-30,-11,-1150);
        art8label.rotation.y = Math.PI / 4;
        scene.add( art8label );

        var art9geometry = new THREE.CubeGeometry(40,40,1);
        var art9texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Schael3.jpg' );
        var art9material = new THREE.MeshBasicMaterial( { map: art9texture, side: THREE.DoubleSide } );
        var art9 = new THREE.Mesh( art9geometry, art9material );
        art9.position.set(40,17,-1250);
        art9.rotation.y = Math.PI / 1.4;
        scene.add( art9 );

        var art9labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art9labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/schael.png' );
        var art9labelmaterial = new THREE.MeshBasicMaterial( { map: art9labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art9label = new THREE.Mesh( art9labelgeometry, art9labelmaterial );
        art9label.position.set(40,-11,-1250);
        art9label.rotation.y = Math.PI / 1.4;
        scene.add( art9label );

        var art10geometry = new THREE.CubeGeometry(40,40,1);
        var art10texture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/Koku2.jpg' );
        var art10material = new THREE.MeshBasicMaterial( { map: art10texture, side: THREE.DoubleSide } );
        var art10 = new THREE.Mesh( art10geometry, art10material );
        art10.position.set(-60,17,-1350);
        scene.add( art10 );

        var art10labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art10labeltexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/art/labels/koku.png' );
        var art10labelmaterial = new THREE.MeshBasicMaterial( { map: art10labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art10label = new THREE.Mesh( art10labelgeometry, art10labelmaterial );
        art10label.position.set(-60,-11,-1350);
        scene.add( art10label );


        var floorTexture = new THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/floor.jpg' ); //256x256
        floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set( 100, 100 );
        var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
        var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 10, 10);
        var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.position.y = -10.5;
        floor.rotation.x = Math.PI / 2;
        scene.add(floor);
        //

        //text

        //
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor( 0xffffff );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //
        window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function animate() {
        requestAnimationFrame( animate );
        if ( controlsEnabled ) {
            raycaster.ray.origin.copy( controls.getObject().position );
            raycaster.ray.origin.y -= 10;
            var intersections = raycaster.intersectObjects( objects );
            var isOnObject = intersections.length > 0;
            var time = performance.now();
            var delta = ( time - prevTime ) / 1000;
            velocity.x -= velocity.x * 10.0 * delta;
            velocity.z -= velocity.z * 10.0 * delta;
            velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
            if ( moveForward ) velocity.z -= 1000.0 * delta;
            if ( moveBackward ) velocity.z += 1000.0 * delta;
            if ( moveLeft ) velocity.x -= 1000.0 * delta;
            if ( moveRight ) velocity.x += 1000.0 * delta;
            if ( isOnObject === true ) {
                velocity.y = Math.max( 0, velocity.y );
                canJump = true;
            }
            controls.getObject().translateX( velocity.x * delta );
            controls.getObject().translateY( velocity.y * delta );
            controls.getObject().translateZ( velocity.z * delta );
            if ( controls.getObject().position.y < 10 ) {
                velocity.y = 0;
                controls.getObject().position.y = 10;
                canJump = true;
            }
            prevTime = time;
        }
        renderer.render( scene, camera );
    }

    THREE.ImageUtils.crossOrigin = "";

    image.src = 'https://centerfold-website.s3.amazonaws.com/assets/material.jpg';
