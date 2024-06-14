import { useState, useEffect } from 'react';
import { faker } from 'https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm';
import { Category, DataItem } from './Components';
import fetchData from './Service';
import { toggleTheme } from './Utils';
import { categoryReturnedAsObject } from './Utils/Constants';
import './App.css';

const App = () => {
  // Set the appropriate theme on page load.
  useEffect(() => {
    toggleTheme(false);
  });

  const categories = [
    {
      label: 'Random',
      toolTip: 'Get random data',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 48 48"><path d="M24 3.9882812C22.514682 3.9882813 21.030361 4.3356862 19.671875 5.03125 A 1.50015 1.50015 0 0 0 19.667969 5.0332031L7.9824219 11.048828C6.1540644 11.99046 5 13.882081 5 15.939453L5 32.060547C5 34.117292 6.1527495 36.008284 7.9824219 36.949219L19.667969 42.966797 A 1.50015 1.50015 0 0 0 19.669922 42.96875C22.386894 44.359878 25.611153 44.359878 28.328125 42.96875 A 1.50015 1.50015 0 0 0 28.332031 42.966797L40.017578 36.949219C41.845936 36.007587 42.998047 34.117292 42.998047 32.060547L42.998047 15.939453C42.998047 13.883203 41.846485 11.991947 40.017578 11.050781L40.015625 11.050781L28.332031 5.0332031 A 1.50015 1.50015 0 0 0 28.330078 5.03125C26.971639 4.3356831 25.485318 3.9882812 24 3.9882812 z M 24 6.9882812C25.015682 6.9882812 26.032376 7.2266888 26.962891 7.703125L38.642578 13.716797 A 1.50015 1.50015 0 0 0 38.644531 13.71875C39.478859 14.147815 39.998047 15.000198 39.998047 15.939453L39.998047 32.060547C39.998047 32.999802 39.478221 33.852835 38.642578 34.283203L26.960938 40.296875C25.101208 41.249082 22.90122 41.249659 21.041016 40.298828L21.037109 40.296875L9.3554688 34.283203 A 1.50015 1.50015 0 0 0 9.3554688 34.28125C8.5210871 33.852185 8 32.999802 8 32.060547L8 15.939453C8 14.998825 8.5198262 14.147165 9.3554688 13.716797L21.039062 7.703125C21.969577 7.2266888 22.984318 6.9882813 24 6.9882812 z M 24 12 A 2.5 1.5 0 0 0 24 15 A 2.5 1.5 0 0 0 24 12 z M 11.470703 14.490234 A 1.50015 1.50015 0 0 0 10.808594 17.330078L19.640625 21.919922C20.548315 22.391321 21.515599 22.691433 22.5 22.849609L22.5 37.5 A 1.50015 1.50015 0 1 0 25.5 37.5L25.5 22.849609C26.483743 22.691334 27.450315 22.391018 28.357422 21.919922 A 1.50015 1.50015 0 0 0 28.359375 21.919922L37.191406 17.332031 A 1.5007827 1.5007827 0 1 0 35.808594 14.667969L26.974609 19.257812C26.061315 19.731775 25.065341 19.971467 24.068359 19.982422 A 1.50015 1.50015 0 0 0 23.976562 19.978516 A 1.50015 1.50015 0 0 0 23.925781 19.982422C22.929514 19.971292 21.935978 19.731731 21.023438 19.257812L12.191406 14.669922 A 1.50015 1.50015 0 0 0 11.470703 14.490234 z M 11.5 20 A 1.5 2.5 0 0 0 11.5 25 A 1.5 2.5 0 0 0 11.5 20 z M 35.5 21 A 1.5 2.5 0 0 0 35.5 26 A 1.5 2.5 0 0 0 35.5 21 z M 15.5 26 A 1.5 2.5 0 0 0 15.5 31 A 1.5 2.5 0 0 0 15.5 26 z M 30.5 30 A 1.5 2.5 0 0 0 30.5 35 A 1.5 2.5 0 0 0 30.5 30 z M 19.5 32 A 1.5 2.5 0 0 0 19.5 37 A 1.5 2.5 0 0 0 19.5 32 z"/></svg>,
      callbacks: [ faker.word.sample, faker.word.verb, faker.word.noun ]
    },
    { 
      label: 'Names',
      toolTip: 'Get names of people',
      icon: <svg aria-hidden='true'  className='w-5 h-5' viewBox="0 0 16 16"><path d="M8 1C6.097656 1 4.757813 1.464844 3.898438 2.429688C3.0625 3.367188 2.738281 4.710938 2.898438 6.636719C2.367188 6.867188 2 7.394531 2 8C2 8.796875 2.597656 10 3.5 10C3.578125 10 3.660156 9.992188 3.742188 9.984375C4.476563 12.261719 6.289063 14 8 14C9.6875 14 11.484375 12.296875 12.253906 9.984375C12.339844 9.992188 12.421875 10 12.5 10C13.402344 10 14 8.796875 14 8C14 7.398438 13.632813 6.871094 13.105469 6.640625C13.207031 5.527344 13.195313 3.457031 11.3125 2.515625L12.054688 1.015625L11.25 1.011719C11.25 1.011719 8.175781 1 8 1 Z M 8 2C8.117188 2 9.519531 2.003906 10.445313 2.007813L10.128906 2.648438C10.039063 2.863281 9.074219 5 5 5L5 6C8.847656 6 10.34375 4.257813 10.851563 3.410156C11.929688 3.941406 12.300781 5.027344 12.0625 6.953125L12 7.476563L12.53125 7.511719C12.796875 7.527344 13 7.738281 13 8C13 8.410156 12.660156 8.980469 12.5 9C12.421875 9 12.253906 8.980469 12.027344 8.921875L11.5625 8.808594L11.390625 9.371094C10.816406 11.542969 9.171875 13 8 13C6.824219 13 5.183594 11.542969 4.609375 9.375L4.441406 8.804688L3.976563 8.921875C3.746094 8.980469 3.582031 9 3.5 9C3.339844 8.980469 3 8.410156 3 8C3 7.738281 3.203125 7.527344 3.46875 7.511719L3.996094 7.476563L3.9375 6.953125C3.722656 5.101563 3.949219 3.875 4.648438 3.09375C5.304688 2.355469 6.398438 2 8 2 Z M 6.5 7C6.222656 7 6 7.222656 6 7.5C6 7.777344 6.222656 8 6.5 8C6.777344 8 7 7.777344 7 7.5C7 7.222656 6.777344 7 6.5 7 Z M 9.5 7C9.222656 7 9 7.222656 9 7.5C9 7.777344 9.222656 8 9.5 8C9.777344 8 10 7.777344 10 7.5C10 7.222656 9.777344 7 9.5 7Z"/></svg>,
      callbacks: [ faker.person.firstName, faker.person.lastName ]
    },
    {
      label: 'Places',
      toolTip: 'Get names of places',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 24 24"><path d="M12 1C8.686 1 6 3.686 6 7C6 11.286 12 18 12 18C12 18 18 11.286 18 7C18 3.686 15.314 1 12 1 z M 12 3C14.206 3 16 4.794 16 7C16 9.01 13.919047 12.360375 11.998047 14.859375C10.077047 12.364375 8 9.016 8 7C8 4.794 9.794 3 12 3 z M 12 5 A 2 2 0 0 0 10 7 A 2 2 0 0 0 12 9 A 2 2 0 0 0 14 7 A 2 2 0 0 0 12 5 z M 7.4804688 15.435547C4.2314687 16.095547 2 17.442 2 19C2 21.209 6.477 23 12 23C17.523 23 22 21.209 22 19C22 17.442 19.768531 16.096547 16.519531 15.435547C16.067531 16.096547 15.624797 16.702422 15.216797 17.232422C17.948797 17.646422 19.566219 18.512047 19.949219 18.998047C19.434219 19.652047 16.695953 20.998047 12.001953 20.998047L12 21.001953L11.998047 21C7.3040469 21 4.5667813 19.655 4.0507812 19C4.4337813 18.513 6.0502031 17.645422 8.7832031 17.232422C8.3752031 16.701422 7.9324688 16.095547 7.4804688 15.435547 z"/></svg>,
      callbacks: [ faker.location.country, faker.location.city, faker.location.state ]
    },
    {
      label: 'Animals',
      toolTip: 'Get names of animals',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 80 80"><path d="M17.210938 9.007813C16.335938 9.011719 15.476563 9.4375 14.960938 10.210938C11.339844 15.644531 10.210938 21.210938 11.53125 25.753906C12.660156 29.648438 15.203125 32.253906 17.402344 33.992188C16.582031 35.546875 16 37.460938 16 40C16 47.929688 11.199219 54.402344 11.199219 54.402344C11.070313 54.574219 11 54.785156 11 55L11 66C11 68.75 13.25 71 16 71L22 71C22.269531 71 22.527344 70.890625 22.71875 70.695313C22.90625 70.503906 23.007813 70.242188 23 69.96875C23.839844 70.605469 24.871094 71 26 71L32 71C32.300781 71 32.582031 70.867188 32.773438 70.632813C32.960938 70.402344 33.039063 70.097656 32.980469 69.804688C32.980469 69.804688 32.78125 68.773438 32.070313 67.75C31.5 66.933594 30.398438 66.222656 29 65.914063L29 59.546875C29.394531 59.328125 30.632813 58.65625 32.5625 57.296875C34.386719 56.007813 36.457031 54.359375 37.984375 52.5C39.898438 53.1875 42.183594 53.757813 45 53.890625L45 65.988281C45 68.746094 47.257813 70.996094 50.011719 70.988281L55 70.980469C55.003906 70.980469 55.007813 70.980469 55.011719 70.980469L55.011719 70.988281L60 70.980469C60.554688 70.976563 61 70.53125 61 69.980469C61 69.980469 61.011719 69.023438 60.515625 68.039063C60.132813 67.273438 59.203125 66.609375 58 66.285156L58.015625 47.558594C59.136719 46.09375 60 44.246094 60 42.011719L60 32.003906C60 31.171875 60.042969 30.304688 60.28125 29.808594C60.515625 29.3125 60.761719 29.003906 62.007813 29.003906C67.269531 29.003906 70.191406 26.785156 71.597656 24.53125C73.007813 22.277344 73 20 73 20C73 19.539063 72.6875 19.140625 72.238281 19.03125C72.238281 19.03125 70.652344 18.632813 68.863281 17.84375C67.078125 17.058594 65.191406 15.824219 64.566406 14.578125C63.3125 12.0625 61.738281 10.621094 60.21875 9.859375C58.695313 9.101563 57.261719 9.023438 56.34375 9.023438L53.679688 9.023438C50.507813 9.023438 48.371094 11.300781 47.484375 13.660156C47.074219 14.738281 43.859375 23.445313 42.753906 26.324219C42.320313 27.449219 41.425781 28.089844 40.300781 28.496094C39.175781 28.902344 37.863281 29.015625 36.953125 29.015625L25.367188 29.015625C24.988281 29.015625 24.402344 29.101563 23.785156 29.21875C22.554688 28.925781 20.992188 28.441406 19.652344 27.640625C18.273438 26.816406 17.175781 25.722656 16.742188 24.21875C15.84375 21.09375 16.675781 17.4375 19.484375 13.230469C19.484375 13.226563 19.484375 13.226563 19.484375 13.226563C20.308594 11.988281 19.96875 10.285156 18.730469 9.460938C18.265625 9.148438 17.734375 9 17.210938 9.007813 Z M 17.078125 11.003906C17.257813 10.96875 17.449219 11.007813 17.621094 11.121094C17.960938 11.351563 18.046875 11.777344 17.816406 12.121094C14.8125 16.625 13.714844 20.929688 14.820313 24.769531C15.429688 26.894531 16.96875 28.367188 18.625 29.359375C20.277344 30.347656 22.078125 30.894531 23.453125 31.210938C23.601563 31.246094 23.757813 31.246094 23.90625 31.210938C24.554688 31.058594 25.113281 31.015625 25.367188 31.015625L36.953125 31.015625C38.011719 31.015625 39.511719 30.90625 40.984375 30.375C41.324219 30.25 41.667969 30.097656 42.003906 29.914063C42 29.941406 42 29.972656 42 30C42 30.550781 42.449219 31 43 31C43.550781 31 44 30.550781 44 30C44 29.542969 43.6875 29.144531 43.246094 29.03125C43.816406 28.507813 44.308594 27.855469 44.621094 27.039063C45.746094 24.113281 48.972656 15.375 49.355469 14.363281C50.035156 12.558594 51.449219 11.027344 53.679688 11.027344L56.34375 11.027344C57.148438 11.027344 58.199219 11.089844 59.324219 11.652344C60.449219 12.210938 61.679688 13.273438 62.78125 15.46875C63.820313 17.554688 66.09375 18.808594 68.058594 19.675781C68.457031 19.851563 68.800781 19.992188 69.109375 20.109375C68.882813 20.703125 69.007813 21.402344 69.488281 21.882813L70.316406 22.703125C70.203125 22.949219 70.070313 23.203125 69.902344 23.472656C68.8125 25.21875 66.738281 27.003906 62.007813 27.003906C61.199219 27.003906 60.503906 27.191406 59.929688 27.492188C59.976563 27 60 26.503906 60 26C60 20.226563 56.839844 15.453125 56.839844 15.453125C56.65625 15.164063 56.339844 14.988281 56 14.988281C55.628906 14.984375 55.285156 15.1875 55.109375 15.515625C54.933594 15.84375 54.953125 16.238281 55.160156 16.546875C55.160156 16.546875 58 20.964844 58 26C58 27.722656 57.679688 29.308594 57.042969 30.359375C56.40625 31.410156 55.566406 32 54 32C52.738281 32 51.851563 31.339844 51.132813 30.078125C50.414063 28.8125 50 26.960938 50 25.011719C50 22.023438 51.246094 19.460938 51.246094 19.460938C51.492188 18.964844 51.289063 18.367188 50.792969 18.121094C50.296875 17.875 49.699219 18.078125 49.453125 18.574219C49.453125 18.574219 48 21.472656 48 25.011719C48 27.234375 48.433594 29.375 49.390625 31.0625C50.351563 32.75 51.964844 34 54 34C55.667969 34 57.035156 33.355469 58 32.359375L58 36C57.449219 36 57 36.449219 57 37C57 37.550781 57.449219 38 58 38L58 42.011719C58 44.59375 56.511719 46.5625 54.90625 47.953125C53.300781 49.347656 51.65625 50.070313 51.613281 50.089844C51.25 50.25 51.015625 50.609375 51.015625 51.003906L51 67C51 67.550781 51.449219 68 52 68C53.167969 68 53.476563 68.433594 53.734375 68.9375C53.742188 68.960938 53.734375 68.960938 53.746094 68.984375L50.003906 68.988281C48.335938 68.992188 47 67.660156 47 65.988281L47 53.011719C47 52.460938 46.550781 52.011719 46 52.011719C42.167969 52.011719 39.605469 51.074219 37.265625 50.082031C34.921875 49.09375 32.765625 48 30 48C29.621094 48 29.273438 48.214844 29.105469 48.550781C29.105469 48.550781 28.441406 49.902344 26.644531 51.816406C24.847656 53.730469 21.960938 56.144531 17.59375 58.085938C17.234375 58.246094 17 58.605469 17 59L17 66.648438C17 67.199219 17.449219 67.648438 18 67.648438C19.328125 67.648438 19.972656 68.238281 20.425781 68.894531C20.464844 68.949219 20.445313 68.945313 20.476563 69L16 69C14.332031 69 13 67.667969 13 66L13 55.25C13.371094 54.75 18 48.394531 18 40C18 37.371094 18.597656 35.566406 19.421875 34.285156C19.707031 33.84375 19.601563 33.257813 19.175781 32.941406C17.085938 31.398438 14.507813 28.84375 13.453125 25.199219C12.34375 21.371094 13.246094 16.386719 16.625 11.320313C16.738281 11.148438 16.902344 11.042969 17.078125 11.003906 Z M 62.003906 17C61.75 17 61.496094 17.097656 61.300781 17.292969C60.914063 17.679688 61.011719 18.988281 61.011719 18.988281C61.011719 18.988281 62.316406 19.085938 62.707031 18.699219C63.097656 18.308594 63.097656 17.683594 62.707031 17.292969C62.511719 17.097656 62.261719 17 62.003906 17 Z M 45 32C44.449219 32 44 32.449219 44 33C44 33.550781 44.449219 34 45 34C45.550781 34 46 33.550781 46 33C46 32.449219 45.550781 32 45 32 Z M 48 34C47.449219 34 47 34.449219 47 35C47 35.550781 47.449219 36 48 36C48.550781 36 49 35.550781 49 35C49 34.449219 48.550781 34 48 34 Z M 51 36C50.449219 36 50 36.449219 50 37C50 37.550781 50.449219 38 51 38C51.550781 38 52 37.550781 52 37C52 36.449219 51.550781 36 51 36 Z M 55 37C54.449219 37 54 37.449219 54 38C54 38.550781 54.449219 39 55 39C55.550781 39 56 38.550781 56 38C56 37.449219 55.550781 37 55 37 Z M 32 41C31.449219 41 31 41.449219 31 42C31 42.550781 31.449219 43 32 43C32.550781 43 33 42.550781 33 42C33 41.449219 32.550781 41 32 41 Z M 31 45C30.449219 45 30 45.449219 30 46C30 46.550781 30.449219 47 31 47C31.550781 47 32 46.550781 32 46C32 45.449219 31.550781 45 31 45 Z M 46 45C45.449219 45 45 45.449219 45 46C45 46.550781 45.449219 47 46 47C46.550781 47 47 46.550781 47 46C47 45.449219 46.550781 45 46 45 Z M 46 49C45.449219 49 45 49.449219 45 50C45 50.550781 45.449219 51 46 51C46.550781 51 47 50.550781 47 50C47 49.449219 46.550781 49 46 49 Z M 56.011719 49.628906L56 67C56 67.550781 56.449219 68 57 68C58.167969 68 58.476563 68.433594 58.734375 68.9375C58.742188 68.960938 58.734375 68.960938 58.746094 68.984375L55.855469 68.988281C55.785156 68.695313 55.6875 68.375 55.515625 68.039063C55.132813 67.273438 54.203125 66.609375 53 66.285156L53.015625 51.613281C53.621094 51.316406 54.703125 50.726563 56.011719 49.628906 Z M 30.421875 50.078125C32.3125 50.179688 33.988281 50.875 36.011719 51.730469C34.707031 53.160156 32.972656 54.558594 31.40625 55.660156C29.292969 57.152344 27.519531 58.125 27.519531 58.125C27.199219 58.296875 27 58.632813 27 59L27 66.648438C27 67.199219 27.449219 67.648438 28 67.648438C29.328125 67.648438 29.972656 68.238281 30.425781 68.894531C30.464844 68.949219 30.445313 68.945313 30.476563 69L26 69C24.332031 69 23 67.667969 23 66L23 57.355469C25.203125 55.9375 26.898438 54.46875 28.105469 53.183594C29.730469 51.449219 30.183594 50.511719 30.421875 50.078125 Z M 21 58.546875L21 66C21 66.277344 21.027344 66.546875 21.074219 66.8125C20.507813 66.417969 19.8125 66.09375 19 65.914063L19 59.574219C19.707031 59.242188 20.363281 58.894531 21 58.546875Z"/></svg>,
      callbacks: [ faker.animal.dog, faker.animal.cat, faker.animal.bird, faker.animal.cow, faker.animal.fish ]
    },
    {
      label: categoryReturnedAsObject,
      toolTip: 'Get names of airplanes',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 50 50"><path d="M46.40625 0.1875C46.085938 0.210938 45.757813 0.277344 45.4375 0.34375C44.15625 0.617188 42.78125 1.210938 41.4375 1.90625C38.765625 3.289063 36.34375 5.039063 35.3125 6.125L35.28125 6.125L28.53125 12.84375L4.53125 9.59375C4.214844 9.558594 3.902344 9.675781 3.6875 9.90625L0.28125 13.40625C0.0507813 13.644531 -0.0507813 13.984375 0.0195313 14.308594C0.0898438 14.636719 0.316406 14.90625 0.625 15.03125L19.125 22.28125L9.59375 32L5 32C4.757813 32 4.523438 32.089844 4.34375 32.25L0.34375 35.625C0.046875 35.867188 -0.0859375 36.253906 0 36.625C0.0859375 37 0.378906 37.289063 0.75 37.375L10.28125 39.71875L12.625 49.25C12.710938 49.585938 12.96875 49.851563 13.296875 49.953125C13.628906 50.054688 13.988281 49.976563 14.25 49.75L17.65625 46.75C17.875 46.5625 18 46.289063 18 46L18 40.40625L27.8125 30.875L34.96875 49.375C35.09375 49.683594 35.363281 49.910156 35.691406 49.980469C36.015625 50.050781 36.355469 49.949219 36.59375 49.71875L40.09375 46.3125C40.324219 46.097656 40.441406 45.785156 40.40625 45.46875L37.15625 21.46875L43.90625 14.71875C44.945313 13.679688 46.707031 11.203125 48.09375 8.53125C48.789063 7.195313 49.382813 5.835938 49.65625 4.5625C49.929688 3.289063 49.933594 1.945313 49.03125 1C49.019531 0.988281 49.011719 0.980469 49 0.96875C48.527344 0.515625 47.957031 0.296875 47.34375 0.21875C47.039063 0.179688 46.726563 0.164063 46.40625 0.1875 Z M 46.5 2.21875C47.070313 2.179688 47.402344 2.296875 47.5625 2.4375C47.753906 2.652344 47.894531 3.191406 47.6875 4.15625C47.476563 5.136719 46.957031 6.386719 46.3125 7.625C45.023438 10.105469 43.164063 12.617188 42.5 13.28125L35.40625 20.40625C35.183594 20.613281 35.070313 20.914063 35.09375 21.21875L38.34375 45.25L36.3125 47.21875L29.125 28.75C29.007813 28.4375 28.738281 28.203125 28.414063 28.125C28.085938 28.050781 27.742188 28.144531 27.5 28.375L16.3125 39.28125C16.113281 39.46875 16.003906 39.726563 16 40L16 45.5625L14.15625 47.15625L12.0625 38.65625C11.972656 38.304688 11.695313 38.027344 11.34375 37.9375L3.125 35.90625L5.375 34L10 34C10.273438 33.996094 10.53125 33.886719 10.71875 33.6875L21.625 22.59375C21.855469 22.351563 21.949219 22.007813 21.875 21.679688C21.796875 21.355469 21.5625 21.085938 21.25 20.96875L2.78125 13.71875L4.75 11.65625L28.78125 14.90625C29.085938 14.929688 29.386719 14.816406 29.59375 14.59375L36.71875 7.5C37.296875 6.886719 39.851563 4.976563 42.34375 3.6875C43.589844 3.042969 44.855469 2.523438 45.84375 2.3125C46.085938 2.261719 46.308594 2.230469 46.5 2.21875Z"/></svg>,
      callbacks: [ faker.airline.airplane ]
    },
    {
      label: 'Colors',
      toolTip: 'Get hex, hsl and names of colors',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 50 50"><path d="M25 2C12.309295 2 2 12.309295 2 25C2 37.690705 12.309295 48 25 48C37.690705 48 48 37.690705 48 25C48 12.309295 37.690705 2 25 2 z M 24 4.0253906L24 13.050781C21.44308 13.263407 19.111908 14.277207 17.259766 15.845703L10.886719 9.4726562C14.385739 6.2909729 18.950003 4.2614462 24 4.0253906 z M 26 4.046875C31.045917 4.2861008 35.615628 6.2922158 39.113281 9.4726562L32.740234 15.845703C30.88762 14.276806 28.55702 13.258062 26 13.044922L26 4.046875 z M 9.4726562 10.886719L15.845703 17.259766C14.277207 19.111908 13.263407 21.44308 13.050781 24L4.0253906 24C4.2614462 18.950003 6.2909729 14.385739 9.4726562 10.886719 z M 40.527344 10.886719C43.707784 14.384372 45.713899 18.954083 45.953125 24L36.955078 24C36.741938 21.44298 35.723194 19.11238 34.154297 17.259766L40.527344 10.886719 z M 25 15C30.534692 15 35 19.465308 35 25C35 30.534692 30.534692 35 25 35C19.465308 35 15 30.534692 15 25C15 19.465308 19.465308 15 25 15 z M 4.0253906 26L13.050781 26C13.263407 28.55692 14.277207 30.888092 15.845703 32.740234L9.4726562 39.113281C6.2909729 35.614261 4.2614462 31.049997 4.0253906 26 z M 36.949219 26L45.974609 26C45.738554 31.049997 43.709027 35.614261 40.527344 39.113281L34.154297 32.740234C35.722793 30.888092 36.736593 28.55692 36.949219 26 z M 17.259766 34.154297C19.111908 35.722793 21.44308 36.736593 24 36.949219L24 45.974609C18.950003 45.738554 14.385739 43.709027 10.886719 40.527344L17.259766 34.154297 z M 32.740234 34.154297L39.113281 40.527344C35.614261 43.709027 31.049997 45.738554 26 45.974609L26 36.949219C28.55692 36.736593 30.888092 35.722793 32.740234 34.154297 z"/></svg>,
      callbacks: [ faker.color.human ]
    },
    {
      label: 'Products',
      toolTip: 'Get names of products or items',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 32 32"><path d="M4 7C3.449219 7 3 7.449219 3 8C3 8.550781 3.449219 9 4 9L6.21875 9L8.84375 19.5C9.066406 20.390625 9.863281 21 10.78125 21L23.25 21C24.152344 21 24.917969 20.402344 25.15625 19.53125L27.75 10L25.65625 10L23.25 19L10.78125 19L8.15625 8.5C7.933594 7.609375 7.136719 7 6.21875 7 Z M 22 21C20.355469 21 19 22.355469 19 24C19 25.644531 20.355469 27 22 27C23.644531 27 25 25.644531 25 24C25 22.355469 23.644531 21 22 21 Z M 13 21C11.355469 21 10 22.355469 10 24C10 25.644531 11.355469 27 13 27C14.644531 27 16 25.644531 16 24C16 22.355469 14.644531 21 13 21 Z M 16 7L16 10L13 10L13 12L16 12L16 15L18 15L18 12L21 12L21 10L18 10L18 7 Z M 13 23C13.5625 23 14 23.4375 14 24C14 24.5625 13.5625 25 13 25C12.4375 25 12 24.5625 12 24C12 23.4375 12.4375 23 13 23 Z M 22 23C22.5625 23 23 23.4375 23 24C23 24.5625 22.5625 25 22 25C21.4375 25 21 24.5625 21 24C21 23.4375 21.4375 23 22 23Z"/></svg>,
      callbacks: [ faker.commerce.product, faker.commerce.productName ]
    },
    {
      label: 'Companies',
      toolTip: 'Get names of companies',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 50 50"><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"/></svg>,
      callbacks: [ faker.company.name ]
    },
    {
      label: 'CC',
      toolTip: 'Get credit card numbers',
      icon: <svg aria-hidden='true'  className='w-5 h-5' viewBox="0 0 50 50"><path d="M7 9C4.243 9 2 11.243 2 14L2 36C2 38.757 4.243 41 7 41L28.050781 41C28.023781 40.669 28 40.338 28 40C28 39.662 28.023781 39.331 28.050781 39L7 39C5.346 39 4 37.654 4 36L4 14C4 12.346 5.346 11 7 11L43 11C44.654 11 46 12.346 46 14L46 29.617188C46.718 30.033188 47.386 30.522266 48 31.072266L48 14C48 11.243 45.757 9 43 9L7 9 z M 10 16C8.9069372 16 8 16.906937 8 18L8 21C8 22.093063 8.9069372 23 10 23L14 23C15.093063 23 16 22.093063 16 21L16 18C16 16.906937 15.093063 16 14 16L10 16 z M 10 18L14 18L14 21L10 21L10 18 z M 28 18 A 1.0001 1.0001 0 1 0 28 20L41 20 A 1.0001 1.0001 0 1 0 41 18L28 18 z M 9 28 A 1.0001 1.0001 0 1 0 9 30L14 30 A 1.0001 1.0001 0 1 0 14 28L9 28 z M 18 28 A 1.0001 1.0001 0 1 0 18 30L23 30 A 1.0001 1.0001 0 1 0 23 28L18 28 z M 27 28 A 1.0001 1.0001 0 1 0 27 30L32 30 A 1.0001 1.0001 0 1 0 32 28L27 28 z M 40 30C34.5 30 30 34.5 30 40C30 45.5 34.5 50 40 50C45.5 50 50 45.5 50 40C50 34.5 45.5 30 40 30 z M 40 32C44.4 32 48 35.6 48 40C48 44.4 44.4 48 40 48C35.6 48 32 44.4 32 40C32 35.6 35.6 32 40 32 z M 9 33 A 1.0001 1.0001 0 1 0 9 35L22 35 A 1.0001 1.0001 0 1 0 22 33L9 33 z M 40.800781 36L37 37.199219L37 38.599609L39 38.099609L39 44L41 44L41 36L40.800781 36 z"/></svg>,
      callbacks: [ faker.finance.creditCardNumber ]
    },
    {
      label: 'Songs',
      toolTip: 'Get names of songs',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 50 50"><path d="M27,8c2.732,0,3.63,0.537,4.767,1.217c1.451,0.868,3.096,1.852,7.233,1.858V16c-3.281,0-4.348-0.669-5.478-1.378 C32.309,13.862,30.934,13,28,13c-0.327,0-0.669,0.04-1,0.146V8 M25,33.61V36c0,3.8-0.829,6-5.064,6C14,42,14,39.688,14,38 c0-1.337,0-3,6-3C22.364,35,23.947,34.434,25,33.61 M27,6c-1.6,0-2,1-2,2v21c0,2.214-1.033,4-5,4c-5.661,0-8,1.464-8,5 c0,2.383,0.489,6,7.936,6C26.855,44,27,38.682,27,36c0-1.027,0-3.903,0-7V17c0.005-1.355,0.2-2,1-2c5.138,0,3.871,3,11,3 c0,0,2,0,2-1.699c0-2.555,0-4.363,0-5.333c0-1.533-0.688-1.893-1.962-1.893C31.925,9.076,33.674,6,27,6L27,6z"/></svg>,
      callbacks: [ faker.music.songName ]
    },
    {
      label: 'Cars',
      toolTip: 'Get names of vehicles',
      icon: <svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 50 50"><path d="M25 8C21.453125 8 19.128906 8.238281 17.65625 8.5C16.269531 8.746094 15.667969 9.03125 15.59375 9.0625C15.589844 9.066406 15.46875 9.09375 15.46875 9.09375C13.988281 9.59375 11.734375 10.28125 10.6875 12.3125C10.433594 12.804688 10.054688 13.804688 9.5 15.21875C9.074219 16.304688 8.574219 17.675781 8.0625 19L5.09375 19C3.609375 19 2.507813 19.496094 1.84375 20.25C1.179688 21.003906 1 21.898438 1 22.59375C1 23.371094 1.40625 24.148438 2.03125 24.53125C2.65625 24.914063 3.355469 25 4.09375 25L5.75 25C5.59375 25.417969 5.0625 26.8125 5.0625 26.8125L5 27L5 39C5 40.644531 6.355469 42 8 42L12 42C13.644531 42 15 40.644531 15 39L15 38L35 38L35 39C35 40.644531 36.355469 42 38 42L42 42C43.644531 42 45 40.644531 45 39L45 27L44.9375 26.8125C44.9375 26.8125 44.414063 25.421875 44.25 25L45.90625 25C46.644531 25 47.34375 24.914063 47.96875 24.53125C48.59375 24.148438 49 23.371094 49 22.59375C49 21.898438 48.820313 21.003906 48.15625 20.25C47.492188 19.496094 46.390625 19 44.90625 19L41.9375 19C41.875 18.851563 41.8125 18.707031 41.78125 18.625C40.699219 15.828125 39.65625 13.164063 39.28125 12.3125C38.324219 10.136719 35.863281 9.46875 34.53125 9.09375C34.488281 9.082031 34.414063 9.042969 34.375 9.03125L34.375 9.0625C34.28125 9.023438 33.710938 8.746094 32.34375 8.5C30.871094 8.238281 28.546875 8 25 8 Z M 25 10C28.453125 10 30.671875 10.261719 32 10.5C33.328125 10.738281 33.65625 10.90625 33.65625 10.90625L33.75 10.9375L33.8125 10.96875C35.03125 11.316406 36.996094 12.117188 37.4375 13.125C37.726563 13.78125 38.863281 16.707031 39.90625 19.375C40.15625 20.011719 40.574219 21.050781 40.4375 21.6875C40.367188 22.007813 40.246094 22.238281 39.78125 22.5C39.316406 22.761719 38.441406 23 37 23L13 23C11.558594 23 10.683594 22.761719 10.21875 22.5C9.753906 22.238281 9.632813 22.007813 9.5625 21.6875C9.425781 21.050781 9.84375 20.011719 10.09375 19.375L10.03125 19.34375C10.488281 18.152344 10.957031 16.917969 11.34375 15.9375C11.894531 14.535156 12.386719 13.410156 12.46875 13.25C13.023438 12.171875 14.753906 11.4375 16.21875 10.9375L16.28125 10.9375L16.34375 10.90625C16.34375 10.90625 16.671875 10.738281 18 10.5C19.328125 10.261719 21.546875 10 25 10 Z M 5.09375 21L7.25 21C6.871094 21.996094 6.804688 22.191406 6.5 23L4.09375 23C3.535156 23 3.1875 22.902344 3.09375 22.84375C3 22.785156 3 22.875 3 22.59375C3 22.230469 3.101563 21.835938 3.34375 21.5625C3.585938 21.289063 4.007813 21 5.09375 21 Z M 42.6875 21L44.90625 21C45.992188 21 46.414063 21.289063 46.65625 21.5625C46.898438 21.835938 47 22.230469 47 22.59375C47 22.875 47 22.785156 46.90625 22.84375C46.8125 22.902344 46.464844 23 45.90625 23L43.46875 23C43.148438 22.179688 43.078125 22.011719 42.6875 21 Z M 8.4375 23.59375C8.667969 23.835938 8.933594 24.070313 9.25 24.25C10.152344 24.757813 11.347656 25 13 25L37 25C38.652344 25 39.847656 24.757813 40.75 24.25C41.066406 24.070313 41.332031 23.835938 41.5625 23.59375C42.148438 25.132813 42.964844 27.289063 43 27.375L43 35.15625C43 35.625 42.609375 36 42.09375 36L7.90625 36C7.390625 36 7 35.625 7 35.15625L7 27.375C7.03125 27.289063 7.867188 25.117188 8.4375 23.59375 Z M 11 26C9.355469 26 8 27.355469 8 29C8 29.886719 8.367188 30.675781 8.875 31.21875C9.382813 31.761719 9.996094 32.128906 10.59375 32.46875C11.441406 32.949219 12.019531 33.316406 12.6875 33.59375C13.355469 33.871094 14.074219 34 15 34C17.195313 34 19 32.199219 19 30C19 27.800781 17.195313 26 15 26 Z M 35 26C32.804688 26 31 27.800781 31 30C31 32.199219 32.804688 34 35 34C35.925781 34 36.644531 33.871094 37.3125 33.59375C37.980469 33.316406 38.558594 32.949219 39.40625 32.46875C40.003906 32.128906 40.617188 31.761719 41.125 31.21875C41.632813 30.675781 42 29.886719 42 29C42 27.355469 40.644531 26 39 26 Z M 11 28L15 28C16.117188 28 17 28.882813 17 30C17 31.117188 16.117188 32 15 32C14.25 32 13.878906 31.933594 13.4375 31.75C12.996094 31.566406 12.445313 31.21875 11.5625 30.71875C11 30.402344 10.585938 30.101563 10.34375 29.84375C10.101563 29.585938 10 29.417969 10 29C10 28.4375 10.4375 28 11 28 Z M 35 28L39 28C39.5625 28 40 28.4375 40 29C40 29.417969 39.898438 29.585938 39.65625 29.84375C39.414063 30.101563 39 30.402344 38.4375 30.71875C37.554688 31.21875 37.003906 31.566406 36.5625 31.75C36.121094 31.933594 35.75 32 35 32C33.882813 32 33 31.117188 33 30C33 28.882813 33.882813 28 35 28 Z M 7 37.84375C7.289063 37.9375 7.589844 38 7.90625 38L13 38L13 39C13 39.5625 12.5625 40 12 40L8 40C7.4375 40 7 39.5625 7 39 Z M 43 37.84375L43 39C43 39.5625 42.5625 40 42 40L38 40C37.4375 40 37 39.5625 37 39L37 38L42.09375 38C42.410156 38 42.710938 37.9375 43 37.84375Z"/></svg>,
      callbacks: [ faker.vehicle.manufacturer, faker.vehicle.vehicle ]
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <header className='flex justify-between items-center h-20 px-5 sm:px-12'>
        <h1 className='text-3xl font-bold'>faker</h1>
        <button aria-description='Toggle theme between a light and a dark theme' title='Toggle theme' className='theme-toggle w-10 h-10 relative' onClick={toggleTheme}>
          <svg aria-hidden='true' className={`theme-toggle-icon theme-toggle-icon--light w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${matchMedia('(prefers-color-scheme: light)').matches ? 'hide' : ''}`} viewBox='0 0 24 24'>
            <path d='M11.875 0.1875C11.371094 0.25 10.996094 0.679688 11 1.1875L11 3.1875C10.996094 3.546875 11.183594 3.882813 11.496094 4.066406C11.808594 4.246094 12.191406 4.246094 12.503906 4.066406C12.816406 3.882813 13.003906 3.546875 13 3.1875L13 1.1875C13.003906 0.898438 12.878906 0.625 12.664063 0.433594C12.449219 0.242188 12.160156 0.152344 11.875 0.1875 Z M 4 3.375C3.625 3.441406 3.324219 3.714844 3.21875 4.078125C3.113281 4.445313 3.222656 4.835938 3.5 5.09375L4.90625 6.5C5.148438 6.796875 5.535156 6.933594 5.910156 6.847656C6.28125 6.761719 6.574219 6.46875 6.660156 6.097656C6.746094 5.722656 6.609375 5.335938 6.3125 5.09375L4.90625 3.6875C4.71875 3.488281 4.460938 3.378906 4.1875 3.375C4.15625 3.375 4.125 3.375 4.09375 3.375C4.0625 3.375 4.03125 3.375 4 3.375 Z M 19.6875 3.375C19.460938 3.40625 19.25 3.519531 19.09375 3.6875L17.6875 5.09375C17.390625 5.335938 17.253906 5.722656 17.339844 6.097656C17.425781 6.46875 17.71875 6.761719 18.089844 6.847656C18.464844 6.933594 18.851563 6.796875 19.09375 6.5L20.5 5.09375C20.796875 4.808594 20.886719 4.367188 20.726563 3.988281C20.570313 3.609375 20.191406 3.367188 19.78125 3.375C19.75 3.375 19.71875 3.375 19.6875 3.375 Z M 12 5.1875C8.15625 5.1875 5 8.34375 5 12.1875C5 16.03125 8.15625 19.1875 12 19.1875C15.84375 19.1875 19 16.03125 19 12.1875C19 8.34375 15.84375 5.1875 12 5.1875 Z M 12 7.1875C14.753906 7.1875 17 9.433594 17 12.1875C17 14.941406 14.753906 17.1875 12 17.1875C9.246094 17.1875 7 14.941406 7 12.1875C7 9.433594 9.246094 7.1875 12 7.1875 Z M 0.8125 11.1875C0.261719 11.238281 -0.144531 11.730469 -0.09375 12.28125C-0.0429688 12.832031 0.449219 13.238281 1 13.1875L3 13.1875C3.359375 13.191406 3.695313 13.003906 3.878906 12.691406C4.058594 12.378906 4.058594 11.996094 3.878906 11.683594C3.695313 11.371094 3.359375 11.183594 3 11.1875L1 11.1875C0.96875 11.1875 0.9375 11.1875 0.90625 11.1875C0.875 11.1875 0.84375 11.1875 0.8125 11.1875 Z M 20.8125 11.1875C20.261719 11.238281 19.855469 11.730469 19.90625 12.28125C19.957031 12.832031 20.449219 13.238281 21 13.1875L23 13.1875C23.359375 13.191406 23.695313 13.003906 23.878906 12.691406C24.058594 12.378906 24.058594 11.996094 23.878906 11.683594C23.695313 11.371094 23.359375 11.183594 23 11.1875L21 11.1875C20.96875 11.1875 20.9375 11.1875 20.90625 11.1875C20.875 11.1875 20.84375 11.1875 20.8125 11.1875 Z M 5.46875 17.59375C5.25 17.632813 5.054688 17.742188 4.90625 17.90625L3.5 19.28125C3.101563 19.667969 3.097656 20.304688 3.484375 20.703125C3.871094 21.101563 4.507813 21.105469 4.90625 20.71875L6.3125 19.3125C6.636719 19.011719 6.722656 18.535156 6.527344 18.140625C6.335938 17.742188 5.902344 17.523438 5.46875 17.59375 Z M 18.1875 17.59375C17.8125 17.660156 17.511719 17.933594 17.40625 18.296875C17.300781 18.664063 17.410156 19.054688 17.6875 19.3125L19.09375 20.71875C19.492188 21.105469 20.128906 21.101563 20.515625 20.703125C20.902344 20.304688 20.898438 19.667969 20.5 19.28125L19.09375 17.90625C18.886719 17.683594 18.585938 17.570313 18.28125 17.59375C18.25 17.59375 18.21875 17.59375 18.1875 17.59375 Z M 11.875 20.1875C11.371094 20.25 10.996094 20.679688 11 21.1875L11 23.1875C10.996094 23.546875 11.183594 23.882813 11.496094 24.066406C11.808594 24.246094 12.191406 24.246094 12.503906 24.066406C12.816406 23.882813 13.003906 23.546875 13 23.1875L13 21.1875C13.003906 20.898438 12.878906 20.625 12.664063 20.433594C12.449219 20.242188 12.160156 20.152344 11.875 20.1875Z' />
          </svg>
          <svg aria-hidden='true' className={`theme-toggle-icon theme-toggle-icon--dark w-10 h-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 ${matchMedia('(prefers-color-scheme: dark)').matches ? 'hide' : ''}`} viewBox='0 0 50 50'>
            <path d='M31 3C18.875 3 9 12.875 9 25C9 37.125 18.875 47 31 47C34.128906 47 37.109375 46.335938 39.800781 45.15625C40.53125 44.839844 41 44.121094 41 43.324219C41 42.53125 40.53125 41.808594 39.800781 41.492188C33.449219 38.714844 29 32.394531 29 25C29 17.605469 33.449219 11.285156 39.800781 8.507813C40.53125 8.191406 41 7.46875 41 6.675781C41 5.878906 40.53125 5.160156 39.800781 4.84375C37.109375 3.664063 34.128906 3 31 3 Z M 31 7C32.09375 7 33.148438 7.148438 34.1875 7.335938C28.679688 11.335938 25 17.6875 25 25C25 32.3125 28.679688 38.664063 34.1875 42.664063C33.148438 42.851563 32.09375 43 31 43C21.035156 43 13 34.964844 13 25C13 15.035156 21.035156 7 31 7Z' />
          </svg>
        </button>
      </header>
      <section className='flex flex-col my-10 mx-3 gap-10 items-start sm:flex-row sm:mx-12'>
        <aside aria-label='Sidebar full of categories' className='aside flex flex-col gap-5 items-center relative w-full px-2 py-5 rounded-lg sm:w-48'>
          <h2>Categories</h2>
          <section className='categories flex gap-4 items-center w-full py-2 overflow-x-scroll sm:flex-col sm:overflow-hidden'>
            {
              categories.map((category) => <Category key={category.label} icon={category.icon} label={category.label} toolTip={category.toolTip} trigger={handleCategoryClick}/>)
            }
          </section>
        </aside>
        <main className='flex flex-col gap-4 items-start w-full px-4 py-4 rounded-lg'>
          <h2 className='self-center'>
            {
              selectedCategory
              ? `Category selected is ${selectedCategory.toLowerCase()}.`
              : 'Waiting for a category to be selected'
            }
          </h2>
          <section className='flex flex-wrap gap-3 items-start'>
            {
              selectedCategory
              ? [...fetchData({...categories.find(category => category.label === selectedCategory)})]
              .map((item) => <DataItem key={item} value={item} />)
              : null
            }
          </section>
          <section className='notification-popup hide fixed top-24 right-3 -translate-y-2 px-2 py-2 rounded sm:right-12'>
            <p className='mr-6'>Successfully copied to clipboard!</p>
            <button aria-label='Close notification popup' aria-description='Close notification popup that showed after successfully completing copy operation' className='absolute top-1/2 -translate-y-1/2 right-1' onClick={() => {
              document.querySelector('.notification-popup').classList.add('hide');
            }}><svg aria-hidden='true' className='w-5 h-5' viewBox="0 0 30 30"><path d="M7.9785156 5.9804688 A 2.0002 2.0002 0 0 0 6.5859375 9.4140625L12.171875 15L6.5859375 20.585938 A 2.0002 2.0002 0 1 0 9.4140625 23.414062L15 17.828125L20.585938 23.414062 A 2.0002 2.0002 0 1 0 23.414062 20.585938L17.828125 15L23.414062 9.4140625 A 2.0002 2.0002 0 0 0 21.960938 5.9804688 A 2.0002 2.0002 0 0 0 20.585938 6.5859375L15 12.171875L9.4140625 6.5859375 A 2.0002 2.0002 0 0 0 7.9785156 5.9804688 z"/></svg></button>
          </section>
        </main>
      </section>
      <footer className='flex justify-center gap-7 items-center h-20 mt-auto'>
        <span>faker</span>
        <a aria-description='Clicking this link will open a new tab to check out the source code used in developing faker' title='Check repository on GitHub (Opens in a different tab) - from title' href="https://github.com/martyofmca/faker" target='_blank'>
          <svg aria-hidden='true' className='w-10 h-10' viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </a>
      </footer>
    </>
  );
}

export default App
