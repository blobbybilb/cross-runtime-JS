type runtimes = "bun" | "deno" | "deno-unstable" | "node";

export async function getRuntimeName(): Promise<runtimes> {
  // @ts-ignore: not defined in all runtimes
  if (typeof Bun !== "undefined") {
    return "bun";
  }
  // @ts-ignore: not defined in all runtimes
  if (typeof Deno !== "undefined") {
    // @ts-ignore: not defined in all runtimes
    if (typeof Deno.dlopen === "undefined") {
      return "deno-unstable";
    }
    return "deno";
  } else {
    return "node";
  }
}
