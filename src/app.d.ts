// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
	  interface Locals {}
	  interface PageData {}
	  interface Error {}
	  interface Platform {}
	}
	interface ImportMetaEnv {
	  GMAIL_USER: string;
	  GMAIL_APP_PASSWORD: string;
	}
  }
  
  export {};