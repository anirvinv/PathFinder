export function dfs(list, boxes) {
	var visited = Array(171).fill(0);
	var stack = [boxes[1]];
	var found = false;
	var count = 0;
	while (!found && stack.length != 0) {
		var top = stack.pop();
		var u = top.dataset.val;
		// console.log(u);
		if (u != 1 && u != 170) {
			top.style.backgroundColor = "gray";
		}
		if (u == 170) {
			found = true;
		}

		if (!found && visited[u] != 1) {
			visited[u] = 1;
			for (var j = 0; j < list[u].length; j++) {
				if (visited[list[u][j]] == 0) {
					visited[boxes[list[u][j]]] = 1;
					stack.push(boxes[list[u][j]]);
				}
			}
		}
	}
}
