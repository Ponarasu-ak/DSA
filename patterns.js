" * * * * * ";
" * * * * * ";
" * * * * * ";
" * * * * * ";
" * * * * * ";

let n = 5;

for (let i = 0; i < n; i++) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star = star + " " + "*";
  }
  console.log(star);
}

console.log("/--------------------/");

(" * ");
(" * * ");
(" * * * ");
(" * * * * ");
(" * * * * * ");

for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star = star + " " + "*";
  }
  console.log(star);
}

console.log("/--------------------/");

(" 1 ");
(" 1 2 ");
(" 1 2 3 ");
(" 1 2 3 4 ");
(" 1 2 3 4 5 ");

for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star = star + " " + (j + 1);
  }
  console.log(star);
}

console.log("/--------------------/");

(" 1 ");
(" 2 2 ");
(" 3 3 3 ");
(" 4 4 4 4 ");
(" 5 5 5 5 5 ");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " " + (i + 1);
  }
  console.log(row);
}

console.log("/--------------------/");

(" 1 2 3 4 5 ");
(" 1 2 3 4 ");
(" 1 2 3 ");
(" 1 2 ");
(" 1 ");

for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + " " + (j + 1);
  }
  console.log(row);
}

console.log("/--------------------/");

(" * * * * * ");
(" * * * * ");
(" * * * ");
(" * * ");
(" * ");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + " " + "*";
  }
  console.log(row);
}

console.log("/--------------------/");

("         * ");
("       * * ");
("     * * * ");
("   * * * * ");
(" * * * * * ");

for (let i = 0; i < n; i++) {
  let row = "";

  for (let u = 0; u < n - (i + 1); u++) {
    row = row + " " + " ";
  }

  for (let s = 0; s < i + 1; s++) {
    row = row + " " + "*";
  }

  console.log(row);
}

console.log("/--------------------/");

(" 1 ");
(" 1 0 ");
(" 1 0 1 ");
(" 1 0 1 0");
(" 1 0 1 0 1");

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    if (j % 2 == 0) {
      row = row + 1;
    } else row = row + 0;
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }

  console.log(row);
}

console.log("/--------------------/");

(" 1 ");
(" 0 1 ");
(" 0 1 0 ");
(" 1 0 1 0 ");
(" 1 0 1 0 1 ");

let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }

  console.log(row);
}

console.log("/--------------------/");
