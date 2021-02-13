<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-full px-4 mx-auto sm:px-12 lg:px-24">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link
                  to="/home"
                  class="px-3 py-2 text-sm font-medium text-white rounded-md"
                >
                  <a href="">
                    Home
                  </a>
                </router-link>
                <router-link to="/about">
                  <a
                    href=""
                    class="px-3 py-2 text-sm font-medium text-white rounded-md 0"
                  >
                    About
                  </a>
                </router-link>
                <router-link to="/demo">
                  <a
                    href=""
                    class="px-3 py-2 text-sm font-medium text-white rounded-md"
                  >
                    Demo
                  </a>
                </router-link>
                <router-link to="/contact">
                  <a
                    href=""
                    class="px-3 py-2 text-sm font-medium text-white rounded-md"
                  >
                    Contact
                  </a>
                </router-link>
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Options
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
                  Dropdown panel, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->

                  <div
                    class="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div class="py-1" @click="toggleMenu">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Edit</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Duplicate</a
                      >
                    </div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Archive</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Move</a
                      >
                    </div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Share</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Add to favorites</a
                      >
                    </div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Delete</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center ml-4 md:ml-6">
              <button
                class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button
                    class="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                <!-- <div
                  class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Your Profile</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Settings</a
                  >

                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Sign out</a
                  >
                </div> -->
              </div>
            </div>
          </div>
          <div class="flex -mr-2 md:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Heroicon name: outline/menu
            -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
              Heroicon name: outline/x
            -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile First View -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            >Home</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >About</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Demo</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Contact</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="px-2 mt-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
              >Your Profile</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
              >Settings</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
