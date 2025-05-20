<template>
 <div class="my-4 text-sm text-primary-900">
        <h2 class="font-medium text-primary-900 text-base my-6">{{ $t('personalData') }}</h2>
        <div class="grid grid-cols-5 gap-6">
          <div class="col-span-3">
            <label class="font-medium">{{ $t('fullName') }}</label>
            <p>Jorge Manuel da Guedes Campos</p>
          </div>
          <div class="col-span-2">
            <label class="font-medium">{{ $t('birthDate') }}</label>
            <p>16-08-1967</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('citizenCard') }}</label>
            <p>12345678</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('taxNumber') }}</label>
            <p>987654321</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('healthNumber') }}</label>
            <p>987654321</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('gender') }}</label>
            <p>{{ $t('male') }}</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('process') }}</label>
            <p>-</p>
          </div>
          <div class="col-span-3">
            <label class="font-medium">{{ $t('email') }}</label>
            <p>email@example.com</p>
          </div>
          <div class="col-span-2">
            <label class="font-medium">{{ $t('phone') }}</label>
            <p>912 345 678</p>
          </div>
          <div class="col-span-2">
            <label class="font-medium">{{ $t('address') }}</label>
            <p>Rua do Centro</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('postalCode') }}</label>
            <p>1000-000</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('locality') }}</label>
            <p>Lisboa</p>
          </div>
        </div>
      </div>

      <div class="my-4 text-sm">
        <h2 class="font-medium text-primary-900 text-base my-4">{{ $t('emergencyContacts') }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <label class="font-medium">{{ $t('fullName') }}</label>
            <p>Maria Jorge Braga Rebelo Ticas</p>
          </div>
          <div class="col-span-1">
            <label class="font-medium">{{ $t('phone') }}</label>
            <p>912 345 678</p>
          </div>
        </div>
      </div>

      <div class="my-4 text-sm">
        <h2 class="font-medium text-primary-900 text-base">{{ $t('summary') }}</h2>
        <p>{{ $t('appointmentCreatedOn') }}: 16/03/2025</p>
      </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  