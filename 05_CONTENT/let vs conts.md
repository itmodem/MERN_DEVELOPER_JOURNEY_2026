# 🎬 **YouTube Script — “var / let / const – Full Explanation”**

## **INTRO**

Hey everyone!
Welcome back to the channel.
Aaj hum JavaScript ke ek **super important topic** ko simplify karne wale hain:
**var, let, const – kya difference hai aur real projects me kaise use karte hain.**

Is video ke end tak aapki clarity 100% ho jayegi.

Chaliye start karte hain 🚀

---

## **PART 1 — What is var?**

**var** is the oldest way to declare variables in JavaScript.

### **Syntax:**

```js
var name = "It Modem";
```

### **Important points:**

1️⃣ **Function-scoped**
If you declare `var` inside a function, it works only inside that function.

2️⃣ **Hoisting**
JS moves `var` to the top of scope.
(Hindi: matlab variable declare se pehle access ho sakta hai, value undefined milegi.)

3️⃣ **Re-declare allowed**

```js
var a = 10;
var a = 20; // no error
```

⚠️ This can cause bugs — that’s why modern JS avoids `var`.

---

## **PART 2 — What is let?**

**let** is the modern ES6 variable declaration.

### **Syntax:**

```js
let age = 25;
```

### **Important points:**

1️⃣ **Block-scoped**

```js
{
  let x = 10;
}
console.log(x); // error
```

(Hindi: {} block ke andar jo hai, sirf wahi tak valid.)

2️⃣ **Hoisted but not initialized**
Access before declaration → error.

3️⃣ **Reassign allowed**

```js
let score = 5;
score = 10; // ok
```

4️⃣ **Re-declare NOT allowed**

```js
let score = 5;
let score = 10; // ❌ error
```

---

## **PART 3 — What is const?**

**const** is used for values that should NOT change.

### **Syntax:**

```js
const PI = 3.14;
```

### **Important points:**

1️⃣ **Block-scoped**
Same as let.

2️⃣ **Must initialize**

```js
const x; // ❌ error
```

3️⃣ **Cannot reassign**

```js
const age = 30;
age = 31; // ❌ error
```

BUT…
Objects & arrays can change internally.

(Hindi: reference nahi badalta, value update ho sakti hai.)

Example:

```js
const person = { name: "IT Modem" };
person.name = "Dev"; // ✔ allowed
```

---

## **PART 4 — Difference Summary**

| Feature    | var      | let       | const     |
| ---------- | -------- | --------- | --------- |
| Scope      | Function | Block     | Block     |
| Hoisting   | Yes      | Yes (TDZ) | Yes (TDZ) |
| Re-declare | Yes      | No        | No        |
| Re-assign  | Yes      | Yes       | No        |
| Safe?      | ❌        | ✔         | ✔✔        |

(Hindi: modern JavaScript me var ko avoid karna best hai.)

---

## **PART 5 — Which should YOU use?**

👉 **Use let**
when value will change
(counters, loops, dynamic inputs)

👉 **Use const**
when value should remain same
(API URLs, config, components, arrays)

👉 **Avoid var**
unless you need old JS behavior.

(Hindi: practical coding me 95% time let + const ka use hota hai.)

---

## **PART 6 — Real-World Example**

Example from a React component:

```js
const [count, setCount] = useState(0);

let username = "IT Modem";  
const API_URL = "https://api.example.com"; 
```

(Hindi: const for fixed values, let for changeable.)

---

## **OUTRO**

If this video helped you,
like it, share it, and subscribe for more high-quality coding content! 🔥

Comment me batao —
**Next topic konsi video chahiye?**

Thanks for watching. See you in the next video 🚀

---