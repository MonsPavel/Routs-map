<template>
  <div class="container">
    <h3>All routes</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Visit Day</th>
            <th>Visit Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rout in routs" v-bind:key="rout.id">
            <td>{{rout.id}}</td>
            <td>{{rout.day_of_week}}</td>
            <td>{{rout.visit_date}}</td>
            <td><button v-on:click="getRoutUrl(rout.trade_point_id)">Show on Map</button></td>
            <td><button class="btn btn-danger" v-on:click="deleteRouteClicked(rout.id)">Delete</button></td>
            <td><button class="btn btn-success" v-on:click="editRout(rout)">Update</button></td>
          </tr>
        </tbody>
        <div class="row">
            <button class="btn btn-success" @click="newModal">Add</button>
        </div>
      </table>
    </div>


    <!-- Modal -->
    <modal name="points">
      <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New</h5>
      <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Info</h5>
      <form @submit.prevent="editmode ? updateRoutesClicked() : addRoutesClicked()">
        <div class="modal-body">
          <input type="hidden" :value="rout.id" >
          <div class="form-group">
            <select v-model="selected_point">
              <option :value="null" disabled>Выберите точку поставки</option>
              <option v-for="point in points" v-bind:value="point.id" v-bind:key="point.id">{{point.name}}</option>
            </select>
          </div>

          <div class="form-group">
              <select v-model="selected_agent">
                <option :value="null" disabled>Выберите агента</option>
                <option v-for="agent in agents" v-bind:value="agent.id" v-bind:key="agent.id">{{agent.first_name}}</option>
              </select>
          </div>
          <template>
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
              <input type="radio" id="one" value="Назначить на день недели" v-model="picked">
            <label for="one" style="margin-top: -6px;">Назначить на день недели</label>
            <br>
            <input type="radio" id="two" value="Назанчить на конкретную дату" v-model="picked">
            <label for="two" style="margin-top: -6px;">Назанчить на конкретную дату</label>
            <br>
            </div>
          </template>

          <div class="form-group" v-if="picked === 'Назначить на день недели'">
              <select v-model="selected_day">
                <option :value="null" disabled>Выберите день недели</option>
                <option v-for="day in days" v-bind:value="day.value" v-bind:key="day.label">{{day.label}}</option>
              </select>
          </div>

          <div class="form-group" v-if="picked === 'Назанчить на конкретную дату'">
            <span>Выберите день поставки</span>
            <input v-model="visit_date"  type="date" name="date" 
            data-date-format="YYYY-MM-DD" value="2019-12-15"
                class="form-control">
        </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" v-on:click="closeModal()">Close</button>
              <button v-show="editmode" type="submit" class="btn btn-success" >Update</button>
              <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
          </div>

        </div>
      </form>
            </modal>
    </div> 
</template>

<script>
import MainDataService from '../services/MainDataService';
import { Form } from 'vform';


window.Form = Form;

export default {
  name: "AgentsList",
  data() {
    return {
      components: {
    'bootstrap-modal': require('vue2-bootstrap-modal')
    },
    rout: {
      trade_point_id: '',
      agent_id: '',
      day_of_week: '',
      visit_date: '',
    },
      editmode: false,
      days: [
        {label:'Понедельник', value: 1},
        {label:'Вторник', value: 2},
        {label:'Среда', value: 3},
        {label:'Четверг', value: 4},
        {label:'Пятница', value: 5},
        {label:'Суббота', value: 6},
        {label:'Воскресенье', value: 7},
        ],
        selected_day: null,
      routs: [],
      points: [],
      selected_point: null,
      agents: [],
      selected_agent: null,
      visit_date: null,
      picked: 'Назначить на день недели',
      form: new Form({
                    id:'',
                    trade_point_id : '',
                    agent_id: '',
                    day_of_week: '',
                    visit_date: ''
                })
    };
  },
  methods: {
    refreshRoutes() {
      MainDataService.retrieveAllRouts()
        .then(response => {
          this.routs = response.data.routes;
        });
        MainDataService.retrieveAllPoints()
        .then(response => {
          this.points = response.data["trade-points"];
        });
        MainDataService.retrieveAllAgents()
        .then(response => {
          this.agents = response.data.agents;
        });
  },
    newModal(){
      this.editmode = false;
      this.selected_point = null;
      this.selected_agent = null;
      this.selected_day = null;
      this.visit_date = null;
      this.$modal.show('points');
  },
  editRout(rout) {
    this.editmode = true;
    this.rout = rout;
    this.rout.id = rout.id;
    this.selected_point = this.rout.trade_point_id;
    this.selected_agent = this.rout.agent_id;
    this.selected_day = this.rout.day_of_week;
    this.visit_date = this.rout.visit_date;
    this.$modal.show('points');
    this.form.fill(rout);
  },
  closeModal() {
    this.$modal.hide('points');
  },
  updateRoutesClicked() {
    let rout = this.rout;
      rout.id = this.rout.id
      rout.trade_point_id = this.selected_point;
      rout.agent_id = this.selected_agent;
      rout.day_of_week = this.selected_day;
      rout.visit_date = this.visit_date;
      if(rout.visit_date) rout.day_of_week = '';
      MainDataService.updateRouts(rout.id, rout)
      .then(()=>{
                  this.$modal.hide('points');
                  this.refreshRoutes();
                })
    },
    addRoutesClicked() {
                    let newRout = this.rout;
                    newRout.trade_point_id = this.selected_point;
                    newRout.agent_id = this.selected_agent;
                    newRout.day_of_week = this.selected_day;
                    newRout.visit_date = this.visit_date;
                    if(newRout.visit_date) newRout.day_of_week = '';
                    if(newRout.agent_id && (newRout.day_of_week || newRout.visit_date)) {
                      MainDataService.createRout(newRout).then(() => {
                        this.$modal.hide('points');
                        this.refreshRoutes();
                      })
                    } else {
                      alert('Заполены не все поля');
                    }
                
    },
  deleteRouteClicked(id) {
     this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        // Send request to the server
                         if (result.value) {
                                 MainDataService.deleteRouts(id).then(() =>{
                                        this.$swal(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                        )
                                    this.refreshRoutes();
                                }).catch(()=> {
                                    this.$swal("Failed!", "There was something wronge.", "warning");
                                });
                         }
                    })
    },
    getRoutUrl(pointId) {
      MainDataService.retrieveAllPoints()
        .then(response => {
          let points = response.data["trade-points"];
          points.forEach(point => {
        if(point.id === pointId) {
          window.open(`https://maps.google.co.uk/maps?t=m&f=d&saddr=Current+Location&daddr=${point.name} `,'_blank');
        } 
      });
        });
    }
  },
  created() {
    this.refreshRoutes();
  }
};
</script>

<style>
.v--modal-box.v--modal {
  width: 500px!important;
  height: 310px!important;
  padding: 10px;
}
</style>