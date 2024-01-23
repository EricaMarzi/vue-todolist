/*


Bonus:

Mostrare una scritta "non ci sono task" se abbiamo cancellato tutti i task
SUPER BONUS
Creare dei bottoni con le azioni massive (tutti fatti, tutti da fare, elimina tutti)
Creare un filtro di ricerca in tempo reale
*/

const {createApp} = Vue;

const app= createApp ({
    data(){
        return {
            tasks: [
                { id: 1, done: false, text: 'Fare la spesa' },
                { id: 2, done: true, text: 'Lavare i capelli' },
                { id: 3, done: false, text: 'Comprare una marca da bollo' },
                { id: 4, done: false, text: 'Aggiornare il PC' }
                ],
            newTaskText: ""
        }
    },

    methods: {
        removeTask(id) {
            this.tasks = this.tasks.filter((task) => {
                if(id !== task.id) return true
                else return false
            })
        }, 
        addTask() {
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText
            }
            this.tasks.push(newTask)
        }
    }
});

app.mount('#root')