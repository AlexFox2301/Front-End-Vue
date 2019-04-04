<template>
  <div id="addJobComponent">
    <!--<h3>{{test}}</h3>-->
    <div class="row justify-content-center">

      <div class="col-5" id="addJobForm">

        <div class="row">
          <div class="col-xl-6">
            <label for="dateStart">Дата поступления</label>
          </div>
          <div class="col-xl-6">
            <input type="text" v-model="dateStart" id="dateStart" placeholder="Дата поступления">
            <!--<span>{{dateStart}}</span>-->
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <label for="dateDismissal">Дата увольнения</label>
          </div>
          <div class="col-xl-6">
            <input type="text" v-model="dateDismissal" id="dateDismissal" placeholder="Дата увольнения">
            <!--<span>{{dateDismissal}}</span>-->
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <label for="nameCompany">Наименование компании</label>
          </div>
          <div class="col-xl-6">
            <input type="text" v-model="nameCompany" id="nameCompany" placeholder="Наименование компании">
            <!--<span>{{nameCompany}}</span>-->
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <label for="positionJob">Должность</label>
          </div>
          <div class="col-xl-6">
            <input type="text" v-model="positionJob" id="positionJob" placeholder="Должность">
            <!--<span>{{positionJob}}</span>-->
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <label for="duty">Обязанности</label>
          </div>
          <div class="col-xl-6">
            <input type="text" v-model="duty" id="duty" placeholder="Обязанности">
            <!--<span>{{duty}}</span>-->
          </div>
        </div>
        <div class="row">
        <div class="col-xl-3">
          <input class="btn btn-info" id="btnSaveJob" type="button"
                 @click="createJob"
                 value="Сохранить">
        </div>
        <div class="col-xl-3">
          <input class="btn btn-info" id="btnAddJobCancel" type="button"
                 @click="cancelJob"
                 value="Отмена">
        </div>
      </div>
      </div>

    </div>
  </div>
</template>


<script>
  export default {
    name: 'AddJobForm',
    data() {
      return {
        dateStart: "",
        dateDismissal: "",
        nameCompany: "",
        positionJob: "",
        duty: "",
      }

    },
    methods :{
      createJob() {

        var job = {};
        // alert('объект создан');
        job.dateStartJob = this.dateStart;
        job.dateDismissalJob = this.dateDismissal;
        job.nameCompanyJob = this.nameCompany;
        job.positionJobJob = this.positionJob;
        job.dutyJob = this.duty;
        // alert('Поля заполнены');
        this.$emit('done', job);

        this.dateStart = "";
        this.dateDismissal = "";
        this.nameCompany = "";
        this.positionJob = "";
        this.duty = "";
      },

      cancelJob() {
        // alert(this.isActive);
        this.$emit('done', null);

        this.dateStart = "";
        this.dateDismissal = "";
        this.nameCompany = "";
        this.positionJob = "";
        this.duty = "";
      },
    }
  }
</script>


<style>
  /*#resumeForm{*/
    /*!*display: none;*!*/
    /*padding: 10px;*/
    /*background: lightgoldenrodyellow;*/
    /*border: black solid 1px;*/
    /*border-radius: 5px;*/
  /*}*/

  #addJobForm{
    /*display: none;*/
    position: absolute;
    /*position: center;*/
    padding: 10px;
    border: black solid 1px;
    border-radius: 5px;
    background: #b3ffad;
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
