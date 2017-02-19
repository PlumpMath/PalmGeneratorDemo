import * as THREE from 'three';

export default class CollectionMaterials {
    constructor(){
        let materials = {
            "standard": new THREE.MeshStandardMaterial( {
                color: 0xefff00,
                emissive: 0x4ca078,
                roughness:0.55,
                metalness:0.89
            }),
            "wireframe": new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ),
            "phong": new THREE.MeshPhongMaterial({
                color: 0xa2300c,
                emissive: 0x280000,
                specular: 0x413e0f,
                shininess: 26
            }),
            "lambert": new THREE.MeshLambertMaterial({color: 0xffffff})
        };
        return materials;
    }
}
