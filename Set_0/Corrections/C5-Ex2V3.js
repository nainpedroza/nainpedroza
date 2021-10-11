let building = {'floors':{'lobby':{'employee':['Alice','Bob','Lydia'], 'equipment':['Office computer','Stapler','Laptop1'], 'rooms':['A','B','C']},
                          'first':{'employee':['Sally','Kim','Hanna'], 'equipment':['Camera1','Desk','Chair','Board','Fax'], 'rooms':['1A','1B']},
                          'second':{'employee':['Laura','Luis'], 'equipment':['Camera2','Laptop2', 'Office computer','Fax'], 'rooms':['2A','2B']}
                        }, 
                'employee':{
                           'Alice':{'floor':'lobby','room':'A', 'equipment':'Office computer'},
                           'Bob':{'floor':'lobby','room':'B', 'equipment':'Stapler'},
                           'Lydia':{'floor':'lobby','room':'C', 'equipment':'Laptop1'},
                           'Sally':{'floor':'first','room':'1A', 'equipment':['Camera1','Fax']},
                           'Kim':{'floor':'first','room':'1A', 'equipment':['Desk','Chair']},
                           'Hannah':{'floor':'first','room':'1B', 'equipment':'Board'},
                           'Laura':{'floor':'second','room':'2B', 'equipment':['Camera2','Laptop2']},
                           'Luis':{'floor':'second','room':'2B', 'equipment':['Office computer','Fax']}
                          },
                'equipment':{
                          'Office computer' : [{'floor':'lobby', 'room': 'A', 'owner': 'Alice'},
                                               {'floor':'second','room':'2B', 'owner': 'Luis'}],
                          'Stapler' : {'floor':'lobby', 'room': 'B', 'owner':'Bob'},
                          'Laptop1' : {'floor':'lobby', 'room': 'C', 'owner':'Lydia'},
                          'Laptop2' : {'floor':'second', 'room': '2B', 'owner':'Laura'},
                          'Camera1' : {'floor':'first', 'room': '1A', 'owner':'Sally'},
                          'Camera2' : {'floor':'second', 'room': '2B', 'owner':'Laura'},
                          'Fax' : [{'floor':'first', 'room': '1A', 'owner':'Sally'},
                                  {'floor':'second', 'room': '2B', 'owner':'Luis'}],
                          'Desk' : {'floor':'first','room':'1A', owner: 'Kim'},
                          'Chair': {'floor':'first','room':'1A', owner: 'Kim'},
                          }
           };


function getInfo(){
    let memo = {};
    function search(idx){
        if(memo[idx]){
            return memo[idx];
        }
        let searchValue = {};
        if (building['employee'][idx]){
            searchValue = building['employee'][idx];
        } else if (building['equipment'][idx]){
            searchValue = building['equipment'][idx];
        }
        if (Object.keys(searchValue).length > 0){
            memo[idx] = searchValue;
        }
        return searchValue;
    }
    return search;
}
var lookForSomething = getInfo();
console.log(lookForSomething('Camera2'));
