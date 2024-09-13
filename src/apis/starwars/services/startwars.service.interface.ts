export interface IStarwarsService {
  getAllPeople(): Promise<any>;
  getAllPlanet(): Promise<any>;
}
