<template>
  <v-section title="Оформление заказа" class="order-section">
    <client-only>
      <form class="order-form">
        <form-card>
          <form-group title="1. Контактная информация" class="order-contacts">
            <v-row>
              <v-col :col="6" :md="4" :sm="2">
                <v-input v-model="state.username" name="username" placeholder="Имя" :error="stateErrors.username" />
              </v-col>
              <v-col :col="6" :md="4" :sm="2">
                <v-input
                  v-model="state.phone"
                  name="phone"
                  placeholder="Телефон"
                  maska="+7 (###) ###-##-##"
                  :error="stateErrors.phone" />
              </v-col>
            </v-row>
          </form-group>
        </form-card>
        <form-card>
          <form-group title="2. Доставка" class="order-delivery">
            <v-radio-group
              :error="stateErrors.deliveryType"
              :options="deliveryTypes"
              @input="(value) => (state.deliveryType = value.value)" />

            <div class="delivery-fields">
              <v-select
                v-if="state.deliveryType === enums.deliveryTypes.pickup.value"
                v-model="pickupState.restaurant"
                name="restaurant"
                placeholder="Ресторан"
                :options="constants.restaurants"
                :error="pickupErrors.restaurant" />

              <div v-else-if="state.deliveryType === enums.deliveryTypes.delivery.value" class="address">
                <v-row>
                  <v-col :col="8" :sm="2">
                    <v-input
                      v-model="addressState.street"
                      name="street"
                      placeholder="Улица"
                      :error="addressErrors.street" />
                  </v-col>
                  <v-col :col="4" :sm="2">
                    <v-input
                      v-model="addressState.house"
                      name="house"
                      placeholder="Номер дома"
                      maska="###"
                      :error="addressErrors.house" />
                  </v-col>
                  <v-col :col="4" :sm="2">
                    <v-input
                      v-model="addressState.flat"
                      name="flat"
                      placeholder="Квартира"
                      maska="####"
                      :error="addressErrors.flat" />
                  </v-col>
                  <v-col :col="4" :sm="2">
                    <v-input
                      v-model="addressState.entrance"
                      name="entrance"
                      placeholder="Подъезд"
                      maska="##"
                      :error="addressErrors.entrance" />
                  </v-col>
                  <v-col :col="4" :sm="2">
                    <v-input v-model="addressState.floor" placeholder="Этаж" maska="##" :error="addressErrors.floor" />
                  </v-col>
                  <v-col :col="12" :sm="2">
                    <v-input
                      v-model="addressState.comment"
                      name="comment"
                      placeholder="Комментарий"
                      :error="addressErrors.comment" />
                  </v-col>
                </v-row>
              </div>
            </div>
          </form-group>
        </form-card>
        <form-card>
          <form-group title="3. Оплатить">
            <v-radio-group
              v-model="state.paymentMethod"
              :options="constants.payments"
              :error="stateErrors.paymentMethod"
              @input="(value) => (state.paymentMethod = value.value)" />
          </form-group>
        </form-card>
        <form-card>
          <form-group class="order-submit">
            <v-row aligment="center" justify="space-between">
              <v-col :col="7">
                <v-checkbox
                  v-model="state.rulesAgree"
                  label="Я согласен на обработку моих персональных данных"
                  :error="stateErrors.rulesAgree" />
              </v-col>
              <v-col :col="5" justify="end">
                <button type="submit" class="order-submit__button" @click.prevent="createOrder">
                  Оформить заказ
                </button>
              </v-col>
            </v-row>
          </form-group>
        </form-card>
      </form>
    </client-only>
  </v-section>
</template>

