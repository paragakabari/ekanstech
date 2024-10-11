"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyBtn from "@/components/elements/CopyBtn";
import FaqSection from "@/components/elements/FaqSection";
import BoostSection from "../BoostSection/BoostSection ";

export default function Home() {
  const faqs = [
    {
      question: "What is State in Flutter?",
      answer:
        "State refers to the information or data that can change over time and affect how a widget is rendered. Managing state efficiently is critical to ensuring the app’s performance and user experience remain smooth and responsive.",
    },
    {
      question: "What is Ephemeral State in Flutter?",
      answer:
        "Ephemeral State is managed locally within a single widget and reset when the widget is disposed. Examples include checkbox state or a toggle switch.",
    },
    {
      question: "What are the common methods of State Management in Flutter?",
      answer:
        "Flutter provides multiple ways to manage state, including setState, Provider, Riverpod, Bloc, and Redux. Each approach has its own use case depending on the complexity and requirements of the app.",
    },
    {
      question: "When should you use Provider for state management?",
      answer:
        "Provider is recommended when you need to share state across multiple widgets and ensure that rebuilding only affects the parts of the widget tree that depend on the updated state. It simplifies state management by using InheritedWidgets under the hood.",
    },
    {
      question: "How does the setState() method work in Flutter?",
      answer:
        "The setState() method is used to update the state of a widget. When called, it triggers a rebuild of the widget, reflecting the changes in the UI. It's ideal for simple, local state management within a single widget.",
    },
    {
      question:
        "What is the difference between StatefulWidget and StatelessWidget?",
      answer:
        "StatefulWidget is a widget that has mutable state, meaning its UI can change dynamically based on user interaction or internal data changes. StatelessWidget, on the other hand, is a widget that does not have any state and always renders the same UI.",
    },
  ];

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="State Management in Flutter"
      bgImg="assets/img/blog/blog-page1__img1.png"
    >
      <section className="blog-page p-3">
        <div className="pt-5">
          <div className="blog-container container mt-5">
            <h1 className="blog-title text-center mb-4">
              A Complete Guide to State Management in Flutter
            </h1>

            <p className="blog-description">
              State management is one of the most important aspects of
              developing scalable and efficient Flutter applications. In this
              blog, we’ll dive into the various state management techniques
              available in Flutter, from the simplest to the most advanced, and
              discuss when and why you might use each one.
            </p>
            <div className="mt-5"
              style={{
                width: "100%",
                padding: "20px 0px",
                borderRadius: "16px",
              }}
            >
              <img
                src="/assets/img/flutter-app-developer.png"
                alt="Redux Process Images"
                style={{ borderRadius: "16px" }}
              />
            </div>
            <h2 className="section-titles mt-5" id="setstate-basics">
              What is State in Flutter?
            </h2>
            <p className="blog-text">
              State refers to the information or data that can change over time
              and affect how a widget is rendered. Managing state efficiently is
              critical to ensuring the app’s performance and user experience
              remain smooth and responsive.
            </p>
            <p className="blog-text">
              Sure! Here’s an expanded version of your Flutter state management
              blog that covers all major state management approaches:
            </p>
            <h2 className="section-titles mt-5" id="setstate-basics">
              A Complete Guide to State Management in Flutter
            </h2>
            <p className="blog-text">
              State management is one of the most important aspects of
              developing scalable and efficient Flutter applications. In this
              blog, we’ll dive into the various state management techniques
              available in Flutter, from the simplest to the most advanced, and
              discuss when and why you might use each one.
            </p>

            <h2 className="section-titles mt-5" id="setstate-basics">
              What is State in Flutter?
            </h2>
            <p className="blog-text">
              State refers to the information or data that can change over time
              and affect how a widget is rendered. Managing state efficiently is
              critical to ensuring the app’s performance and user experience
              remain smooth and responsive.
            </p>

            <h2 className="section-titles mt-5" id="types-of-state">
              Types of State in Flutter
            </h2>
            <p className="blog-text">
              There are two primary types of state in Flutter: Ephemeral State
              and App State.
            </p>

            <h5 className="mt-3">1. Ephemeral State</h5>
            <p className="blog-text">
              Ephemeral State is managed locally within a single widget and
              reset when the widget is disposed. It is ideal for UI-related
              state that does not need to persist across the entire app.
            </p>
            <p>
              <strong>Example:</strong> Checkbox state, toggle switch.
            </p>

            <h5 className="mt-3">2. App State</h5>
            <p className="blog-text">
              App State is shared across multiple widgets and persists even as
              widgets are destroyed and rebuilt. It is used for state that needs
              to be accessible throughout the application, such as user
              authentication or shopping cart contents.
            </p>
            <p>
              <strong>Example:</strong> User login status, shopping cart
              contents.
            </p>

            <div className="card mt-5 p-3">
              <div className="card-body">
                <h2 className="card-title ">
                  Flutter State Management Techniques
                </h2>
                <ol className="blog-toc list-unstyled">
                  <li>
                    1. <a href="#setstate-basics">setState() – The Basics</a>
                  </li>
                  <li>
                    2. <a href="#inheritedwidget">InheritedWidget</a>
                  </li>
                  <li>
                    3. <a href="#provider">Provider</a>
                  </li>
                  <li>
                    4. <a href="#riverpod">Riverpod</a>
                  </li>
                  <li>
                    5. <a href="#bloc">Bloc</a>
                  </li>
                  <li>
                    6. <a href="#getx">GetX</a>
                  </li>
                  <li>
                    7. <a href="#redux">Redux</a>
                  </li>
                </ol>
              </div>
            </div>

            <h2 className="section-titles mt-5" id="setstate-basics">
              1. setState() – The Basics
            </h2>
            <p className="blog-text">
              setState() is the simplest form of state management in Flutter. It
              is used to update the local state of a widget.
            </p>
            <p>
              <strong>When to use: </strong> For managing ephemeral state within
              a single widget, such as UI updates or counters.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`class CounterScreen extends StatefulWidget {
  @override
  _CounterScreenState createState() => _CounterScreenState();
  }
  
  class _CounterScreenState extends State<CounterScreen> {
    int _counter = 0;
    
    void _incrementCounter() {
      setState(() {
        _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Counter")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Counter: \$_counter"),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: Text("Increment"),
            ),
          ],
        ),
      ),
    );
  }
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong> <br />
                Simple to implement, <br />
                No extra dependencies required.
              </li>
              <li>
                <strong>Cons:</strong> <br />
                Not scalable for large apps, <br />
                Can lead to UI rebuilding performance issues when state grows in
                complexity.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="inheritedwidget">
              2. InheritedWidget – Propagating State Across the Widget Tree
            </h2>
            <p className="blog-text">
              InheritedWidget allows data to be passed down the widget tree
              without explicitly passing it through constructors.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`class MyInheritedWidget extends InheritedWidget {
  final int counter;

  MyInheritedWidget({
    required this.counter,
    required Widget child,
  }) : super(child: child);

  @override
  bool updateShouldNotify(MyInheritedWidget oldWidget) => oldWidget.counter != counter;

  static MyInheritedWidget of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>()!;
  }
}`}
                </SyntaxHighlighter>
              }
            />

            <ul>
              <li>
                <strong>Pros:</strong> <br />
                Built-in solution, no need for external packages, <br />
                Efficient for data propagation.
              </li>
              <li>
                <strong>Cons:</strong> <br />
                Can become verbose in larger applications, <br />
                More boilerplate compared to other solutions.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="provider">
              3. Provider – The Simplified Solution
            </h2>
            <p className="blog-text">
              Provider is built on top of InheritedWidget but provides a cleaner
              API and better scalability for larger applications. It allows you
              to manage state efficiently and listen to changes across the
              widget tree.
            </p>

            <p>
              <strong>When to use:</strong> Ideal for medium to large
              applications where app-wide state management is needed.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`import 'package:provider/provider.dart';

