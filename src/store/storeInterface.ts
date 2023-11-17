export interface IResource{
    id: string,
    name: string, 
    image: string, 
    selected: boolean

}
export interface IStore{
    Resources:IResource[]|[]
    FilterBackUp:IResource[]|[]
    SelectedResources:IResource[]|[]
    SearchResource:string
  }