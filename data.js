var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.008055365778435686,
        "pitch": 0.009398784133836102,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.0459930285622185,
          "pitch": 0.2530231213691465,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.760908646447124,
          "pitch": 0.0651982710182395,
          "rotation": 3.141592653589793,
          "target": "1-dining"
        },
        {
          "yaw": -2.932453820140566,
          "pitch": 0.09565031861512452,
          "rotation": 4.71238898038469,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.06175780430134026,
        "pitch": 0.010481767639744177,
        "fov": 1.1462058103358024
      },
      "linkHotspots": [
        {
          "yaw": -0.6285886318495528,
          "pitch": 0.14738400103901128,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": -1.6661095684795715,
          "pitch": 0.09087480483400157,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.3306803409739327,
          "pitch": 0.0793283046478166,
          "rotation": 3.141592653589793,
          "target": "7-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.8098036647277986,
        "pitch": -0.021223286404364217,
        "fov": 0.989912680116555
      },
      "linkHotspots": [
        {
          "yaw": 0.967810540615627,
          "pitch": 0.09641861614801428,
          "rotation": 9.42477796076938,
          "target": "1-dining"
        },
        {
          "yaw": -0.291928496957949,
          "pitch": 0.2518230601143827,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": 0.1560826031208471,
          "pitch": 0.06479560024539666,
          "rotation": 1.5707963267948966,
          "target": "3-master-bedroom"
        },
        {
          "yaw": 1.175960587543317,
          "pitch": 0.06924367155908939,
          "rotation": 3.141592653589793,
          "target": "7-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.13437597618331232,
        "pitch": -0.007262052312025702,
        "fov": 1.0937713707844614
      },
      "linkHotspots": [
        {
          "yaw": 1.357160541190762,
          "pitch": 0.4517270029806486,
          "rotation": 1.5707963267948966,
          "target": "4-master-bath"
        },
        {
          "yaw": -2.9182005030769105,
          "pitch": 0.2368284813227124,
          "rotation": 7.853981633974483,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bath",
      "name": "Master Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004759955076423239,
        "pitch": 0,
        "fov": 1.0937708822193553
      },
      "linkHotspots": [
        {
          "yaw": 0.028070387031696953,
          "pitch": 0.22695778617939055,
          "rotation": 3.141592653589793,
          "target": "5-master-closet"
        },
        {
          "yaw": -1.5359409833865083,
          "pitch": 0.15953106807627826,
          "rotation": 3.141592653589793,
          "target": "6-laundry"
        },
        {
          "yaw": 1.666221491134798,
          "pitch": 0.1716240997220062,
          "rotation": 3.141592653589793,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-closet",
      "name": "Master Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9679221557700705
      },
      "linkHotspots": [
        {
          "yaw": -2.699232996329581,
          "pitch": 0.15570795348746813,
          "rotation": 4.71238898038469,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.8436457279909789
      },
      "linkHotspots": [
        {
          "yaw": 0.7593594915366371,
          "pitch": 0.13567398442879153,
          "rotation": 1.5707963267948966,
          "target": "4-master-bath"
        },
        {
          "yaw": -0.0056839188301083254,
          "pitch": 0.29535381681932193,
          "rotation": 3.141592653589793,
          "target": "7-pantry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.003684016882354868,
        "pitch": 0.009704382009275037,
        "fov": 1.149969268099577
      },
      "linkHotspots": [
        {
          "yaw": -1.5905268840803721,
          "pitch": 0.43053889031393133,
          "rotation": 3.141592653589793,
          "target": "6-laundry"
        },
        {
          "yaw": 1.5820903766660734,
          "pitch": 0.234116903995778,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Maple Plan #22022-05",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
