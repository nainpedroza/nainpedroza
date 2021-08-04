building = {'floors':{'lobby':{'workers':['1','2','3'], 'equipment':['Stair1','Hammer1','Laptop1'], 'rooms':['A','B']},
                          'first':{'workers':['4','5','6'], 'equipment':['Stair2','Drill1','Drill2','Laptop2','Fax'], 'rooms':['1A','1B']},
                          'second':{'workers':['7','8'], 'equipment':['Hammer2','Hammer3', 'Machine1','Machine2'], 'rooms':['2A','2B']}
                        }, 
                'workers':{'one':{'floor':'lobby','room':'A', 'equipment':'Hammer1'},
                           'two':{'floor':'lobby','room':'A', 'equipment':'Stair1'},
                           'three':{'floor':'lobby','room':'B', 'equipment':'Laptop1'},
                           'four':{'floor':'first','room':'1A', 'equipment':['Laptop2','Fax']},
                           'five':{'floor':'first','room':'1A', 'equipment':['Stair2','Drill1']},
                           'six':{'floor':'first','room':'1B', 'equipment':'Drill2'},
                           'seven':{'floor':'second','room':'B', 'equipment':['Hammer2','Hammer3']},
                           'eight':{'floor':'second','room':'B', 'equipment':['Machine1','Machine2']}
                          },
           }
building.floors.first;
building.workers.one.equipment;

/*output
  workers: [ '4', '5', '6' ],
  equipment: [
    'Stair2',
    'Drill1',
    'Drill2',
    'Laptop2',
    'Fax'
  ],
  rooms: [ '1A', '1B' ]
}
'Hammer1'
*/
