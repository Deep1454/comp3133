const fs = require('fs')

let header = "eid,first_name,last_name,city"

fs.appendFileSync('employee.csv',header)

async function writeEmployeeData(eid, fnm, lnm, city){
    const data = `\r\n${eid},${fnm},${lnm},${city}`
    try {
        await fs.promises.appendFile('employee.csv',data)
        console.log("Employee Record has been added Successfully")
    } catch (error) {
        console.log(error)
    }
}


writeEmployeeData(1,'Deep','Lakhani','Toronto')
writeEmployeeData(2,'Jemish','Kevdaiya','Toronto')
writeEmployeeData(3,'Dhruvi','Patel','Toronto')

