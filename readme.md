# OpenAI-Threads

OpenAI-Threads is a Node.js module designed to interact with OpenAI's Thread API. It provides a simple and intuitive interface for creating and managing conversation threads with OpenAI's AI assistants. This module allows you to create threads, send messages, run threads, handle tool functions, and monitor the status of thread runs.

## Features

- Easy to create and manage conversation threads.
- Send user messages to the thread.
- Run threads with instructions.
- Poll thread runs for status updates.
- Register and handle custom events.
- Register and execute custom functions during a thread run.

## Installation

```bash
npm install openai-threads
```

or using `yarn`:

```bash
yarn add openai-threads
```

## Usage

First, import the `OpenAIThread` class from the `openai-threads` package and instantiate it with the ID of your assistant.

```js
import { OpenAIThread } from "openai-threads";

const thread = new OpenAIThread("your-assistant-id");
```

### Register Functions

Register functions that can be called during the thread run.
These must be the same function name as the function's added to the Assistant on the website or through other code. 

```js
thread.registerFunction("functionName", async ({ argument }) => {
  // Your function implementation
  return { success: true, data: "result" };
});
```

### Register Events

Register event handlers to listen for thread updates.

```js
thread.registerEvent("event-name", (run) => {
  // Your event handling logic
});

const events = [
    'requires_action',
    'queued',
    'in_progress',
    'completed',
    'expired',
    'cancelling',
    'cancelled',
    'failed'
];
```

### Create a Thread

Create a new conversation thread.

```js
await thread.createThread();
```

### Send a User Message

Send a message from the user to the thread.

```js
await thread.createUserMessage("Your message to the AI.");
```

### Run the Thread

Run the thread with specific instructions.

```js
await thread.runThread("Your instructions for the AI.");
```

## Documentation

For more detailed information about the methods and their parameters, please refer to the [OpenAI API documentation](https://beta.openai.com/docs/).

## Examples

You can find an example script on how to use OpenAI-Threads in the `examples` directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Support

If you need help or have any questions, please open an issue in the GitHub repository.
```

Remember to replace `"your-assistant-id"` with the actual assistant ID provided by OpenAI and adjust the examples as needed for your actual use case. You should also provide a `LICENSE.md` file if you reference it in the README.

Additionally, make sure you have the necessary permissions and rights to use OpenAI's API, follow their guidelines, and handle user data responsibly as per their policies and any relevant laws.
