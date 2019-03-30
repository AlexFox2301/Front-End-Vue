<template>
  <div class="row justify-content-md-center" id="resume">
    <div class="col-xl-8" id="profilForm">
    <div class="row">
      <div class="col-4" id="foto">
        <img v-bind:src="prof.foto" width="70%" alt="foto">
      </div>

      <div class="col-8" id="dataUser">

        <div class="row">
          <div class="col col-xl-3">
            <label class="" for="lastNameResult">Фамилия: </label>
          </div>
          <div class="col col-xl-9">
            <div class="font-italic" id="lastNameResult">{{prof.lastName}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col col-xl-3">
            <label class="" for="firstNameResult">Имя: </label></div>
          <div class="col col-xl-9">
            <div class="font-italic" id="firstNameResult">{{prof.firstName}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="secondNameResult">Отчество: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="secondNameResult">{{prof.secondName}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="addressResult">Адрес: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="addressResult">{{prof.address}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="schoolResult">ЗОШ: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="schoolResult">{{prof.school}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="educationResult">Образование: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="educationResult">{{prof.education}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="universityResult">ВУЗ:</label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="universityResult">{{prof.university}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="facultyResult">Факультет: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="facultyResult">{{prof.faculti}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3">
            <label class="" for="specialtyResult">Специальность: </label>
          </div>
          <div class="col-xl-9">
            <div class="font-italic" id="specialtyResult">{{prof.specialty}}</div>
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
        prof: {
          foto: "..//foto//fotoTalanov.jpg",
          lastName: "Таланов",
          firstName: "Артем",
          secondName: "Александрович",
          address: "ПГУ 20А, кв.48",
          school: "СОШ №44",
          education: "Высшее техническое",
          university: "Киевский национальный университет строительства и архитектуры",
          faculti: "Строительные машины",
          specialty: "Инженер механик"
        }
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
