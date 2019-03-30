<template>
  <div id="taskComponent">
    <div class="row justify-content-md-center" id="task">
      <div class="col-xl-10">
        <table class="taskTable" id="taskTable">
          <thead>
          <tr>
            <th class="resumeTable" width="15%">Дата поступления</th>
            <th class="resumeTable" width="15%">Дата выполнения</th>
            <th class="resumeTable" width="35%">Наиенование</th>
            <th class="resumeTable" width="35%">Объём</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="task in tasks">
            <td class="resumeTable">{{task.dateStartTask}}</td>
            <td class="resumeTable">{{task.dateFinishTask}}</td>
            <td class="resumeTable">{{task.nameTask}}</td>
            <td class="resumeTable">{{task.valueTask}}</td>
          </tr>

          </tbody>
        </table>
        <br>
        <div class="row">
          <div class="col-xl-4">
                <button id="btnAddTask" @click="addTask">Добавить</button>
<!--            <input id="btnAddTask" type="button"-->
                   @click="addTask"
                   value="Добавить">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Task',
    components: {AddTaskForm},
    data() {
      return{
        isActiveAddTask: false,
        tasks: [],
      }
    },
    methods : {
      addTask() {
        this.isActiveAddTask = true;
      },
      onAddFormDone(task) {
        this.isActiveAddTask = false;
        if (task === null) {
          return;
        }
        this.tasks.push(task);
      },
    }
  }
</script>


<style>

</style>