class Counter with ChangeNotifier {
  int _counter = 0;

  int get counter => _counter;

  void increment() {
    _counter++;
    notifyListeners();
  }

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => Counter(),
      child: MyApp(),
    ),
  );
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong>
                <br /> Simple to use, <br />
                scalable, <br />
                minimal boilerplate, <br />
                clean separation of UI and business logic.
              </li>
              <li>
                <strong>Cons:</strong>
                <br /> Requires understanding of the Provider package.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="riverpod">
              4. Riverpod – A More Robust Provider Alternative
            </h2>
            <p className="blog-text">
              Riverpod is a more advanced state management solution, offering a
              compile-time safe way to manage state and dependencies.
            </p>

            <p>
              <strong>When to use:</strong> For large applications that require
              flexibility, better performance, and scalability.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`import 'package:flutter_riverpod/flutter_riverpod.dart';

final counterProvider = StateProvider((ref) => 0);

void main() {
  runApp(ProviderScope(child: MyApp()));
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong> <br />
                No dependency on BuildContext,
                <br /> easy to test, <br />
                powerful and flexible.
              </li>
              <li>
                <strong>Cons:</strong>
                <br /> Slightly steeper learning curve compared to Provider.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="bloc">
              5. Bloc (Business Logic Component) – Structured and Scalable
            </h2>
            <p className="blog-text">
              Bloc is another powerful state management solution that follows
              the separation of business logic from UI. It uses streams to
              manage state changes and is ideal for large, complex applications.
            </p>

            <p>
              <strong>When to use:</strong> For large applications where a
              structured approach is needed to separate business logic and state
              changes.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`import 'package:flutter_bloc/flutter_bloc.dart';

