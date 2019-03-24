<template>
  <div class="row justify-content-md-center" id="resume">
    <div class="col-xl-8" id="profilForm">
    <div class="row">
      <div class="col-4" id="foto">
        <img src="#" width="70%" alt="foto">
      </div>

      <div class="col-8" id="dataUser">

        <div class="row">
          <div class="col col-xl-3">
            <label class="" for="lastNameResult">Фамилия:</label></div>
          <div class="col col-xl-9">
            <div class="font-italic" id="lastNameResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="secondNameResult">Отчество:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="secondNameResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="addressResult">Адрес:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="addressResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="schoolResult">ЗОШ:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="schoolResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="educationResult">Образование:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="educationResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="universityResult">ВУЗ:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="universityResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="facultyResult">Факультет:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="facultyResult"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="specialtyResult">Специальность:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="specialtyResult"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'Profil',
    data() {
      return {

      }
    },
  }
</script>


<style>
  #profilForm {
    /*display: none;*/
    background-color: lightcyan;
    border: solid gray 1px;
    border-radius: 15px;
  }
</style>
