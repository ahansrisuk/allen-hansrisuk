<template>
    <div class="tab-content">
        <p class="mb-8">For all general inquiries, proposals, questions, etc., please use the form below.</p>
        <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact-form" />

            <div class="mb-2">
                <label for="name" class="block">Name:</label>
                <input type="text" class="bg-gray-400 rounded-md text-black p-1 w-full" name="name" />
            </div>

            <div class="mb-2">
                <label for="email" class="block">Email:</label>
                <input type="text" class="bg-gray-400 rounded-md text-black p-1 w-full" name="email" />
            </div>

            <div class="mb-4">
                <label for="message" class="block">Message:</label>
                <textarea name="message" class="bg-gray-400 rounded-md text-black p-1 w-full" rows="8" />
            </div>

            <div class="flex justify-end">
                <button 
                    type="submit" class="float-right rounded-lg p-2 bg-white text-black font-bold"
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
}
</script>

<style>
.tab-content {
    border-top-left-radius: 0;
}

</style>