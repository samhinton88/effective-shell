"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[2967],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"How to Avoid Scripting - A Dictionary Lookup in Python",slug:"/part-6-advanced-techniques/how-to-avoid-scripting/",chapterNumber:30},s=void 0,p={unversionedId:"advanced-techniques/how-to-avoid-scripting/index",id:"advanced-techniques/how-to-avoid-scripting/index",title:"How to Avoid Scripting - A Dictionary Lookup in Python",description:"This book is about being an effective shell user. This is not a book about shell scripting. And sometimes being an effective shell user means knowing when to not use a shell script to solve a problem, but to use an alternative tool such as a programming language.",source:"@site/docs/06-advanced-techniques/30-how-to-avoid-scripting/index.md",sourceDirName:"06-advanced-techniques/30-how-to-avoid-scripting",slug:"/part-6-advanced-techniques/how-to-avoid-scripting/",permalink:"/part-6-advanced-techniques/how-to-avoid-scripting/",editUrl:"https://github.com/dwmkerr/dwmkerr/main/docs/06-advanced-techniques/30-how-to-avoid-scripting/index.md",tags:[],version:"current",frontMatter:{title:"How to Avoid Scripting - A Dictionary Lookup in Python",slug:"/part-6-advanced-techniques/how-to-avoid-scripting/",chapterNumber:30},sidebar:"anotherSidebar",previous:{title:"Understanding Shell Expansion",permalink:"/part-6-advanced-techniques/understanding-shell-expansion/"}},h=[{value:"When should you avoid shell scripting?",id:"when-should-you-avoid-shell-scripting",children:[],level:2},{value:"What are the alternatives?",id:"what-are-the-alternatives",children:[],level:2},{value:"What makes a shell-friendly tool?",id:"what-makes-a-shell-friendly-tool",children:[],level:2},{value:"Writing a Dictionary Lookup Tool in Python",id:"writing-a-dictionary-lookup-tool-in-python",children:[{value:"Version 1 - Basic Structure",id:"version-1---basic-structure",children:[],level:3},{value:"Version 2 - Downloading the Definition",id:"version-2---downloading-the-definition",children:[],level:3},{value:"Version 3 - Formatting the Output",id:"version-3---formatting-the-output",children:[],level:3}],level:2},{value:"Installing the Tool",id:"installing-the-tool",children:[],level:2},{value:"Improving the Lookup Program",id:"improving-the-lookup-program",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This book is about being an ",(0,i.kt)("em",{parentName:"p"},"effective")," shell user. This is not a book about shell scripting. And sometimes being an effective shell user means knowing when to ",(0,i.kt)("em",{parentName:"p"},"not")," use a shell script to solve a problem, but to use an alternative tool such as a programming language."),(0,i.kt)("p",null,"In this chapter, we'll look at when you might want to ",(0,i.kt)("em",{parentName:"p"},"avoid")," shell scripting, what the alternatives might be, the pros and cons of each, and then create a real-world useful tool using Python, that would otherwise be very difficult to create with a shell script. We'll also look at what characterises a 'good' shell tool and how to follow the patterns and conventions set by common tools installed on your system."),(0,i.kt)("h2",{id:"when-should-you-avoid-shell-scripting"},"When should you avoid shell scripting?"),(0,i.kt)("p",null,"Shell scripts can be very powerful. As a quick and dirty way to solve a simple problem, they often cannot be beat. But there are reasons you might want to avoid using a shell script:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the problem you are solving is quite complex, the script will be large and hard to manage"),(0,i.kt)("li",{parentName:"ol"},"Shell scripts become hard for others to reason about when they become complex"),(0,i.kt)("li",{parentName:"ol"},"Shell scripts are limited to the features of the shell and the tools on your system - but not every system has the same tools, so complex scripts may not be portable")),(0,i.kt)("p",null,"Shell scripts are sometimes the ",(0,i.kt)("em",{parentName:"p"},"only")," sensible tool to use, for example if we wanted to write a script that showed the shell's options and let the user toggle them on and off, a script would be ideal. This is because another technology, such as a Python script, would not know what shell you are using. This would make the Python script needlessly complex."),(0,i.kt)("p",null,"But in general, as soon as a script gets to more than about a page of code, I tend to think that this a good point at which to consider using an alternative tool."),(0,i.kt)("h2",{id:"what-are-the-alternatives"},"What are the alternatives?"),(0,i.kt)("p",null,"There are hundreds of programming languages that exist to help you solve technical problems. But not all of them are ideal as an alternative to a shell script. Some of the questions you might ask are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Is the programming language going to be available on almost any machine?")," Simple shell scripts run almost anywhere without having to install other tools - will the language give me this functionality?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Is the language designed for handling the kind of problem I want to solve?")," Does it support console based input and output? Is it easy to write shell-style tools in this language?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Is the language simple and popular?")," Can others understand or adapt the script without too much intervention?")),(0,i.kt)("p",null,"Some languages jump to mind as good options for shell scripts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Python")," - it is installed by default on almost every system, highly popular, simple to use and read and works well to write input-processing-output programs."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ruby")," - again, installed on many systems by default. This is a simple language and also highly popular, but perhaps less well-known than Python."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"C")," - most platforms have a C compiler installed, and C is great for working with low-level system libraries. But it requires compilation, may behave quite differently on different systems, and is fairly complex for others to use."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"NodeJS")," - Node.js uses Javascript as its language, which is highly popular. It is event-driven, meaning it can be very fast. But the version installed across systems varies considerably, and this can cause headaches when sharing scripts."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Perl")," - installed almost universally on any system, very powerful, but possibly less well known nowadays and therefore perhaps less likely to be understood by others.")),(0,i.kt)("p",null,"Now when you are writing ",(0,i.kt)("em",{parentName:"p"},"complex")," tools or programs, the criteria will change, you want to use a language and platform that really suits the problem you are solving, or is used already by the team you are working with. But in this chapter we're looking at alternatives to shell scripts to write shell like tools."),(0,i.kt)("p",null,"Given it's almost universal presence on systems, its huge (and increasing) popularity, and robust standard library (which allows you to use many features without having to have users download additional packages), Python is an excellent choice for writing shell friendly tools."),(0,i.kt)("h2",{id:"what-makes-a-shell-friendly-tool"},"What makes a shell-friendly tool?"),(0,i.kt)("p",null,"When we are writing a tool that is aimed at shell users, it makes sense to follow the conventions set by ",(0,i.kt)("em",{parentName:"p"},"other")," shell tools. This means that users will be able to use the tool in a familiar way, and complement it by combining it with existing tools on their system. So what makes a shell-friendly tool?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being able to read from standard input")," - this allows us to pipe inputs from ",(0,i.kt)("em",{parentName:"li"},"other")," tools into our programs (see ",(0,i.kt)("a",{parentName:"li",href:"/part-2-core-skills/navigating-your-system/"},"Thinking in Pipelines")," for more on this), we also want to read and process line-by-line, in case the input is very large"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being able to write to standard output")," - this sounds obvious, but it means making sure that our output can be read by a human operator, but also ideally be processed by other tools such as ",(0,i.kt)("inlineCode",{parentName:"li"},"cut"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rev")," and so on, it also means thinking about how colour will or will not be used in output, and avoiding superfluous output that might make it harder to process the output (such as titles, version numbers and so on)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being able to specify options using sensibly defined flags")," - there are many common conventions for how flags or parameters work in tools, using these patterns (rather than inventing our own) will make our tool easier to use. For example, having an ",(0,i.kt)("inlineCode",{parentName:"li"},"-h")," flag to show help is a very common convention"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being able to run on different systems")," - shell users are used to being able to use tools like ",(0,i.kt)("inlineCode",{parentName:"li"},"grep"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sed")," and so on in a similar way across platforms, a well-written tool will do the same"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Handling errors using shell idioms")," - shell-friendly tools use ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," as a status code to indicate success, and define error codes in their documentation, so that people using the tools know how to handle exceptional circumstances")),(0,i.kt)("p",null,"There are many other conventions and ideas that could be added, but these are some of the fundamentals."),(0,i.kt)("h2",{id:"writing-a-dictionary-lookup-tool-in-python"},"Writing a Dictionary Lookup Tool in Python"),(0,i.kt)("p",null,"As an example of how to write a shell-friendly tool, we're going to create a simple program that takes a list of words and provides a definition loaded from the free and fantastic ",(0,i.kt)("a",{parentName:"p",href:"https://dictionaryapi.dev"},"Free Dictionary API"),"."),(0,i.kt)("p",null,"This is a good example of a tool that would be overly complex to write with a shell script. We need to handle input, parse and process it, make HTTP requests to download pages from the internet, parse and process those requests, format the output, and provide some options for the user on how the output looks. A highly experienced shell programmer would likely be able to create this tool with a shell script without breaking a sweat, but it would likely be quite hard for a less experienced user to follow. Python is easy to write and read, has a wealth of online learning resources, and is available on almost any platform."),(0,i.kt)("p",null,"Our requirements for the tool will be quite simple:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Allow the user to provide a set of words to be looked up"),(0,i.kt)("li",{parentName:"ol"},"Download the definition of the words"),(0,i.kt)("li",{parentName:"ol"},"Write the words to standard output, with the option to format how this output looks"),(0,i.kt)("li",{parentName:"ol"},"Offer help to the user on how to use the tool")),(0,i.kt)("p",null,"We'll also limit ourselves to 'raw' Python using only the standard library - meaning users will not have to install any packages to make this tool work."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Help! I don't know Python!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"That's OK! All of the chapters in the section 'Advanced Techniques' will likely stretch you and require some additional learning and experimentation. Don't worry if you don't know Python - I'll explain as much as I can as I go through the chapter. You should be able to take away the key lessons to be learnt without a particular familiarity with the language."))),(0,i.kt)("p",null,"Each of the files you'll see in this section are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup")," folder."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Downloading the Samples")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Run the following command in your shell to download the samples:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl effective.sh | sh\n")))),(0,i.kt)("p",null,"OK - let's get started. "),(0,i.kt)("h3",{id:"version-1---basic-structure"},"Version 1 - Basic Structure"),(0,i.kt)("p",null,"Shell tools take input, process it and produce output. So let's take our structure and create a first cut. This first cut will not perform any processing - it'll just take the input and produce simple output. But it will give us a working starting point to incrementally add more features to."),(0,i.kt)("p",null,"At this stage I'll share the code in the form of snippets - you can see the code as it evolves by looking in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup/")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="lookup-v1.py"',title:'"lookup-v1.py"'},"import sys\n\n# Read standard input until there is nothing left to read.\nwhile True:\n    # Read a line of input.\n    word = sys.stdin.readline()\n\n    # If the user hits 'Ctrl+D' to end transmission, readline returns an\n    # empty string and we can stop reading.\n    if not word:\n        break\n\n    # If the input is an empty line or whitespace, skip it.\n    if word.isspace():\n        continue\n\n    # Add the word to our list of lookups, and strip any whitespace from the\n    # beginning and end of it. For now, we don't have a definition.\n    word = word.strip()\n    definition = ''\n\n    # Write the result.\n    print(\"{} - {}\".format(word, definition))\n")),(0,i.kt)("p",null,"Let's test this out and then we'll dissect the code. First, we'll just run the program, type some words, then press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl D")," to signal end-of-transmission (check ",(0,i.kt)("a",{parentName:"p",href:"/part-2-core-skills/navigating-your-system/"},"Thinking In Pipelines")," if you need a reminder on what 'end-of-transmission' means). You can also press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl C")," to close the program."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python3 ~/effective-shell/programs/lookup/lookup-v1.py\none\none - {}\ntwo\ntwo -\nthree\nthree -\n")),(0,i.kt)("p",null,"The program successfully reads our input, and writes out a result for each word."),(0,i.kt)("p",null,"We can also test that the program can receive input piped from a file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cat ~/effective-shell/data/words.txt | python3 ~/effective-shell/programs/lookup/lookup-v1.py\nlouche -\nliana -\nlieder -\nManchu -\nNankeen -\nnaevi -\nNess -\n")),(0,i.kt)("p",null,"So we have a program that can read from standard input, either interactively or from a file. Let's break down the code section by section."),(0,i.kt)("p",null,"First we create a loop that will run continuously, reading lines from standard input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"lookups = []\nwhile True:\n    # Read a line of input.\n    word = sys.stdin.readline()\n")),(0,i.kt)("p",null,"If the input is completely empty, then that means we've reached the end of the file or the user has signaled 'end-of-transmission' by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+D"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    if not word:\n        break\n    if word.isspace():\n        continue\n")),(0,i.kt)("p",null,"If the input is just whitespace, such as a newline or tab, we skip it."),(0,i.kt)("p",null,"Now we record the value of the word with the whitespace that might surround it stripped, note that has ",(0,i.kt)("em",{parentName:"p"},"not")," been found and set the definition of the word to an empty string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    word = word.strip()\n    definition = ''\n")),(0,i.kt)("p",null,"Now we write out the word and its definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'    print("{} - {}".format(word, definition))\n')),(0,i.kt)("p",null,"Now let's look at actually downloading the definition."),(0,i.kt)("h3",{id:"version-2---downloading-the-definition"},"Version 2 - Downloading the Definition"),(0,i.kt)("p",null,"Now that we've got the list of words, we can try and download a definition of each one by using the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://dictionaryapi.dev/"},"https://dictionaryapi.dev/")," website. This site searches a number of online dictionaries, including Wiktionary."),(0,i.kt)("p",null,"We will add a new function to the script. You can see the complete script in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup/lookup-v1.py"),"."),(0,i.kt)("p",null,"The new function downloads the definition of a word from the dictionaryapi.dev site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="lookup-v1.py"',title:'"lookup-v1.py"'},"def search_for_word(word):\n    # Encode the word for HTML.\n    encoded_word = urllib.parse.quote(word.encode('utf8'))\n\n    # Try and download the definition using the amazing dictionaryapi.dev site.\n    try:\n        url = \"https://api.dictionaryapi.dev/api/v2/entries/en/{}\".format(encoded_word)\n        response = urllib.request.urlopen(url)\n        if response.status == 404:\n            print(\"NOT FOUND\")\n            sys.exit(1)\n        with urllib.request.urlopen(url) as response:\n            raw_json_data = response.read().decode('utf-8')\n    # If the word is not found, return an empty definition.\n    except urllib.error.HTTPError as http_error:\n        if http_error.code == 404:\n            return ''\n        raise\n    except Exception as e:\n        sys.stderr.write(\"An error occurred trying to download the definition of '{}'\".format(word))\n        sys.exit(ERROR_HTTP)\n        \n    # Now try and parse the data.\n    try:\n        data = json.loads(raw_json_data)\n        first_definition = data[0]['meanings'][0]['definitions'][0]['definition']\n    except Exception as e:\n        sys.stderr.write(\"An error occurred trying to parse the definition of '{}'\".format(word))\n        sys.exit(ERROR_PARSE)\n\n    # Return the result.\n    return first_definition\n\ndef search_for_word(word):\n    # Encode the word for HTML.\n    encoded_word = urllib.parse.quote(word.encode('utf8'))\n\n    # Try and download the definition using the amazing dictionaryapi.dev site.\n    try:\n        url = \"https://api.dictionaryapi.dev/api/v2/entries/en/{}\".format(encoded_word)\n        response = urllib.request.urlopen(url)\n        if response.status == 404:\n            print(\"NOT FOUND\")\n            sys.exit(1)\n        with urllib.request.urlopen(url) as response:\n            raw_json_data = response.read().decode('utf-8')\n    # If the word is not found, return an empty definition.\n    except urllib.error.HTTPError as http_error:\n        if http_error.code == 404:\n            return ''\n        raise\n    except Exception as e:\n        sys.stderr.write(\"An error occurred trying to download the definition of '{}'\".format(word))\n        sys.exit(ERROR_HTTP)\n        \n    # Now try and parse the data.\n    try:\n        data = json.loads(raw_json_data)\n        first_definition = data[0]['meanings'][0]['definitions'][0]['definition']\n    except Exception as e:\n        sys.stderr.write(\"An error occurred trying to parse the definition of '{}'\".format(word))\n        sys.exit(ERROR_PARSE)\n\n    # Return the result.\n    return first_definition\n")),(0,i.kt)("p",null,"I'm not going to go through this blow-by-blow, it's a fairly rough and ready way to try and get the definition of a word from an online resource. In a nutshell it does the follow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure that have the right address to search for the word"),(0,i.kt)("li",{parentName:"ol"},"Search for the word and download the result"),(0,i.kt)("li",{parentName:"ol"},"If the word is not found, return an empty result"),(0,i.kt)("li",{parentName:"ol"},"If the word is found, try and decode the definition and return it"),(0,i.kt)("li",{parentName:"ol"},"Close the program if there are errors we cannot recover from")),(0,i.kt)("p",null,"With this new function, we can update the main loop of our program to look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="lookup-v2.py"',title:'"lookup-v2.py"'},'    # Strip whitespace from the word and find the definition.\n    word = word.strip()\n    stripped_word = word.strip()\n    definition = search_for_word(stripped_word)\n\n    # Write the result.\n    print("{} - {}".format(word, definition))\n')),(0,i.kt)("p",null,"If we pass some test words into the program our output looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cat ~/effective-shell/data/words.txt | python3 ~/effective-shell/programs/lookup/lookup-v2.py\nlouche - To make (an alcoholic beverage, e.g. absinthe or ouzo) cloudy by mixing it with water, due to the presence of anethole. This is known as the ouzo effect.\nliana - A climbing woody vine, usually tropical.\nlieder - An art song, sung in German and accompanied on the piano.\nManchu -\nNankeen - A type of cotton cloth originally from Nanking in China.\nnaevi - A pigmented, raised or otherwise abnormal area on the skin. Naevi may be congenital or acquired, and are always benign.\nNess - A promontory; a cape or headland. (Frequently used as a suffix in placenames.)\n")),(0,i.kt)("p",null,"Pretty cool - our program can find a reasonable definition for most of the words in the test data set we have. Now let's look at cleaning up the output."),(0,i.kt)("h3",{id:"version-3---formatting-the-output"},"Version 3 - Formatting the Output"),(0,i.kt)("p",null,"Our program is working quite well, but we can improve on it by making the output a little friendlier to read. We can show the word in a different colour to the definition, separate the definition with a colon which will make it easier for us to process it with other tools, or even limit the length of the definition so that it fits on the screen."),(0,i.kt)("p",null,"We're also going to let the user provide a 'crop' value if they want to. This is a number that limits the length of the output each line, which could be useful if the user wants to fit the definitions on the screen without them spilling over to the next line."),(0,i.kt)("p",null,"There is a special module in Python called ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse")," that helps you parse the arguments for a program, we'll use this to specify and parse the 'crop' argument."),(0,i.kt)("p",null,"You can see the complete script in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup/lookup-v3.py"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import argparse\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\n    '-c', '--crop',\n    help='crop the output line length',\n    type=int,\n    nargs='?',\n    const=80,         # Default value if -c is supplied\n    default=None)     # Default value if -c is not supplied\nargs = parser.parse_args()\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse")," module is very sophisticated, you can read more about it online if you'd like to discover more. But for now its enough to know that this code defines an optional argument named ",(0,i.kt)("inlineCode",{parentName:"p"},"crop"),", that can be provided with a number, or without a number. We'll see it in action shortly."),(0,i.kt)("p",null,"Next we'll add a function that writes a word and its definition in a nicer way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def write_definition(word, definition):\n    # Check if stdout is a terminal - if it is we\'ll colour the output.\n    is_terminal = sys.stdout.isatty()\n\n    # We will separate the word and the definition with a colon and space.\n    separator = ": "\n\n    # If the \'crop\' argument is set, use it.\n    if args.crop:\n        output_length = len(word) + len(separator) + len(definition)\n        if output_length > args.crop:\n            # We need to chop some letters off the end of the definition, but\n            # leave space for \'...\' to indicate the output is cropped.\n            new_length = len(definition) - 3 - (output_length - args.crop)\n            definition = definition[:new_length] + \'...\'\n\n    # If we are in a terminal make the word green and the separator white.\n    if is_terminal:\n        word = "\\033[92m" + word + "\\033[0m"\n        separator = "\\033[37m" + separator  + "\\033[0m"\n\n    # Write out the word, separator and definition.\n    print(word + separator + definition)\n')),(0,i.kt)("p",null,"This code first checks to see whether ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," is a terminal. This is useful because if we are in a terminal, we can show colour codes, but if the output is something like a file, we can skip the colour codes (which would look messy in the resulting file). Then we do some arithmetic if the ",(0,i.kt)("inlineCode",{parentName:"p"},"crop")," argument is provided, shortening the definition if needed."),(0,i.kt)("p",null,"The weird looking characters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/033[92m")," are ANSI control codes to set the colour of the output - you can read all about them in ",(0,i.kt)("a",{parentName:"p",href:"/part-4-shell-scripting/useful-patterns-for-shell-scripts"},"Useful Patterns for Shell Scripts")," in the section 'Colouring Output'."),(0,i.kt)("p",null,"With this function added, and called in the right place in our program, we can now lookup definitions, have the output printed in colour, and specify a 'crop' value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cat ./effective-shell/data/words.txt | python3 ./effective-shell/programs/lookup/lookup-v3.py -c 60\nlouche: To make (an alcoholic beverage, e.g. absinthe or ...\nliana: A climbing woody vine, usually tropical.\nlieder: An art song, sung in German and accompanied on th...\nManchu:\nNankeen: A type of cotton cloth originally from Nanking i...\nnaevi: A pigmented, raised or otherwise abnormal area on ...\nNess: A promontory; a cape or headland. (Frequently used ...\n")),(0,i.kt)("p",null,"The nice thing about using the ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse")," module is that our program ",(0,i.kt)("em",{parentName:"p"},"automatically")," gets a ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," option that can be used to provide instructions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python3 ./samples/programs/lookup/lookup-v3.py -h\nusage: lookup-v3.py [-h] [-c [CROP]]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -c [CROP], --crop [CROP]\n                        crop the output line length\n")),(0,i.kt)("p",null,"We've really just scratched the surface of what can be done here. You can find this version of the program in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup/lookup-v3.py")),(0,i.kt)("h2",{id:"installing-the-tool"},"Installing the Tool"),(0,i.kt)("p",null,"The great thing about a Python script like the one we have built is that it is standalone, and anyone can install it as tool on their system with very little effort."),(0,i.kt)("p",null,"All we need to do is first tell the shell that if it encounters this script and is asked to execute it, it needs to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," program. We can do this by putting a shebang at the top of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="lookup.py"',title:'"lookup.py"'},"#!/usr/bin/env python3\n\n# ...the rest of the code goes here, it's been omitted for brevity!\n")),(0,i.kt)("p",null,"Now that we have a shebang, we can make the file executable using the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," program and link to it from our personal ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ~/effective-shell/programs/lookup/lookup.py\nln -s ~/effective-shell/programs/lookup/lookup.py /usr/local/bin/lookup\n")),(0,i.kt)("p",null,"If you need a reminder on shebangs, the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," tool or the ",(0,i.kt)("inlineCode",{parentName:"p"},"ln")," tool, check ",(0,i.kt)("a",{parentName:"p",href:"/part-4-shell-scripting/mastering-conditional-logic"},"Shell Script Essentials")," and in particular the section 'Using Shebangs' and 'Installing Your Script'."),(0,i.kt)("p",null,"Now that we have the tool in our local binaries folder, we can call it like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ lookup -c -- effective shell\neffective: A soldier fit for duty\nshell: A hard external covering of an animal.\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"lookup.py")," script, which is the final version of the script, has some additional features which are described at the end of the chapter. One of these features is that we can just provide a word or list of words as positional arguments to the command. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," in the command shown above is a 'separator' - this is the standard Linux pattern to indicate that the list of ",(0,i.kt)("em",{parentName:"p"},"flags")," is complete, and that what follows is the list of ",(0,i.kt)("em",{parentName:"p"},"positional parameters"),". If we didn't have this, the tool would think that we are providing ",(0,i.kt)("inlineCode",{parentName:"p"},"effective")," as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," flag. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," removes this ambiguity. Many Linux tools support this separator."),(0,i.kt)("h2",{id:"improving-the-lookup-program"},"Improving the Lookup Program"),(0,i.kt)("p",null,"One of the fun things about coding is thinking about all of the exciting additional features you can add!"),(0,i.kt)("p",null,"The final version of the script, which is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell/programs/lookup/lookup.py")," folder has a set of additional features that you might find useful to explore when building your own programs. These features are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Graceful handling of Ctrl+C"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensure we close cleanly on Ctrl+C without a noisy error message. See ",(0,i.kt)("inlineCode",{parentName:"td"},"KeyboardInterrupt")," in the code for this.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"More detailed help"),(0,i.kt)("td",{parentName:"tr",align:null},"The help text has examples, see ",(0,i.kt)("inlineCode",{parentName:"td"},"argparse")," in the code.")))),(0,i.kt)("p",null,"There are all sorts of other features you could add as a coding and learning exercise! Here are a few that I considered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A 'browse' flag")," - this could open the user's browser to the full definition online"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manpages")," - an option to install a manpage for the tool, meaning that we can run ",(0,i.kt)("inlineCode",{parentName:"li"},"man lookup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clearer interactive mode")," - when stdin is a terminal, meaning the user is interactive, show a prompt and instructions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A verbose flag")," - a ",(0,i.kt)("inlineCode",{parentName:"li"},"--verbose")," flag to show detailed error messages if they are encountered")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this chapter we looked at alternatives to shell scripts and when we might consider them. We looked at what makes a tool 'shell-friendly'. We also looked at how we can use the highly popular Python language to write a simple but useful shell-friendly tool."))}u.isMDXComponent=!0}}]);