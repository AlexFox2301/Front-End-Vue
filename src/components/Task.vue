<template>
  <div id="taskComponent">

    <add-task-form v-if="isActiveAddTask" v-on:done="onAddFormDone"></add-task-form>


    <div class="row justify-content-md-center" id="task">

      <div class="col-xl-10" id="taskForm">
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
            <td class="resumeTable">{{task.dateEndTask}}</td>
            <td class="resumeTable">{{task.taskName}}</td>
            <td class="resumeTable">{{task.taskValue}}</td>
          </tr>

          </tbody>
        </table>
        <br>
        <div class="row">
          <div class="col-xl-4">
<!--                <button id="btnAddTask" @click="addTask">Добавить</button>-->
            <input id="btnAddTask" type="button"
                   @click="addTask"
                   value="Добавить">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  import AddTaskForm from "@/components/AddTaskForm";
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

  #taskForm{
    /*display: none;*/
    padding: 10px;
    background: #c1faff;
    border: black solid 1px;
    border-radius: 5px;
  }

  table{
    width: 100%;
  }

  th{
    border: gray solid 3px;
    text-align: center;
    padding: 5px;
  }

  td{
    border: gray solid 1px;
    padding: 3px;
  }
</style>
