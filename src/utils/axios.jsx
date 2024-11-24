import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzlmMTBjZjU5ZTQ2OWQxOWQ2M2U3OGNiZDlmZDYwOSIsIm5iZiI6MTczMjAxNTIxMC4wMDg4MDQ2LCJzdWIiOiI2NzNjNmUzMTUwNmRlZTdjMWEwNTU3YzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kj4Uq2YenIIuX796yAEI49ZleBU5iDU8F4adBxkn35E'
      }
});

export default instance