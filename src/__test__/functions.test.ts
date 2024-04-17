import { addTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/todo";



describe("test todo", () => {
    test("should add a todo", () => {


        const todoText = "Spela wow"
        // const lengthText = todoText.length
        const todos: Todo[] = [];
        addTodo(todoText, todos)

        expect(todos[0].text.length).toBeGreaterThanOrEqual(3)
        // expect(lengthFromBeginning).toBeGreaterThan(0)

    });
    test("check done", () => {


        const todoText = { test: "Spela wow", done: false }

        expect(todoText.done).toBeFalsy()


        // expect(lengthFromBeginning).toBeGreaterThan(0)

    });
    test("remove all todo", () => {
        const todoText = { text: "Spela wow", done: false }
        const todos: Todo[] = [todoText];
        removeAllTodos(todos)

        expect(todos.length).toBe(0)       // expect(lengthFromBeginning).toBeGreaterThan(0)

    });
});







// changeTodo

// removeAllTodos