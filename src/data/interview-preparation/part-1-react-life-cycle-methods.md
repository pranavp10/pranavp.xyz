---
title: "Component Lifecycle Methods in React"
description: "In React, a component's lifecycle includes methods that are called at different stages of its life. These methods let you perform specific actions or side effects when the component is created, updated, or removed from the DOM"
slug: "part-1-react-life-cycle-methods"
date: "Jul 16, 2024"
tags: ["React", "Part 1", "Interview"]
imageName: "part-1-react-life-cycle-methods"
---

### What is Component's Lifecycle Method in React?

- In React, a component's lifecycle includes methods that are called at different stages of its life.
- These methods let you perform specific actions or side effects when the component is created, updated, or removed from the DOM.

### Let's start by understanding all the phases

#### 1. Mounting Phase

This phase occurs when a component is created and inserted into the DOM for the first time.

#### 2. Updating Phase

This phase occurs when a component's props or state change, causing it to re-render.

#### 3. Unmounting

This phase occurs when a component is removed from the DOM.

#### 4. Error Handling

When their is error during rendering, in a lifecycle method or in the constructor of any child component

### Different Lifecycle Methods of React Class Components

1. <Tag title="constructor"/>
2. <Tag title="static getDerivedStateFromProps"/>
3. <Tag title="render"/>
4. <Tag title="shouldComponentUpdate"/>
5. <Tag title="getSnapshotBeforeUpdate"/>
6. <Tag title="componentDidUpdate"/>
7. <Tag title="componentWillUnmount"/>
8. <Tag title="static getDerivedStateFromError"/>
9. <Tag title="componentDidCatch"/>

### Let's go through all the methods one by one

### 1. constructor

Called before anything else. It's where you initialize the component's state and bind event handlers.

### 2. static getDerivedStateFromProps

Called right before rendering, both on the initial mount and subsequent updates. It's used to update the state based on changes in props.

### 3. render

This method is required and must return the JSX that represents the component's UI.

### 4. getSnapshotBeforeUpdate

Called just before the DOM is updated. It's used to capture information about the previous state or DOM structure.

### 5. shouldComponentUpdate

Gives you control over whether a component should re-render or not. If it returns false, the component will not update.

### 6. componentDidUpdate

Called after the component updates in the DOM. It's a good place to perform side effects based on the updated props or state.

### 7. componentWillUnmount

Called just before the component is unmounted. It's a good place to clean up any resources, like timers or subscriptions, that are no longer needed.

### 8. static getDerivedStateFromError, componentDidCatch

When their is error during rendering, in a lifecycle method or in the constructor of any child component

### Reference Link

- [Official website for life cycle methods](https://legacy.reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)
- [Interactive website for life cycle methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Video Link](https://www.youtube.com/watch?v=qnN_FuFNq2g)
