import { render, screen } from "@testing-library/react";

import Post from "../../src/components/Post/Post";

describe("Post", () => {
  test("displays the message as an article", () => {
    const testPost = { _id: "123", message: "test message" };
    render(<Post post={testPost} />);

    const article = screen.getByRole("article");
    expect(article.textContent).toBe("test message");
  });

  test("Theres a comment button to push on Post component", () => {
    const testPost = { _id: "123", message: "test message" };
    render(<Post post={testPost} />);
    expect(screen.getByTitle("comments-button")).toBeVisible();
  });
});