class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong> <br />
                Clear separation between UI and business logic, <br />
                strong architecture for complex apps.
              </li>
              <li>
                <strong>Cons:</strong>
                <br /> More boilerplate, <br />
                requires knowledge of streams.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="getx">
              6. GetX – Lightweight and Efficient
            </h2>
            <p className="blog-text">
              GetX is a lightweight and fast solution for state management,
              navigation, and dependency injection. It simplifies state
              management by reducing boilerplate code.
            </p>

            <p>
              <strong>When to use:</strong> For projects where minimal
              boilerplate and fast state management is required.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`import 'package:get/get.dart';

class CounterController extends GetxController {
  var counter = 0.obs;

  void increment() {
    counter++;
  }
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong> <br />
                Minimal boilerplate, <br /> fast and efficient,
                <br />
                handles navigation and dependency injection.
              </li>
              <li>
                <strong>Cons:</strong> <br />
                Can be overkill for small apps,
                <br /> requires understanding of reactive programming.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="redux">
              7. Redux – A Predictable State Container
            </h2>
            <p className="blog-text">
              Redux is a state management library that provides a predictable
              way to manage application state through actions and reducers.
            </p>

            <p>
              <strong>When to use:</strong> For large-scale applications
              requiring highly predictable state management.
            </p>

            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="dart"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`import 'package:flutter_redux/flutter_redux.dart';

class AppState {
  final int counter;

  AppState({required this.counter});
}`}
                </SyntaxHighlighter>
              }
            />
            <ul>
              <li>
                <strong>Pros:</strong> <br />
                Predictable,
                <br /> easy to debug,
                <br /> strong community support.
              </li>
              <li>
                <strong>Cons:</strong>
                <br /> Lots of boilerplate,
                <br /> steeper learning curve.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="conclusion">
              Conclusion
            </h2>
            <p className="blog-text">
              Choosing the right state management solution depends on the scale
              of your project and your specific requirements:
            </p>
            <ul>
              <li>Use setState() for simple, local state changes.</li>
              <li>
                Use InheritedWidget when you need to propagate state down the
                widget tree.
              </li>
              <li>
                Provider is a great starting point for scalable state management
                in medium to large apps.
              </li>
              <li>
                Consider Riverpod, Bloc, or GetX for more advanced scenarios
                where scalability, flexibility, or minimal boilerplate is a
                priority.
              </li>
            </ul>
            <p className="blog-text">
              No matter which solution you choose, understanding the core
              principles behind state management will help you create performant
              and maintainable Flutter applications.
            </p>

            <FaqSection faqs={faqs} title={"Flutter"} />
            <div className="pt-5 my-5">
              <BoostSection />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
