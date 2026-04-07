# ⭐ **JavaScript Cheatsheet: var / let / const**  
**Quick reference for interviews, exams, and real coding.**

---

# ✅ **1. Basic Definitions**

### **var**
Old JS keyword (ES5).  
Function-scoped.  
Re-declare allowed.  
(Hindi: avoid karo — bugs create karta hai.)

### **let**
Modern keyword (ES6).  
Block-scoped.  
Reassign allowed, re-declare not allowed.  
(Hindi: jab value change hogi — let use karo.)

### **const**
Constant value.  
Block-scoped.  
Cannot reassign.  
(Hindi: fixed values ke liye const best.)

---

# ✅ **2. Scope Comparison**

| Keyword | Scope | Meaning |
|--------|--------|---------|
| **var** | Function scope | Valid inside function only |
| **let** | Block scope | Valid inside {} |
| **const** | Block scope | Valid inside {} |

(Hindi: block scope = curly braces ke andar hi valid.)

---

# ✅ **3. Hoisting Behavior**

| Keyword | Hoisted? | Value Before Declaration |
|--------|----------|---------------------------|
| **var** | Yes | `undefined` |
| **let** | Yes (TDZ) | **Error** |
| **const** | Yes (TDZ) | **Error** |

**TDZ = Temporal Dead Zone**  
(Hindi: declare se pehle use nhi kar sakte.)

---

# ✅ **4. Reassignment & Redeclaration**

| Feature | var | let | const |
|---------|-----|-----|--------|
| Reassign | ✔ Allowed | ✔ Allowed | ❌ Not Allowed |
| Re-declare | ✔ Allowed | ❌ Error | ❌ Error |

---

# ✅ **5. Best Use Cases**

### **Use var**  
❌ Generally avoid.  
Only needed in legacy code.

### **Use let**  
✔ Values that change  
- loops  
- counters  
- user inputs  
- dynamic values  

### **Use const**  
✔ Values that stay same  
- config  
- API URLs  
- arrays  
- objects  
(Hindi: 90% time const use hoga.)

---

# ✅ **6. Examples**

### **var example**
```js id="mplpz9"
var name = "IT Modem";
var name = "Developer"; // allowed
```

### **let example**
```js id="32gzs0"
let age = 25;
age = 26; // allowed
let age = 30; // ❌ error
```

### **const example**
```js id="cekdpf"
const pi = 3.14;
pi = 3.15; // ❌ error
```

### **const with object**
```js id="tc2urd"
const user = { name: "IT Modem" };
user.name = "Dev"; // ✔ allowed
```

---

# ✅ **7. Ultimate Rule (Remember This)**  
**👉 Use const by default**  
**👉 Use let only if the value must change**  
**👉 Never use var unless required**

(Hindi: ye teen line yaad ho gayi, to topic master ho gaya.)

---