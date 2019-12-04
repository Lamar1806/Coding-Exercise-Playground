class Snapshot {
    constructor(array) {
      this.array = array.map((x)=>{
          return x;
      })
      Object.freeze(this.array)
    }
    
    restore() {
      return this.array;  
    }
}
  
  var array = [1, 2];
  var snap = new Snapshot(array);
  array[0] = 30;
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
  try{
    array.push(4);
  }catch(e){
    console.log(e)
  }
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"