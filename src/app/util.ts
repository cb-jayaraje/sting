import { DropdownsService } from "./services/dropdowns.service";



export function getNum (Service: any) {

    const data = new Service()

    const numOfComponents = data[Object.keys(data)[0]].length

    // console.log(data[Object.keys(data)[0]].length);
    

    return numOfComponents
    
   }