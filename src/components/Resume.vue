<template>
<div id="resumeComponent">
  <!--<h3>{{test}}</h3>-->
  <div class="row justify-content-md-center" id="resume">
  <div class="col-ml-6" id="resumeForm">
    <table id="resumeTable">
      <thead>
      <tr>
        <th>Дата поступления</th>
        <th>Дата увольнения</th>
        <th>Наименование организации</th>
        <th>Должность</th>
        <th>Обязаности</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="job in jobs">
        <td>{{job.dateStartJob}}</td>
        <td>{{job.dateDismissalJob}}</td>
        <td>{{job.nameCompanyJob}}</td>
        <td>{{job.positionJobJob}}</td>
        <td>{{job.dutyJob}}</td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-xl-4">
        <input id="btnAddJob" type="button"
               @click="addJob"
               value="Добавить">
      </div>
    </div>
    </div>

    <add-job-form v-if="isActive" v-on:done="onAddFormDone"></add-job-form>

  </div>
</div>
</template>

<script>
import AddJobForm from "@/components/AddJobForm";
export default {
  name: 'Resume',
  components: {AddJobForm},
  data() {
    return {
      isActive: false,
      jobs: [],
    }

  },
  methods :{
      addJob () {
        this.isActive = true;
      },
      onAddFormDone(job) {
        this.isActive = false;
        if (job === null) {
          return;
        }
        this.jobs.push(job);
      },
  }
}
</script>

<style>
  #resumeForm{
    /*display: none;*/
    padding: 10px;
    background: lightgoldenrodyellow;
    border: black solid 1px;
    border-radius: 5px;
  }

  #addJobForm{
    /*display: none;*/
    position: absolute;
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
