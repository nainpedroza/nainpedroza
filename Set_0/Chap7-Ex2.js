function dateTransform(date,originalCountry){
    var mexicoHolidays = {
        "01/01": "Año Nuevo",
        "06/01": "Dia de reyes",
        "05/02": "Dia de la constitución",
        "14/02": "San valentin",
        "24/02": "Dia de la bandera",
        "21/03": "Nat. Benito Juarez",
        "01/05": "Dia del trabajador",
        "05/05": "Batalla de Puebla",
        "10/05": "Día de las madres",
        "15/05": "Día del maestro",
        "16/09": "Día de la independencia",
        "12/10": "Dia de la raza",
        "02/11": "Día de muertos",
        "20/11": "Revolución mexicana",
        "24/12": "Noche buena",
        "25/12": "Navidad",
        "28/12": "Dia de los inocentes",
        "31/12": "Fin de año"
    };
    var usaHolidays = {
        "01/01": "New Year Day",
        "01/16": "Martin Luther King Jr. Day",
        "02/20": "Presidents Day (Washingtons Birthday)",
        "04/01": "Aprils fools day",
        "05/28": "Memorial Day",
        "07/04": "Independence Day",
        "09/03": "Labor Day",
        "08/12": "Columbus Day",
        "12/11": "Veterans Day",
        "11/22": "Thanksgiving",
        "12/25": "Christmas day",
        "12/31": "End of the year"    
    };    
    
    if (originalCountry == "US"){
        var value = Object.values(mexicoHolidays);
        var key = Object.keys(mexicoHolidays);
    }
    else{
        var value = Object.values(usaHolidays);
        var key = Object.keys(usaHolidays);       
    }
    var newdate = date.replace(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/, "$2/$1/$3")
    var temp = newdate.slice(0,5);
    for(let i=0; i< key.length; i++){
        if(temp == key[i]){return newdate +" "+ value[i]}
    }
    return newdate;  
}

dateTransform("09/16/2014","US"); //'16/09/2014 Día de la independencia'
dateTransform("01/04/2014 ","MX"); //'04/01/2014  Aprils fools day'
