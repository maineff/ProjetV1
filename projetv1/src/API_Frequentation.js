import axios from 'axios';

//API: https://data.culture.gouv.fr/explore/dataset/frequentation-dans-les-salles-de-cinema/api/?disjunctive.annee&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IlNVTSIsInlBeGlzIjoiZW50cmVlc19taWxsaW9ucyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMwMDAwODAifV0sInhBeGlzIjoiYW5uZWUiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJmcmVxdWVudGF0aW9uLWRhbnMtbGVzLXNhbGxlcy1kZS1jaW5lbWEiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLmFubmVlIjp0cnVlfX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D

const API_URL="api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=4081444b7b90198136fefe6ed4ccf35b";


class API_FREQUENTATION{

    fetch(){
        return axios
          .get(`${API_URL} `, {
          crossdomain: true
        })
      }

}
export default API_FREQUENTATION;