<script setup>
  import FormCard from '@/components/Form/FormCard.vue';
  import FormGroup from '@/components/Form/FormGroup.vue';
  import useVuelidate from '@vuelidate/core';
  import { useValidationErrors } from '@/composables/validationErrors.ts';

  // eslint-disable-next-line no-undef
  definePageMeta({
    middleware: ['order-page'],
  });

  const root = useNuxtApp();
  const { validator: validatorService } = root.$services;
  const { constants, enums } = root.$configs;

  const deliveryTypes = [enums.deliveryTypes.delivery, enums.deliveryTypes.pickup];

  const state = ref({
    username: '',
    phone: '',
    deliveryType: '',
    paymentMethod: '',
    rulesAgree: '',
  });

  const stateRules = computed(() => ({
    ...validatorService.generateRules([
      {
        fieldName: 'username',
        rules: {
          required: { name: 'Имя' },
          maxLength: { value: 50 },
        },
      },
      {
        fieldName: 'phone',
        rules: {
          required: { name: 'Телефон' },
          minLength: { value: 18 },
          maxLength: { value: 18 },
        },
      },
      {
        fieldName: 'deliveryType',
        rules: {
          required: { name: 'Способ доставки' },
        },
      },
      {
        fieldName: 'paymentMethod',
        rules: {
          required: { name: 'Способ оплаты' },
        },
      },
      {
        fieldName: 'rulesAgree',
        rules: {
          required: {},
        },
      },
    ]),
  }));

  const stateValidation = useVuelidate(stateRules.value, state.value);
  const { errors: stateErrors } = useValidationErrors(stateValidation);

  const addressState = ref({
    street: '',
    house: '',
    flat: '',
    entrance: '',
    floor: '',
    comment: '',
  });

  const addressRules = computed(() => ({
    ...validatorService.generateRules([
      {
        fieldName: 'street',
        rules: {
          required: { name: 'Улица' },
        },
      },
      {
        fieldName: 'house',
        rules: {
          required: {
            name: 'Номер дома',
          },
        },
      },
      {
        fieldName: 'flat',
        rules: {
          required: { name: 'Квартира' },
        },
      },
      {
        fieldName: 'entrance',
        rules: {
          required: { name: 'Подъезд' },
        },
      },
      {
        fieldName: 'floor',
        rules: {
          required: { name: 'Этаж' },
        },
      },
      {
        fieldName: 'comment',
        rules: {
          required: { name: 'Комментарий' },
        },
      },
    ]),
  }));

  const addressValidation = useVuelidate(addressRules.value, addressState.value);
  const { errors: addressErrors } = useValidationErrors(addressValidation);

  const pickupState = ref({
    restaurant: '',
  });

  const pickupRules = computed(() => ({
    ...validatorService.generateRules([
      {
        fieldName: 'restaurant',
        rules: {
          required: { name: 'Ресторан' },
        },
      },
    ]),
  }));

  const pickupValidation = useVuelidate(pickupRules.value, pickupState.value);
  const { errors: pickupErrors } = useValidationErrors(pickupValidation);

  const createOrder = async () => {
    const isValidationState = await stateValidation.value.$validate();
    let isValidationAddress = null;
    let isValidationPickup = null;

    if (state.value.deliveryType === enums.deliveryTypes.delivery.value) {
      isValidationAddress = await addressValidation.value.$validate();
    } else if (state.value.deliveryType === enums.deliveryTypes.pickup.value) {
      isValidationPickup = await pickupValidation.value.$validate();
    }

    if (isValidationState && (isValidationAddress || isValidationPickup)) {
      // eslint-disable-next-line no-alert
      alert('Ваш заказ успешно оформлен');
      navigateTo('/');
    }
  };
</script>

<style lang="scss" scoped>
  $white: $WHITE;
  $gray: $GRAY;

  .order {
    &-section {
      max-width: 80rem;
      margin: 0 auto;

      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      :deep(.section-header) {
        padding-left: 3.5rem;
      }
    }

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 2rem;
    }

    &-contacts {
      text-align: inherit;

      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      :deep(.form-fields) {
        display: flex;
        width: 100%;
        column-gap: 1.5rem;
      }
    }

    &-submit {
      text-align: inherit;

      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      :deep(.form-fields) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 0;
      }

      &__button {
        padding: 1.7rem 2rem;
        border: none;
        border-radius: 1rem;
        color: $white;
        cursor: pointer;
        font-family: 'Gilroy Bold';
        font-size: 1.4rem;
        text-transform: uppercase;

        &:not(&:disabled) {
          background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
        }

        @include hover {
          transition: all 0.3s ease;

          &:not(&:disabled):hover {
            box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
          }
        }

        &:not(&:disabled):focus {
          box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
        }

        &:disabled {
          background: $gray;
        }
      }
    }
  }

  .delivery-fields {
    margin-top: 2rem;
  }
</style>
