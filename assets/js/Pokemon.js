class Pokemon {
    _id;
    _name;
    _types = [];
    _type;
    _image;

    setId(id){
        this._id = id;
    }
    getId(){
        return this._id;
    }
    setName(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
    setTypes(types=[]){
        this._types = types
    }
    getTypes(){
        return this._types;
    }
    setType(type){
        this._type = type;
    }
    getType(){
        return this._type;
    }
    setImage(image){
        this._image = image; 
    }
    getImage(){
        return this._image;
    }
   
}