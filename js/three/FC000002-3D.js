    var camera, scene, renderer;
    var geometry, material, mesh, geometry2, mesh2;
    var image;
    var controls;
    var objects = [];
    var raycaster;
    var overlay = document.getElementById( 'overlay' );
    var instructions = document.getElementById( 'instructions' );
    THREE.ImageUtils.crossOrigin = "";
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
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
        instructions.addEventListener( 'click', function ( event ) {
            instructions.style.display = 'none';
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


        var geometry2 = new THREE.SphereGeometry( 20, 20, 20 );
        var faceVertexUvs = geometry2.faceVertexUvs[ 0 ];
        for ( i = 0; i < faceVertexUvs.length; i ++ ) {
            var uvs = faceVertexUvs[ i ];
            var face = geometry2.faces[ i ];
            for ( var j = 0; j < 3; j ++ ) {
                uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
                uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
            }
        }

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

        THREE.ImageUtils.crossOrigin = '';

        var floorTexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/floor.jpg' ); //256x256
        floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set( 100, 100 );
        var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
        var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 10, 10);
        var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.position.y = -10.5;
        floor.rotation.x = Math.PI / 2;
        scene.add(floor);


        var centerfoldlogogeometry = new THREE.CubeGeometry(50,50,0);
        var centerfoldlogotexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/three-logo.png' );
        var centerfoldlogomaterial = new THREE.MeshBasicMaterial( { map: centerfoldlogotexture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var centerfoldlogo = new THREE.Mesh( centerfoldlogogeometry, centerfoldlogomaterial );
        centerfoldlogo.position.set(0,15,-50);
        scene.add( centerfoldlogo );

        // upload image to folder on S3, change address in block, change position and height
        // change size of object or image
        var momentslogogeometry = new THREE.CubeGeometry(100,100,0);
        var momentslogotexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/andrew-3D/date.png' );
        var momentslogomaterial = new THREE.MeshBasicMaterial( { map: momentslogotexture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var momentslogo = new THREE.Mesh( momentslogogeometry, momentslogomaterial );
        //change x,y,z (might need to change heights for each image, leave z same)
        momentslogo.position.set(-100,24,-350);
        scene.add( momentslogo );

        var momentslogogeometry = new THREE.CubeGeometry(100,100,0);
        var momentslogotexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/andrew-3D/andrew-statement.png' );
        var momentslogomaterial = new THREE.MeshBasicMaterial( { map: momentslogotexture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        var momentslogo = new THREE.Mesh( momentslogogeometry, momentslogomaterial );
        //change x,y,z (might need to change heights for each image, leave z same)
        momentslogo.position.set(100,18,-350);
        scene.add( momentslogo );

        // var curatory1geometry = new THREE.CubeGeometry(50,50,0);
        // var curatory1texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/curatorial-statement-1.png' );
        // var curatory1material = new THREE.MeshBasicMaterial( { map: curatory1texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        // var curatory1 = new THREE.Mesh( curatory1geometry, curatory1material );
        // curatory1.position.set(-75,10,-300);
        // scene.add( curatory1 );

        // var curatory2geometry = new THREE.CubeGeometry(50,50,0);
        // var curatory2texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/curatorial-statement-2.png' );
        // var curatory2material = new THREE.MeshBasicMaterial( { map: curatory2texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        // var curatory2 = new THREE.Mesh( curatory2geometry, curatory2material );
        // curatory2.position.set(-25,10,-300);
        // scene.add( curatory2 );

        // var curatory3geometry = new THREE.CubeGeometry(50,50,0);
        // var curatory3texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/curatorial-statement-3.png' );
        // var curatory3material = new THREE.MeshBasicMaterial( { map: curatory3texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        // var curatory3 = new THREE.Mesh( curatory3geometry, curatory3material );
        // curatory3.position.set(25,10,-300);
        // scene.add( curatory3 );

        // var curatory4geometry = new THREE.CubeGeometry(50,50,0);
        // var curatory4texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/curatorial-statement-4.png' );
        // var curatory4material = new THREE.MeshBasicMaterial( { map: curatory4texture, transparent: true, opacity: 1, color: 0xFFFFFF } );
        // var curatory4 = new THREE.Mesh( curatory4geometry, curatory4material );
        // curatory4.position.set(75,10,-300);
        // scene.add( curatory4 );




        var art1geometry = new THREE.CubeGeometry(40,50,1);
        var art1texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000266-large.jpg' );
        var art1material = new THREE.MeshBasicMaterial( { map: art1texture, side: THREE.DoubleSide } );
        var art1 = new THREE.Mesh( art1geometry, art1material );
        art1.position.set(-58,22,-450);
        scene.add( art1 );

        var art1labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art1labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000351-card.png' );
        var art1labelmaterial = new THREE.MeshBasicMaterial( { map: art1labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art1label = new THREE.Mesh( art1labelgeometry, art1labelmaterial );
        art1label.position.set(-58,-11,-450);
        scene.add( art1label );

        var art2geometry = new THREE.CubeGeometry(40,53,1);
        var art2texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000267-large.jpg' );
        var art2material = new THREE.MeshBasicMaterial( { map: art2texture, side: THREE.DoubleSide } );
        var art2 = new THREE.Mesh( art2geometry, art2material );
        art2.position.set(56,24,-550);
        art2.rotation.y = Math.PI / 1.4;
        scene.add( art2 );

        var art2labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art2labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000353-card.png' );
        var art2labelmaterial = new THREE.MeshBasicMaterial( { map: art2labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art2label = new THREE.Mesh( art2labelgeometry, art2labelmaterial );
        art2label.position.set(56,-11,-550);
        art2label.rotation.y = Math.PI / 1.4;
        scene.add( art2label );

        var art3geometry = new THREE.CubeGeometry(40,32,1);
        var art3texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000268-large.jpg' );
        var art3material = new THREE.MeshBasicMaterial( { map: art3texture, side: THREE.DoubleSide } );
        var art3 = new THREE.Mesh( art3geometry, art3material );
        art3.position.set(-100,13,-650);
        art3.rotation.y = Math.PI / 4;
        scene.add( art3 );

        var art3labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art3labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000229-card.png' );
        var art3labelmaterial = new THREE.MeshBasicMaterial( { map: art3labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art3label = new THREE.Mesh( art3labelgeometry, art3labelmaterial );
        art3label.position.set(-100,-11,-650);
        art3label.rotation.y = Math.PI / 4;
        scene.add( art3label );

        var art4geometry = new THREE.CubeGeometry(40,53,1);
        var art4texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000269-large.jpg' );
        var art4material = new THREE.MeshBasicMaterial( { map: art4texture, side: THREE.DoubleSide } );
        var art4 = new THREE.Mesh( art4geometry, art4material );
        art4.position.set(80,24,-750);
        art4.rotation.y = Math.PI / 1.4;
        scene.add( art4 );

        var art4labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art4labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000284-card.png' );
        var art4labelmaterial = new THREE.MeshBasicMaterial( { map: art4labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art4label = new THREE.Mesh( art4labelgeometry, art4labelmaterial );
        art4label.position.set(80,-11,-750);
        art4label.rotation.y = Math.PI / 1.4;
        scene.add( art4label );

        var art5geometry = new THREE.CubeGeometry(40,53,1);
        var art5texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000270-large.jpg' );
        var art5material = new THREE.MeshBasicMaterial( { map: art5texture, side: THREE.DoubleSide } );
        var art5 = new THREE.Mesh( art5geometry, art5material );
        art5.position.set(-60,24,-850);
        art5.rotation.y = Math.PI / 4;
        scene.add( art5 );

        var art5labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art5labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000004-card.png' );
        var art5labelmaterial = new THREE.MeshBasicMaterial( { map: art5labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art5label = new THREE.Mesh( art5labelgeometry, art5labelmaterial );
        art5label.position.set(-60,-11,-850);
        art5label.rotation.y = Math.PI / 4;
        scene.add( art5label );

        var art6geometry = new THREE.CubeGeometry(40,53,1);
        var art6texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000271-large.jpg' );
        var art6material = new THREE.MeshBasicMaterial( { map: art6texture, side: THREE.DoubleSide } );
        var art6 = new THREE.Mesh( art6geometry, art6material );
        art6.position.set(0,24,-950);
        art6.rotation.y = Math.PI / 3.6;
        scene.add( art6 );

        var art6labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art6labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000047-card.png' );
        var art6labelmaterial = new THREE.MeshBasicMaterial( { map: art6labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art6label = new THREE.Mesh( art6labelgeometry, art6labelmaterial );
        art6label.position.set(0,-11,-950);
        art6label.rotation.y = Math.PI / 3.6;
        scene.add( art6label );

        var art7geometry = new THREE.CubeGeometry(40,50,1);
        var art7texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000376-large.jpg' );
        var art7material = new THREE.MeshBasicMaterial( { map: art7texture, side: THREE.DoubleSide } );
        var art7 = new THREE.Mesh( art7geometry, art7material );
        art7.position.set(70,23,-1050);
        art7.rotation.y = Math.PI / 1.4;
        scene.add( art7 );

        var art7labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art7labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000323-card.pngg' );
        var art7labelmaterial = new THREE.MeshBasicMaterial( { map: art7labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art7label = new THREE.Mesh( art7labelgeometry, art7labelmaterial );
        art7label.position.set(70,-11,-1050);
        art7label.rotation.y = Math.PI / 1.4;
        scene.add( art7label );

        var art8geometry = new THREE.CubeGeometry(40,53,1);
        var art8texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000377-large.jpg' );
        var art8material = new THREE.MeshBasicMaterial( { map: art8texture, side: THREE.DoubleSide } );
        var art8 = new THREE.Mesh( art8geometry, art8material );
        art8.position.set(-30,24,-1150);
        art8.rotation.y = Math.PI / 4;
        scene.add( art8 );

        var art8labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art8labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000386-card.png' );
        var art8labelmaterial = new THREE.MeshBasicMaterial( { map: art8labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art8label = new THREE.Mesh( art8labelgeometry, art8labelmaterial );
        art8label.position.set(-30,-11,-1150);
        art8label.rotation.y = Math.PI / 4;
        scene.add( art8label );

        var art9geometry = new THREE.CubeGeometry(40,52,1);
        var art9texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000378-large.jpg' );
        var art9material = new THREE.MeshBasicMaterial( { map: art9texture, side: THREE.DoubleSide } );
        var art9 = new THREE.Mesh( art9geometry, art9material );
        art9.position.set(40,23,-1250);
        art9.rotation.y = Math.PI / 1.4;
        scene.add( art9 );

        var art9labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art9labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000092-card.png' );
        var art9labelmaterial = new THREE.MeshBasicMaterial( { map: art9labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art9label = new THREE.Mesh( art9labelgeometry, art9labelmaterial );
        art9label.position.set(40,-11,-1250);
        art9label.rotation.y = Math.PI / 1.4;
        scene.add( art9label );


        var art10geometry = new THREE.CubeGeometry(40,13,1);
        var art10texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000093-full.jpg' );
        var art10material = new THREE.MeshBasicMaterial( { map: art10texture, side: THREE.DoubleSide } );
        var art10 = new THREE.Mesh( art10geometry, art10material );
        art10.position.set(-60,13,-1350);
        scene.add( art10 );

        var art10labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art10labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000007-card.png' );
        var art10labelmaterial = new THREE.MeshBasicMaterial( { map: art10labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art10label = new THREE.Mesh( art10labelgeometry, art10labelmaterial );
        art10label.position.set(-60,-11,-1350);
        scene.add( art10label );

        var art11geometry = new THREE.CubeGeometry(40,53,1);
        var art11texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000097-full.jpg' );
        var art11material = new THREE.MeshBasicMaterial( { map: art11texture, side: THREE.DoubleSide } );
        var art11 = new THREE.Mesh( art11geometry, art11material );
        art11.position.set(60,24,-1450);
        scene.add( art11 );

        var art11labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art11labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000403-card.png' );
        var art11labelmaterial = new THREE.MeshBasicMaterial( { map: art11labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art11label = new THREE.Mesh( art11labelgeometry, art11labelmaterial );
        art11label.position.set(60,-11,-1450);
        scene.add( art11label );

        var art12geometry = new THREE.CubeGeometry(40,53,1);
        var art12texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000172-full.jpg' );
        var art12material = new THREE.MeshBasicMaterial( { map: art12texture, side: THREE.DoubleSide } );
        var art12 = new THREE.Mesh( art12geometry, art12material );
        art12.position.set(-40,24,-1550);
        art12.rotation.y = Math.PI / 3.2;
        scene.add( art12 );

        var art12labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art12labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/FC000002-3D/CF000408-card.png' );
        var art12labelmaterial = new THREE.MeshBasicMaterial( { map: art12labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art12label = new THREE.Mesh( art12labelgeometry, art12labelmaterial );
        art12label.position.set(-40,-11,-1550);
        art12label.rotation.y = Math.PI / 3.2;
        scene.add( art12label );
/*
        var art13geometry = new THREE.CubeGeometry(40,53,1);
        var art13texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000173-full.jpg' );
        var art13material = new THREE.MeshBasicMaterial( { map: art13texture, side: THREE.DoubleSide } );
        var art13 = new THREE.Mesh( art13geometry, art13material );
        art13.position.set(30,24,-1650);
        art13.rotation.y = Math.PI / 1.2;
        scene.add( art13 );

        var art13labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art13labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/CF000173-card.png' );
        var art13labelmaterial = new THREE.MeshBasicMaterial( { map: art13labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art13label = new THREE.Mesh( art13labelgeometry, art13labelmaterial );
        art13label.position.set(30,-11,-1650);
        art13label.rotation.y = Math.PI / 1.2;
        scene.add( art13label );

        var art14geometry = new THREE.CubeGeometry(40,53,1);
        var art14texture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/CF000174-full.jpg' );
        var art14material = new THREE.MeshBasicMaterial( { map: art14texture, side: THREE.DoubleSide } );
        var art14 = new THREE.Mesh( art14geometry, art14material );
        art14.position.set(-60,24,-1750);
        scene.add( art14 );

        var art14labelgeometry = new THREE.CubeGeometry(40,16,1);
        var art14labeltexture = THREE.ImageUtils.loadTexture( 'https://centerfold-website.s3.amazonaws.com/assets/featured-collections/FC000001/CF000174-card.png' );
        var art14labelmaterial = new THREE.MeshBasicMaterial( { map: art14labeltexture,  transparent: true, opacity: 1, color: 0xFFFFFF } );
        var art14label = new THREE.Mesh( art14labelgeometry, art14labelmaterial );
        art14label.position.set(-60,-11,-1750);
        scene.add( art14label );

        */

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
