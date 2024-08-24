import { db } from "@repo/db"

if (!db) {
	throw new Error("db is not defined")
}

console.log(db)
