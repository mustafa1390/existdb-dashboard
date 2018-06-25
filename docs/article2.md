# eXist-db and Web Components - Part 2

by Joern Turner, 6. April 2018

In Part 1 i gave a high-level overview of what Web Components actually are and which problems





Yes, Web Components are still young and not all parts have been finalized in standards yet. There have been other







Being involved with a lot of different technologies from day to day we found that Dojo was too demanding to maintain in



To bypass the framework trouble we therefore decided to go with Web Components as an emerging standard and to use

## What is Polymer?

[Polymer](https://polymer-project.org) has already been mentioned in part 1 but needs a slightly deeper introduction here.









As with any new technology there are certainly also coming some challenges. Web Components largely use the common DOM



You can't have a global CSS any more that controls everything in the page and you cannot access certain elements in the




























* updating
* installation and removal of xar packages





The application was built as a single-page application with several modules being plugged into the main window.

There


* a UserManager
* a Lauchpad
* a backup screen




The original Dashboard has been around for several years now. In the meantime we learned about new use cases - some users



The following screenshot illustrates this.





In essence the Dashboard is not much more than a layout wrapper that provides a navigation for the single components











Each of the shown items live in their own git repository and are designed to be independent of each other. They are









When time for an update comes a simple ```bower update``` will do the trick.



eXist-db apps are usually build with Apache Ant. There is a ready-made build-file for you whenever you create an app. There's no


ant
```

The result will be a xar application ready to be deployed on any eXist-db installation.










  - bower_components
      - existdb-packagemanager
       - modules/ (all XQuery stuff)


- ... other files and dirs
- controller.xql (Dashboard controller)

Now what happens with the controller logic? Fortunately eXist-db is clever enough to work that out for us. It detects











The transition from the old Dashboard to a newer one was a necessary step to free us from the lock-in

All in all the new Dashboard gives a whole lot of new options to further refine and extend the respective




* there's certainly a learning curve to master to find your way in this new world. I confess i was stuck not





