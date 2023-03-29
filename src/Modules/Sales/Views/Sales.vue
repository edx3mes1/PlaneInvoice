<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>Sales Number #{{ 1 }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="container mt-1">
              <form class="row g-3 align-items-center">
                <b-container>
                  <b-row class="text-center">
                    <b-col>
                      <label>Invoice</label>
                      <b-input-group size="sm" class="mb-2">
                        <b-input-group-prepend is-text>
                          <b-icon icon="search" variant="success"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input
                          size="sm"
                          aria-label="ID"
                          class="col-md-12"
                          placeholder="Number Invoice"
                        ></b-form-input>
                      </b-input-group>
                    </b-col>

                    <b-col>
                      <label>Fecha</label>
                      <b-input-group size="sm" class="mb-2">
                        <b-form-input
                          size="sm"
                          type="date"
                          aria-label="Employee Name"
                          class="col-md-12"
                          disabled
                        ></b-form-input>
                      </b-input-group>
                    </b-col>

                    <b-col>
                      <label>Hora</label>
                      <b-input-group size="sm" class="mb-2">
                        <b-form-input
                          size="sm"
                          type="time"
                          aria-label="Employee Name"
                          class="col-md-12"
                          disabled
                        ></b-form-input>
                      </b-input-group>
                    </b-col>
                  </b-row>

                  <b-row class="text-center">
                    <b-col>
                      <label>Customer</label>
                      <b-input-group size="sm" class="mb-2">
                        <b-input-group-prepend is-text>
                          <b-icon icon="search" variant="success"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input
                          size="sm"
                          aria-label="ID"
                          class="col-md-2"
                        ></b-form-input>
                        <b-form-input
                          size="sm"
                          aria-label="Customer Name"
                          class="col-md-12"
                          disabled
                        ></b-form-input>
                      </b-input-group>
                    </b-col>

                    <b-col>
                      <label>NCF</label>
                      <b-input-group class="mb-2">
                        <b-form-input
                          size="sm"
                          type="text"
                          aria-label="NCF"
                          class="col-md-12"
                        ></b-form-input> </b-input-group
                    ></b-col>

                    <b-col>
                      <label>RNC</label>
                      <b-input-group class="mb-2">
                        <b-form-input
                          size="sm"
                          type="text"
                          aria-label="RNC"
                          class="col-md-12"
                        ></b-form-input> </b-input-group
                    ></b-col>
                  </b-row>
                  <b-row class="text-left">
                    <b-col>
                      <label>Employee</label>
                      <b-input-group class="mb-2" size="sm">
                        <b-input-group-prepend is-text>
                          <b-icon icon="search" variant="success"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input
                          size="sm"
                          aria-label="ID"
                          class="col-md-2"
                        ></b-form-input>
                        <b-form-input
                          size="sm"
                          aria-label="Employee Name"
                          class="col-md-12"
                          disabled
                        ></b-form-input>
                      </b-input-group>
                    </b-col>

                    <b-col>
                      <label>Point Of Sales</label>
                      <b-input-group class="mb-2">
                        <b-form-select
                          size="sm"
                          aria-label="Point Of Sales"
                          v-model="selectPointOfSales"
                          :options="optionPointOfSales"
                        ></b-form-select> </b-input-group
                    ></b-col>

                    <b-col>
                      <label>Moneda</label>
                      <b-input-group class="mb-2">
                        <b-form-select
                          size="sm"
                          aria-label="Currency"
                          v-model="selectCurrency"
                          :options="optionCurrencies"
                        ></b-form-select> </b-input-group
                    ></b-col>
                  </b-row>

                  <b-row>
                    <b-col>
                      <label>Nota:</label>
                      <b-input-group class="mb-2">
                        <b-form-textarea
                          size="sm"
                          aria-label="Employee Name"
                        ></b-form-textarea> </b-input-group
                    ></b-col>
                  </b-row>
                </b-container>
              </form>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <form class="row align-items-left">
                <div class="col-md-6">
                  <label>Product</label>
                  <b-input-group class="mb-2" size="sm">
                    <b-input-group-prepend is-text>
                      <b-icon icon="search" variant="success"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      size="sm"
                      aria-label="Product ID"
                      class="col-md-2"
                    ></b-form-input>
                    <b-form-input
                      size="sm"
                      aria-label="Description"
                      class="col-md-12"
                      disabled
                    ></b-form-input>
                  </b-input-group>
                </div>

                <div class="col-md-2">
                  <label>Unit</label>
                  <b-input-group class="mb-2">
                    <b-form-select
                      size="sm"
                      class="col-md-12"
                      v-model="selectUnit"
                      :options="optionUnitsProducts"
                    ></b-form-select>
                  </b-input-group>
                </div>

                <div class="col-md-2">
                  <label>Quantity</label>
                  <b-input-group class="mb-2">
                    <b-form-input size="sm" class="col-md-12"></b-form-input>
                  </b-input-group>
                </div>

                <div class="col-md-2">
                  <label>Price</label>
                  <b-input-group class="mb-2">
                    <b-form-input size="sm" class="col-md-12"></b-form-input>
                  </b-input-group>
                </div>
                <div class="col-md-2">
                  <b-button variant="success">+</b-button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <b-table hover :items="getProducts" :fields="titles"></b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      selectCurrency: null,
      optionCurrencies: [
        { value: "1", text: "PESOS" },
        { value: "2", text: "EURO" },
        { value: "3", text: "DOLLAR" },
      ],
      selectPointOfSales: null,
      optionPointOfSales: [
        { value: "1", text: "Santiago" },
        { value: "2", text: "Moca" },
        { value: "3", text: "Cotui" },
        { value: "4", text: "Santo domingo" },
        { value: "5", text: "La vega" },
      ],
      selectUnit: null,
      optionUnitsProducts: [
        { value: "1", text: "Unidad" },
        { value: "2", text: "Docena" },
        { value: "3", text: "Caja" },
        { value: "4", text: "Kilos" },
        { value: "5", text: "Libra" },
      ],
      titles: [
        "id",
        "description",
        "price",
        "quantity",
        "unit",
        "percent_taxes",
      ],
      getProducts: [
        {
          id: 1,
          description: "HELADO UVA",
          price: 10.0,
          quantity: 10,
          unit: 1,
          percent_taxes: 15,
        },
        {
          id: 2,
          description: "HELADO FRESA",
          price: 10.0,
          quantity: 20,
          unit: 1,
          percent_taxes: 15,
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>