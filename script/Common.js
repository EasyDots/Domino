module.exports = {
    find_map: function(root) {
		if (root.active === false) {
			return null;
		}

		if(root.group === "world") {
            console.log("found");
			return root;
		}

		for(var i = 0; i < root.children.length; i ++) {
			var node = this.find_map(root.children[i]);
			if (node) {
				return node;
			}
		}

		return null;
	},

	gen_map_data: function(map_root) {
		
		var map = {};
		var data=[];
		map.name=map_root.name;
		for(var i = 0; i < map_root.children.length; i ++) {
			let obj={};
			obj.size=cc.v2(map_root.children[i].width,map_root.children[i].height);
			obj.point=map_root.children[i].position;
			obj.group=map_root.children[i].group;
			obj.rotation = map_root.children[i].rotation;
			obj.scaleX = map_root.children[i].scaleX;
			obj.scaleY = map_root.children[i].scaleY;
			obj.name=map_root.children[i].name;
			obj.color = map_root.children[i].color;
			obj.opacity = map_root.children[i].opacity;
			data.push(obj);
		}
		map.data=data;
		return map;
	},

    gen_nevmesh: function () {
		var canvas = cc.find('Canvas/View/CreateView/Game')
        var map = this.find_map(canvas);
        var game_map = null;
        if(map) {
        	game_map = this.gen_map_data(map);
        }
       return game_map;
    },
   
};
