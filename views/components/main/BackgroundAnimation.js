import React from "react";
import ReactDOM from 'react-dom';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

export default class BackgroundAnimation extends React.Component {

    constructor(props, context) {

        super(props, context);

        // CAMERA
        var cameraPosition = this.cameraPosition = new THREE.Vector3(0, 0, 1000);
        var windowWidth = this.windowWidth = window.innerWidth;
        var windowHeight = this.windowHeight = window.innerHeight;
        var aspectRatio = this.aspectRatio = this.windowWidth/this.windowHeight;
        var fieldOfView = this.fieldOfView = 60;
        this.nearPlane = 1;
        this.farPlane = 2000;

        // STUFF
        var ang = this.ang = (fieldOfView/2)* Math.PI / 180;
        var maxReceiptsZ = this.maxReceiptsZ = 600;
        var yLimit = this.yLimit = (cameraPosition.z + maxReceiptsZ) * Math.tan(ang);
        this.xLimit = yLimit * aspectRatio;

        // SPEED
        var speed = this.speed = {x:0, y:0};
        var smoothing = this.smoothing = 10;
        var mousePos = this.mousePos = {x:0, y:0};

        // ZEIPT IN MOBILE
        var triangle1points = this.triangle1points = {y1: 0, y2: 58, y3: 58};
        var triangle2points = this.triangle2points = {y1: -13, y2: 58, y3: 58, y4: -13};
        var triangle3points = this.triangle3points = {y1: -13, y2: -13, y3: 48};

        //CENTER
        var windowMiddleX = this.windowMiddleX = windowWidth / 2;
        var windowMiddleY = windowHeight / 2;

        //LIGHT
        this.lightPosition = new THREE.Vector3(20, 20, 20);
        this.lightTarget = new THREE.Vector3(0, 0, 0);

        // ZEIPT
        var zeiptPosition = this.zeiptPosition = new THREE.Vector3();
        var zeiptRotation = this.zeiptRotation = new THREE.Euler();

        // FLYING RECEIPTS
        var receiptsArray = this.receiptsArray = [];
        this.waitingReceiptsArray = [];

        // Shape
        this.extrudeSettings = {
            amount: 8,
            bevelEnabled: true,
            bevelSegments: 2,
            steps: 2,
            bevelSize: 1,
            bevelThickness: 1
        };

        this.state = {
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            receiptsArray: receiptsArray,
            zeiptPosition: zeiptPosition,
            zeiptRotation: zeiptRotation
        };

        //MOUSEMOVE
        window.addEventListener('mousemove', handleMouseMove, true);
        

        function handleMouseMove(event){
            mousePos.x = event.clientX;
            mousePos.y = event.clientY;
            speed.x = (windowMiddleX - mousePos.x)/10;
            speed.y = (windowMiddleY-mousePos.y) /50 ;

            triangle1points.y1 = (Math.pow(mousePos.x, 2) - (mousePos.x * windowWidth))/20000;
            triangle1points.y2 = 58 + (-Math.pow(mousePos.x, 2) + (mousePos.x * windowWidth))/20000;
            triangle1points.y3 = 58 + (-Math.pow(mousePos.x, 2) + (mousePos.x * windowWidth))/20000;

            triangle2points.y1 = -13 + (Math.pow(mousePos.x, 2) -(mousePos.x * windowWidth))/20000;
            triangle2points.y2 = 58 + (-Math.pow(mousePos.x, 2) + (mousePos.x * windowWidth))/20000;
            triangle2points.y3 = 58 + (-Math.pow(mousePos.x, 2) + (mousePos.x * windowWidth))/20000;
            triangle2points.y4 = -13 + (Math.pow(mousePos.x, 2) -(mousePos.x * windowWidth))/20000;

            triangle3points.y1 = -13 + (Math.pow(mousePos.x, 2) -(mousePos.x * windowWidth))/20000;
            triangle3points.y2 = -13 + (Math.pow(mousePos.x, 2) -(mousePos.x * windowWidth))/20000;
            triangle3points.y3 = 48 - (Math.pow(mousePos.x, 2) - (mousePos.x * windowWidth))/20000;
        }

        this._updateDimensions = this._updateDimensions.bind(this);
    }

    _updateDimensions(){
        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            windowWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            windowHeight = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({
            windowWidth: windowWidth,
            windowHeight: windowHeight
        });
        
        console.log('state: ' + this.state.windowWidth);
    }


