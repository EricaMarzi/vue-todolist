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
            newTaskText: "",
            searchText: ""
        }
    },

    computed: {
        filteredTasks(){
            const searchTerm =this.searchText.toLowerCase()
            return this.tasks.filter(task => {
                if (task.text.toLowerCase().includes(searchTerm))return true
                else return false
            })
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

            this.newTaskText = ""
        },
        setAllDone(){
            this.tasks.forEach(task => {
                task.done = true;
            })
        },
        setAllToDo(){
            this.tasks.forEach(task => {
                task.done = false;
            })
        },
        deleteAllTasks(){
            this.tasks = []
        }
    }
});

app.mount('#root')