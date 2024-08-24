import { date, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { z } from 'zod'

//? TIP: Separate the tables into different files as they get more complex

export const users = pgTable('users', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
	username: text('username').notNull().unique(),
	email: text('email').notNull().unique(),
	createdAt: timestamp('created_at').defaultNow(),
})

export const userSchema = createSelectSchema(users)
export const insertUserSchema = createInsertSchema(users)
export type User = z.infer<typeof userSchema>
export type InsertUser = z.infer<typeof insertUserSchema>

export const tasks = pgTable('tasks', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
	userId: integer('user_id').references(() => users.id),
	title: text('title').notNull(),
	description: text('description'),
	dueDate: date('due_date'),
	status: text('status').notNull(),
	createdAt: timestamp('created_at').defaultNow(),
})

export const taskSchema = createSelectSchema(tasks)
export const insertTaskSchema = createInsertSchema(tasks)
export type Task = z.infer<typeof taskSchema>
export type InsertTask = z.infer<typeof insertTaskSchema>

export const comments = pgTable('comments', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
	taskId: integer('task_id').references(() => tasks.id),
	userId: integer('user_id').references(() => users.id),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').defaultNow(),
})

export const commentSchema = createSelectSchema(comments)
export const insertCommentSchema = createInsertSchema(comments)
export type Comment = z.infer<typeof commentSchema>
export type InsertComment = z.infer<typeof insertCommentSchema>
