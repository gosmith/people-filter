import { ref } from 'vue'
import axios from 'axios'

const getPeople = () => {
    const people = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let res = await axios.get('https://randomuser.me/api?results=50')
            const { data: {results} }  = res
            people.value = results
        } catch(err) {
            error.value = err.message
        }
    }

    return { people, error, load}
}

export default getPeople