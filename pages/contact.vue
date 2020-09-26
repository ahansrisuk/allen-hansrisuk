<template>
  <div>
    <p class="mb-4 text-2xl">Get in touch!📫</p>

    <p class="mb-8">
      For all general inquiries, proposals, questions, etc., please use the
      contact form below and I will get in touch as soon as possible. Thank you!
    </p>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />

      <div class="mb-4">
        <label for="name" class="block mb-1">Name:</label>
        <input
          type="text"
          class="bg-black rounded-md border-2 border-white p-1 w-full text-white"
          name="name"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block">Email:</label>
        <input
          type="text"
          class="bg-black rounded-md border-2 border-white p-1 w-full text-white"
          name="email"
        />
      </div>

      <div class="mb-4">
        <label for="message" class="block">Message:</label>
        <textarea
          name="message"
          class="bg-black rounded-md border-2 border-white text-black p-1 w-full text-white"
          rows="8"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="float-right rounded-lg p-2 bg-white text-black font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head() {
    return {
      title: 'Contact | Allen Hansrisuk',
    };
  },
};
</script>
