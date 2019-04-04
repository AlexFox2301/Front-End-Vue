<template>
  <div id="addTaskComponent">
    <div class="row" id="addTaskForm">
      <div class="col-10 ">
        <div class="row">
          <div class="col-5">
            <label for="dateStartTask">Дата поступления</label>
          </div>
          <div class="col-5">
            <input id="dateStartTask" type="text" v-model="dateStartTask" placeholder="Дата поступления">
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <label for="dateEndTask">Дата выполнения</label>
          </div>
          <div class="col-5">
            <input id="dateEndTask" type="text" v-model="dateEndTask" placeholder="Дата выполнения">
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <label for="taskName">Наименование</label>
          </div>
          <div class="col-5">
            <input id="taskName" type="text" v-model="taskName" placeholder="Наименование">
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <label for="taskValue">Объем</label>
          </div>
          <div class="col-5">
            <input id="taskValue" type="text" v-model="taskValue" placeholder="Объем">
          </div>
        </div>

        <div class="row">
<!--          <div class="col-3">-->
          <button @click="createTask" id="btnAddTaskToForm">Добавить</button>
<!--            <input type="button" id="btnAddTaskToForm"-->
<!--                   @click="createTask" value="Добавить">-->
          <button @click="cancelTask" id="btnNotAddTask">Отменить</button>
            <!--            <input type="button" id="btnNotAddTask"-->
            <!--                   @click="cancelTask" value="Отменить">-->
<!--          </div>-->
<!--          <div class="col-3">-->
<!--                        -->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'AddTaskForm',
        data() {
          return{
            dateStartTask: "",
            dateEndTask: "",
            taskName: "",
            taskValue: "",
          }

        },
        methods: {
          createTask() {

            var task = {};

            // alert('объект создан');
            task.dateStartTask = this.dateStartTask;
            task.dateEndTask = this.dateEndTask;
            task.taskName = this.taskName;
            task.taskValue = this.taskValue;
            // alert('Поля заполнены');
            this.$emit('done', task);

            this.dateStartTask = "";
            this.dateEndTask = "";
            this.taskName = "";
            this.taskValue = "";
          },

          cancelTask() {
            this.$emit('done', null);

            this.dateStartTask = "";
            this.dateEndTask = "";
            this.taskName = "";
            this.taskValue = "";
          },
        }
    };
</script>

<style>

  #addTaskForm{
    position: absolute;
    /*position: center;*/
    background-color: #e5c1ff;
    margin: 10px;
    padding: 10px;
    border: black solid 1px;
    border-radius: 5px;
  }

  button{
    padding: 2px;
    margin: 5px;
  }

  input{
    padding: 5px;
    margin: 5px;
  }


</style>