    componentDidMount(){
        window.addEventListener('resize', this._updateDimensions, true);
        var receiptsArray = this.receiptsArray;
        var waitingReceiptsArray = this.waitingReceiptsArray;
        var maxReceiptsZ = this.maxReceiptsZ;
        var yLimit = this.yLimit;
        var xLimit = this.xLimit;

        function myLoop () {
            setTimeout(function () {
                var geometry = new THREE.BoxGeometry( );
                var material = new THREE.MeshBasicMaterial( { } );
                var receipt = new THREE.Mesh( geometry, material );

                receipt.position.x = xLimit;
                receipt.position.y = -yLimit + Math.random()*yLimit*2;
                receipt.position.z = Math.random()*maxReceiptsZ;

                var s = .1 + Math.random();
                receipt.scale.set(s,s,s);
                receiptsArray.push(receipt);
                myLoop();

                receiptsArray.forEach(function(receipt, index){
                    if (receiptsArray.length > 50) {
                        receiptsArray.pop();
                    }
                    if (receipt.position.x < -xLimit - 80) {
                        waitingReceiptsArray.push(receiptsArray.splice(index,1)[0]);
                    }
                    if (waitingReceiptsArray.length) {
                        waitingReceiptsArray.pop();
                    }
                });

            }, 100)
        }

        myLoop();

    }

    _onAnimate = () => {
        this._updateZeipt();
    };

    _updateZeipt() {
        this.setState({
            zeiptPosition: new THREE.Vector3(
                this.zeiptPosition.x += (((this.mousePos.x - this.windowMiddleX)) - this.zeiptPosition.x) / this.smoothing,
                this.zeiptPosition.y += ((-this.speed.y*10)-this.zeiptPosition.y)/this.smoothing,
                0
            ),

            zeiptRotation: new THREE.Euler(
                this.zeiptRotation.x += ((this.speed.x/1000)-this.zeiptRotation.x)/this.smoothing,
                this.zeiptRotation.y += ((this.speed.y/1000)-this.zeiptRotation.y)/this.smoothing,
                0
            )
        });
    }


    render() {
        const d = 0;

        return (<React3
            mainCamera="camera"
            width={this.state.windowWidth}
            height={this.state.windowHeight}
            clearAlpha={0}
            alpha={true}
            antialias={true}
            onAnimate={this._onAnimate}
            clearColor={0xff00ff}
            shadowMapEnabled
        >
            <resources>

                <boxGeometry
                    resourceId="receiptGeo"

                    width={0.5}
                    height={0.5}
                    depth={0.5}

                    widthSegments={10}
                    heightSegments={10}
                />

            </resources>
            <scene
                ref="scene"
            >
                <perspectiveCamera
                    name="camera"
                    fov={this.fieldOfView}
                    aspect={this.aspectRatio}
                    near={this.nearPlane}
                    far={this.farPlane}
                    position = {this.cameraPosition}
                />

                <ambientLight
                    color={0xffffff}
                />
                <directionalLight
                    color={0xffffff}
                    intensity={1}

                    castShadow

                    shadowMapWidth={this.state.windowWidth}
                    shadowMapHeight={this.state.windowHeight}

                    shadowCameraLeft={d}
                    shadowCameraRight={d}
                    shadowCameraTop={d}
                    shadowCameraBottom={d}

                    shadowCameraFar={d}
                    shadowCameraNear={d}

                    position={this.lightPosition}
                    lookAt={this.lightTarget}
                />

                {this.state.receiptsArray.map((receipt, index) => {
                    return <mesh
                        rotation={new THREE.Euler(
                            receipt.rotation.x += (1/receipt.scale.x) *0.005,
                            receipt.rotation.y += (1/receipt.scale.x) *0.005,
                            receipt.rotation.z += (1/receipt.scale.x) *0.005
                        )}
                        position={new THREE.Vector3(
                            receipt.position.x += -5 -(1/receipt.scale.x) * this.speed.x *.05,
                            receipt.position.y += (1/receipt.scale.x) * this.speed.y *.2,
                            receipt.position.z
                        )}
                        key={index}
                    >
                        <boxGeometry
                            width={25}
                            height={42.57}
                            depth={1}
                        />

                        <meshBasicMaterial
                            color={0xFFFFFF}
                            opacity={receipt.position.z / 1000}
                            transparent={true}
                        >
                            <texture
                                url="images/receipt.jpg"
                            />
                        </meshBasicMaterial>

                    </mesh>
                })}

            </scene>
        </React3>);
    }
}