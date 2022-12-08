"use strict";(self.webpackChunkexample_graphiql_vector=self.webpackChunkexample_graphiql_vector||[]).push([[354],{5354:function(e,t,n){n.d(t,{C:function(){return B},I:function(){return X},L:function(){return qe},P:function(){return Ye},R:function(){return ct},a:function(){return We},i:function(){return Ke},l:function(){return ze},o:function(){return Je},p:function(){return Xe},t:function(){return Qe}});var i,r,o,a,u,s,c,d,f,l,g,p,v,h,m,y,b,E,A,D,_,S,I,k,w,T,C,x,L,N,V,j=n(3208),O=(n(4805),Object.defineProperty),F=function(e,t){return O(e,"name",{value:t,configurable:!0})};!function(e){function t(e){return"string"===typeof e}F(t,"is"),e.is=t}(i||(i={})),function(e){function t(e){return"string"===typeof e}F(t,"is"),e.is=t}(r||(r={})),function(e){function t(t){return"number"===typeof t&&e.MIN_VALUE<=t&&t<=e.MAX_VALUE}e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647,F(t,"is"),e.is=t}(o||(o={})),function(e){function t(t){return"number"===typeof t&&e.MIN_VALUE<=t&&t<=e.MAX_VALUE}e.MIN_VALUE=0,e.MAX_VALUE=2147483647,F(t,"is"),e.is=t}(a||(a={})),function(e){function t(e,t){return e===Number.MAX_VALUE&&(e=a.MAX_VALUE),t===Number.MAX_VALUE&&(t=a.MAX_VALUE),{line:e,character:t}}function n(e){var t=e;return Ue.objectLiteral(t)&&Ue.uinteger(t.line)&&Ue.uinteger(t.character)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(u||(u={})),function(e){function t(e,t,n,i){if(Ue.uinteger(e)&&Ue.uinteger(t)&&Ue.uinteger(n)&&Ue.uinteger(i))return{start:u.create(e,t),end:u.create(n,i)};if(u.is(e)&&u.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments[".concat(e,", ").concat(t,", ").concat(n,", ").concat(i,"]"))}function n(e){var t=e;return Ue.objectLiteral(t)&&u.is(t.start)&&u.is(t.end)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(s||(s={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return Ue.objectLiteral(t)&&s.is(t.range)&&(Ue.string(t.uri)||Ue.undefined(t.uri))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(c||(c={})),function(e){function t(e,t,n,i){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:i}}function n(e){var t=e;return Ue.objectLiteral(t)&&s.is(t.targetRange)&&Ue.string(t.targetUri)&&s.is(t.targetSelectionRange)&&(s.is(t.originSelectionRange)||Ue.undefined(t.originSelectionRange))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(d||(d={})),function(e){function t(e,t,n,i){return{red:e,green:t,blue:n,alpha:i}}function n(e){var t=e;return Ue.objectLiteral(t)&&Ue.numberRange(t.red,0,1)&&Ue.numberRange(t.green,0,1)&&Ue.numberRange(t.blue,0,1)&&Ue.numberRange(t.alpha,0,1)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(f||(f={})),function(e){function t(e,t){return{range:e,color:t}}function n(e){var t=e;return Ue.objectLiteral(t)&&s.is(t.range)&&f.is(t.color)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(l||(l={})),function(e){function t(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function n(e){var t=e;return Ue.objectLiteral(t)&&Ue.string(t.label)&&(Ue.undefined(t.textEdit)||I.is(t))&&(Ue.undefined(t.additionalTextEdits)||Ue.typedArray(t.additionalTextEdits,I.is))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(g||(g={})),(v=p||(p={})).Comment="comment",v.Imports="imports",v.Region="region",function(e){function t(e,t,n,i,r,o){var a={startLine:e,endLine:t};return Ue.defined(n)&&(a.startCharacter=n),Ue.defined(i)&&(a.endCharacter=i),Ue.defined(r)&&(a.kind=r),Ue.defined(o)&&(a.collapsedText=o),a}function n(e){var t=e;return Ue.objectLiteral(t)&&Ue.uinteger(t.startLine)&&Ue.uinteger(t.startLine)&&(Ue.undefined(t.startCharacter)||Ue.uinteger(t.startCharacter))&&(Ue.undefined(t.endCharacter)||Ue.uinteger(t.endCharacter))&&(Ue.undefined(t.kind)||Ue.string(t.kind))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(h||(h={})),function(e){function t(e,t){return{location:e,message:t}}function n(e){var t=e;return Ue.defined(t)&&c.is(t.location)&&Ue.string(t.message)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(m||(m={})),(b=y||(y={})).Error=1,b.Warning=2,b.Information=3,b.Hint=4,(A=E||(E={})).Unnecessary=1,A.Deprecated=2,function(e){function t(e){var t=e;return Ue.objectLiteral(t)&&Ue.string(t.href)}F(t,"is"),e.is=t}(D||(D={})),function(e){function t(e,t,n,i,r,o){var a={range:e,message:t};return Ue.defined(n)&&(a.severity=n),Ue.defined(i)&&(a.code=i),Ue.defined(r)&&(a.source=r),Ue.defined(o)&&(a.relatedInformation=o),a}function n(e){var t,n=e;return Ue.defined(n)&&s.is(n.range)&&Ue.string(n.message)&&(Ue.number(n.severity)||Ue.undefined(n.severity))&&(Ue.integer(n.code)||Ue.string(n.code)||Ue.undefined(n.code))&&(Ue.undefined(n.codeDescription)||Ue.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(Ue.string(n.source)||Ue.undefined(n.source))&&(Ue.undefined(n.relatedInformation)||Ue.typedArray(n.relatedInformation,m.is))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(_||(_={})),function(e){function t(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r={title:e,command:t};return Ue.defined(n)&&n.length>0&&(r.arguments=n),r}function n(e){var t=e;return Ue.defined(t)&&Ue.string(t.title)&&Ue.string(t.command)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(S||(S={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function i(e){return{range:e,newText:""}}function r(e){var t=e;return Ue.objectLiteral(t)&&Ue.string(t.newText)&&s.is(t.range)}F(t,"replace"),e.replace=t,F(n,"insert"),e.insert=n,F(i,"del"),e.del=i,F(r,"is"),e.is=r}(I||(I={})),function(e){function t(e,t,n){var i={label:e};return void 0!==t&&(i.needsConfirmation=t),void 0!==n&&(i.description=n),i}function n(e){var t=e;return Ue.objectLiteral(t)&&Ue.string(t.label)&&(Ue.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(Ue.string(t.description)||void 0===t.description)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(k||(k={})),function(e){function t(e){var t=e;return Ue.string(t)}F(t,"is"),e.is=t}(w||(w={})),function(e){function t(e,t,n){return{range:e,newText:t,annotationId:n}}function n(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}}function i(e,t){return{range:e,newText:"",annotationId:t}}function r(e){var t=e;return I.is(t)&&(k.is(t.annotationId)||w.is(t.annotationId))}F(t,"replace"),e.replace=t,F(n,"insert"),e.insert=n,F(i,"del"),e.del=i,F(r,"is"),e.is=r}(T||(T={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return Ue.defined(t)&&U.is(t.textDocument)&&Array.isArray(t.edits)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(C||(C={})),function(e){function t(e,t,n){var i={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==n&&(i.annotationId=n),i}function n(e){var t=e;return t&&"create"===t.kind&&Ue.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||Ue.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ue.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||w.is(t.annotationId))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(x||(x={})),function(e){function t(e,t,n,i){var r={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==i&&(r.annotationId=i),r}function n(e){var t=e;return t&&"rename"===t.kind&&Ue.string(t.oldUri)&&Ue.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||Ue.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ue.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||w.is(t.annotationId))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(L||(L={})),function(e){function t(e,t,n){var i={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(i.options=t),void 0!==n&&(i.annotationId=n),i}function n(e){var t=e;return t&&"delete"===t.kind&&Ue.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||Ue.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||Ue.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||w.is(t.annotationId))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(N||(N={})),function(e){function t(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return Ue.string(e.kind)?x.is(e)||L.is(e)||N.is(e):C.is(e)})))}F(t,"is"),e.is=t}(V||(V={}));var R,M,U,P,W,z,B,Q,X,K,q,Y,$,G,H,J,Z,ee,te,ne,ie,re,oe,ae,ue,se,ce,de,fe,le,ge,pe,ve,he,me,ye,be,Ee,Ae,De,_e,Se,Ie,ke,we,Te,Ce,xe,Le,Ne,Ve,je,Oe,Fe,Re=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return F(e,"TextEditChangeImpl"),e.prototype.insert=function(e,t,n){var i,r;if(void 0===n?i=I.insert(e,t):w.is(n)?(r=n,i=T.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),i=T.insert(e,t,r)),this.edits.push(i),void 0!==r)return r},e.prototype.replace=function(e,t,n){var i,r;if(void 0===n?i=I.replace(e,t):w.is(n)?(r=n,i=T.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),i=T.replace(e,t,r)),this.edits.push(i),void 0!==r)return r},e.prototype.delete=function(e,t){var n,i;if(void 0===t?n=I.del(e):w.is(t)?(i=t,n=T.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),n=T.del(e,i)),this.edits.push(n),void 0!==i)return i},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),Me=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return F(e,"ChangeAnnotations"),e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(w.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id ".concat(n," is already in use."));if(void 0===t)throw new Error("No annotation provided for id ".concat(n));return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Me(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(C.is(e)){var n=new Re(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var i=new Re(e.changes[n]);t._textEditChanges[n]=i}))):this._workspaceEdit={}}F(e,"WorkspaceChange"),Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(U.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(i=this._textEditChanges[t.uri])){var n={textDocument:t,edits:r=[]};this._workspaceEdit.documentChanges.push(n),i=new Re(r,this._changeAnnotations),this._textEditChanges[t.uri]=i}return i}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var i;if(!(i=this._textEditChanges[e])){var r=[];this._workspaceEdit.changes[e]=r,i=new Re(r),this._textEditChanges[e]=i}return i},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new Me,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,r,o;if(k.is(t)||w.is(t)?i=t:n=t,void 0===i?r=x.create(e,n):(o=w.is(i)?i:this._changeAnnotations.manage(i),r=x.create(e,n,o)),this._workspaceEdit.documentChanges.push(r),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,i){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,o,a;if(k.is(n)||w.is(n)?r=n:i=n,void 0===r?o=L.create(e,t,i):(a=w.is(r)?r:this._changeAnnotations.manage(r),o=L.create(e,t,i,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,r,o;if(k.is(t)||w.is(t)?i=t:n=t,void 0===i?r=N.create(e,n):(o=w.is(i)?i:this._changeAnnotations.manage(i),r=N.create(e,n,o)),this._workspaceEdit.documentChanges.push(r),void 0!==o)return o}}(),function(e){function t(e){return{uri:e}}function n(e){var t=e;return Ue.defined(t)&&Ue.string(t.uri)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(R||(R={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return Ue.defined(t)&&Ue.string(t.uri)&&Ue.integer(t.version)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(M||(M={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return Ue.defined(t)&&Ue.string(t.uri)&&(null===t.version||Ue.integer(t.version))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(U||(U={})),function(e){function t(e,t,n,i){return{uri:e,languageId:t,version:n,text:i}}function n(e){var t=e;return Ue.defined(t)&&Ue.string(t.uri)&&Ue.string(t.languageId)&&Ue.integer(t.version)&&Ue.string(t.text)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(P||(P={})),function(e){function t(t){var n=t;return n===e.PlainText||n===e.Markdown}e.PlainText="plaintext",e.Markdown="markdown",F(t,"is"),e.is=t}(W||(W={})),function(e){function t(e){var t=e;return Ue.objectLiteral(e)&&W.is(t.kind)&&Ue.string(t.value)}F(t,"is"),e.is=t}(z||(z={})),(Q=B||(B={})).Text=1,Q.Method=2,Q.Function=3,Q.Constructor=4,Q.Field=5,Q.Variable=6,Q.Class=7,Q.Interface=8,Q.Module=9,Q.Property=10,Q.Unit=11,Q.Value=12,Q.Enum=13,Q.Keyword=14,Q.Snippet=15,Q.Color=16,Q.File=17,Q.Reference=18,Q.Folder=19,Q.EnumMember=20,Q.Constant=21,Q.Struct=22,Q.Event=23,Q.Operator=24,Q.TypeParameter=25,(K=X||(X={})).PlainText=1,K.Snippet=2,(q||(q={})).Deprecated=1,function(e){function t(e,t,n){return{newText:e,insert:t,replace:n}}function n(e){var t=e;return t&&Ue.string(t.newText)&&s.is(t.insert)&&s.is(t.replace)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Y||(Y={})),(G=$||($={})).asIs=1,G.adjustIndentation=2,function(e){function t(e){var t=e;return t&&(Ue.string(t.detail)||void 0===t.detail)&&(Ue.string(t.description)||void 0===t.description)}F(t,"is"),e.is=t}(H||(H={})),function(e){function t(e){return{label:e}}F(t,"create"),e.create=t}(J||(J={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}F(t,"create"),e.create=t}(Z||(Z={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function n(e){var t=e;return Ue.string(t)||Ue.objectLiteral(t)&&Ue.string(t.language)&&Ue.string(t.value)}F(t,"fromPlainText"),e.fromPlainText=t,F(n,"is"),e.is=n}(ee||(ee={})),function(e){function t(e){var t=e;return!!t&&Ue.objectLiteral(t)&&(z.is(t.contents)||ee.is(t.contents)||Ue.typedArray(t.contents,ee.is))&&(void 0===e.range||s.is(e.range))}F(t,"is"),e.is=t}(te||(te={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}F(t,"create"),e.create=t}(ne||(ne={})),function(e){function t(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r={label:e};return Ue.defined(t)&&(r.documentation=t),Ue.defined(n)?r.parameters=n:r.parameters=[],r}F(t,"create"),e.create=t}(ie||(ie={})),(oe=re||(re={})).Text=1,oe.Read=2,oe.Write=3,function(e){function t(e,t){var n={range:e};return Ue.number(t)&&(n.kind=t),n}F(t,"create"),e.create=t}(ae||(ae={})),(se=ue||(ue={})).File=1,se.Module=2,se.Namespace=3,se.Package=4,se.Class=5,se.Method=6,se.Property=7,se.Field=8,se.Constructor=9,se.Enum=10,se.Interface=11,se.Function=12,se.Variable=13,se.Constant=14,se.String=15,se.Number=16,se.Boolean=17,se.Array=18,se.Object=19,se.Key=20,se.Null=21,se.EnumMember=22,se.Struct=23,se.Event=24,se.Operator=25,se.TypeParameter=26,(ce||(ce={})).Deprecated=1,function(e){function t(e,t,n,i,r){var o={name:e,kind:t,location:{uri:i,range:n}};return r&&(o.containerName=r),o}F(t,"create"),e.create=t}(de||(de={})),function(e){function t(e,t,n,i){return void 0!==i?{name:e,kind:t,location:{uri:n,range:i}}:{name:e,kind:t,location:{uri:n}}}F(t,"create"),e.create=t}(fe||(fe={})),function(e){function t(e,t,n,i,r,o){var a={name:e,detail:t,kind:n,range:i,selectionRange:r};return void 0!==o&&(a.children=o),a}function n(e){var t=e;return t&&Ue.string(t.name)&&Ue.number(t.kind)&&s.is(t.range)&&s.is(t.selectionRange)&&(void 0===t.detail||Ue.string(t.detail))&&(void 0===t.deprecated||Ue.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(le||(le={})),(pe=ge||(ge={})).Empty="",pe.QuickFix="quickfix",pe.Refactor="refactor",pe.RefactorExtract="refactor.extract",pe.RefactorInline="refactor.inline",pe.RefactorRewrite="refactor.rewrite",pe.Source="source",pe.SourceOrganizeImports="source.organizeImports",pe.SourceFixAll="source.fixAll",(he=ve||(ve={})).Invoked=1,he.Automatic=2,function(e){function t(e,t,n){var i={diagnostics:e};return void 0!==t&&null!==t&&(i.only=t),void 0!==n&&null!==n&&(i.triggerKind=n),i}function n(e){var t=e;return Ue.defined(t)&&Ue.typedArray(t.diagnostics,_.is)&&(void 0===t.only||Ue.typedArray(t.only,Ue.string))&&(void 0===t.triggerKind||t.triggerKind===ve.Invoked||t.triggerKind===ve.Automatic)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(me||(me={})),function(e){function t(e,t,n){var i={title:e},r=!0;return"string"===typeof t?(r=!1,i.kind=t):S.is(t)?i.command=t:i.edit=t,r&&void 0!==n&&(i.kind=n),i}function n(e){var t=e;return t&&Ue.string(t.title)&&(void 0===t.diagnostics||Ue.typedArray(t.diagnostics,_.is))&&(void 0===t.kind||Ue.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||S.is(t.command))&&(void 0===t.isPreferred||Ue.boolean(t.isPreferred))&&(void 0===t.edit||V.is(t.edit))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(ye||(ye={})),function(e){function t(e,t){var n={range:e};return Ue.defined(t)&&(n.data=t),n}function n(e){var t=e;return Ue.defined(t)&&s.is(t.range)&&(Ue.undefined(t.command)||S.is(t.command))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(be||(be={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return Ue.defined(t)&&Ue.uinteger(t.tabSize)&&Ue.boolean(t.insertSpaces)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Ee||(Ee={})),function(e){function t(e,t,n){return{range:e,target:t,data:n}}function n(e){var t=e;return Ue.defined(t)&&s.is(t.range)&&(Ue.undefined(t.target)||Ue.string(t.target))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Ae||(Ae={})),function(e){function t(e,t){return{range:e,parent:t}}function n(t){var n=t;return Ue.objectLiteral(n)&&s.is(n.range)&&(void 0===n.parent||e.is(n.parent))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(De||(De={})),(Se=_e||(_e={})).namespace="namespace",Se.type="type",Se.class="class",Se.enum="enum",Se.interface="interface",Se.struct="struct",Se.typeParameter="typeParameter",Se.parameter="parameter",Se.variable="variable",Se.property="property",Se.enumMember="enumMember",Se.event="event",Se.function="function",Se.method="method",Se.macro="macro",Se.keyword="keyword",Se.modifier="modifier",Se.comment="comment",Se.string="string",Se.number="number",Se.regexp="regexp",Se.operator="operator",Se.decorator="decorator",(ke=Ie||(Ie={})).declaration="declaration",ke.definition="definition",ke.readonly="readonly",ke.static="static",ke.deprecated="deprecated",ke.abstract="abstract",ke.async="async",ke.modification="modification",ke.documentation="documentation",ke.defaultLibrary="defaultLibrary",function(e){function t(e){var t=e;return Ue.objectLiteral(t)&&(void 0===t.resultId||"string"===typeof t.resultId)&&Array.isArray(t.data)&&(0===t.data.length||"number"===typeof t.data[0])}F(t,"is"),e.is=t}(we||(we={})),function(e){function t(e,t){return{range:e,text:t}}function n(e){var t=e;return void 0!==t&&null!==t&&s.is(t.range)&&Ue.string(t.text)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Te||(Te={})),function(e){function t(e,t,n){return{range:e,variableName:t,caseSensitiveLookup:n}}function n(e){var t=e;return void 0!==t&&null!==t&&s.is(t.range)&&Ue.boolean(t.caseSensitiveLookup)&&(Ue.string(t.variableName)||void 0===t.variableName)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Ce||(Ce={})),function(e){function t(e,t){return{range:e,expression:t}}function n(e){var t=e;return void 0!==t&&null!==t&&s.is(t.range)&&(Ue.string(t.expression)||void 0===t.expression)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(xe||(xe={})),function(e){function t(e,t){return{frameId:e,stoppedLocation:t}}function n(e){var t=e;return Ue.defined(t)&&s.is(e.stoppedLocation)}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Le||(Le={})),function(e){function t(e){return 1===e||2===e}e.Type=1,e.Parameter=2,F(t,"is"),e.is=t}(Ne||(Ne={})),function(e){function t(e){return{value:e}}function n(e){var t=e;return Ue.objectLiteral(t)&&(void 0===t.tooltip||Ue.string(t.tooltip)||z.is(t.tooltip))&&(void 0===t.location||c.is(t.location))&&(void 0===t.command||S.is(t.command))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(Ve||(Ve={})),function(e){function t(e,t,n){var i={position:e,label:t};return void 0!==n&&(i.kind=n),i}function n(e){var t=e;return Ue.objectLiteral(t)&&u.is(t.position)&&(Ue.string(t.label)||Ue.typedArray(t.label,Ve.is))&&(void 0===t.kind||Ne.is(t.kind))&&void 0===t.textEdits||Ue.typedArray(t.textEdits,I.is)&&(void 0===t.tooltip||Ue.string(t.tooltip)||z.is(t.tooltip))&&(void 0===t.paddingLeft||Ue.boolean(t.paddingLeft))&&(void 0===t.paddingRight||Ue.boolean(t.paddingRight))}F(t,"create"),e.create=t,F(n,"is"),e.is=n}(je||(je={})),function(e){function t(e){var t=e;return Ue.objectLiteral(t)&&r.is(t.uri)&&Ue.string(t.name)}F(t,"is"),e.is=t}(Oe||(Oe={})),function(e){function t(e,t,n,i){return new Pe(e,t,n,i)}function n(e){var t=e;return!!(Ue.defined(t)&&Ue.string(t.uri)&&(Ue.undefined(t.languageId)||Ue.string(t.languageId))&&Ue.uinteger(t.lineCount)&&Ue.func(t.getText)&&Ue.func(t.positionAt)&&Ue.func(t.offsetAt))}function i(e,t){for(var n=e.getText(),i=r(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=n.length,a=i.length-1;a>=0;a--){var u=i[a],s=e.offsetAt(u.range.start),c=e.offsetAt(u.range.end);if(!(c<=o))throw new Error("Overlapping edit");n=n.substring(0,s)+u.newText+n.substring(c,n.length),o=s}return n}function r(e,t){if(e.length<=1)return e;var n=e.length/2|0,i=e.slice(0,n),o=e.slice(n);r(i,t),r(o,t);for(var a=0,u=0,s=0;a<i.length&&u<o.length;){var c=t(i[a],o[u]);e[s++]=c<=0?i[a++]:o[u++]}for(;a<i.length;)e[s++]=i[a++];for(;u<o.length;)e[s++]=o[u++];return e}F(t,"create"),e.create=t,F(n,"is"),e.is=n,F(i,"applyEdits"),e.applyEdits=i,F(r,"mergeSort")}(Fe||(Fe={}));var Ue,Pe=function(){function e(e,t,n,i){this._uri=e,this._languageId=t,this._version=n,this._content=i,this._lineOffsets=void 0}return F(e,"FullTextDocument"),Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,i=0;i<t.length;i++){n&&(e.push(i),n=!1);var r=t.charAt(i);n="\r"===r||"\n"===r,"\r"===r&&i+1<t.length&&"\n"===t.charAt(i+1)&&i++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return u.create(0,e);for(;n<i;){var r=Math.floor((n+i)/2);t[r]>e?i=r:n=r+1}var o=n-1;return u.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],i=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();function We(e){return{ofRule:e}}function ze(e,t){return{ofRule:e,isList:!0,separator:t}}function Be(e,t){var n=e.match;return e.match=function(e){var i=!1;return n&&(i=n(e)),i&&t.every((function(t){return t.match&&!t.match(e)}))},e}function Qe(e,t){return{style:t,match:function(t){return t.kind===e}}}function Xe(e,t){return{style:t||"punctuation",match:function(t){return"Punctuation"===t.kind&&t.value===e}}}!function(e){var t=Object.prototype.toString;function n(e){return"undefined"!==typeof e}function i(e){return"undefined"===typeof e}function r(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function a(e){return"[object Number]"===t.call(e)}function u(e,n,i){return"[object Number]"===t.call(e)&&n<=e&&e<=i}function s(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647}function c(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===t.call(e)}function f(e){return null!==e&&"object"===typeof e}function l(e,t){return Array.isArray(e)&&e.every(t)}F(n,"defined"),e.defined=n,F(i,"undefined$1"),e.undefined=i,F(r,"boolean"),e.boolean=r,F(o,"string"),e.string=o,F(a,"number"),e.number=a,F(u,"numberRange"),e.numberRange=u,F(s,"integer"),e.integer=s,F(c,"uinteger"),e.uinteger=c,F(d,"func"),e.func=d,F(f,"objectLiteral"),e.objectLiteral=f,F(l,"typedArray"),e.typedArray=l}(Ue||(Ue={})),F(We,"opt"),F(ze,"list"),F(Be,"butNot"),F(Qe,"t"),F(Xe,"p");var Ke=F((function(e){return" "===e||"\t"===e||","===e||"\n"===e||"\r"===e||"\ufeff"===e||"\xa0"===e}),"isIgnored"),qe={Name:/^[_A-Za-z][_0-9A-Za-z]*/,Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,Comment:/^#.*/},Ye={Document:[ze("Definition")],Definition:function(e){switch(e.value){case"{":return"ShortQuery";case"query":return"Query";case"mutation":return"Mutation";case"subscription":return"Subscription";case"fragment":return j.h.FRAGMENT_DEFINITION;case"schema":return"SchemaDef";case"scalar":return"ScalarDef";case"type":return"ObjectTypeDef";case"interface":return"InterfaceDef";case"union":return"UnionDef";case"enum":return"EnumDef";case"input":return"InputDef";case"extend":return"ExtendDef";case"directive":return"DirectiveDef"}},ShortQuery:["SelectionSet"],Query:[$e("query"),We(Ge("def")),We("VariableDefinitions"),ze("Directive"),"SelectionSet"],Mutation:[$e("mutation"),We(Ge("def")),We("VariableDefinitions"),ze("Directive"),"SelectionSet"],Subscription:[$e("subscription"),We(Ge("def")),We("VariableDefinitions"),ze("Directive"),"SelectionSet"],VariableDefinitions:[Xe("("),ze("VariableDefinition"),Xe(")")],VariableDefinition:["Variable",Xe(":"),"Type",We("DefaultValue")],Variable:[Xe("$","variable"),Ge("variable")],DefaultValue:[Xe("="),"Value"],SelectionSet:[Xe("{"),ze("Selection"),Xe("}")],Selection:function(e,t){return"..."===e.value?t.match(/[\s\u00a0,]*(on\b|@|{)/,!1)?"InlineFragment":"FragmentSpread":t.match(/[\s\u00a0,]*:/,!1)?"AliasedField":"Field"},AliasedField:[Ge("property"),Xe(":"),Ge("qualifier"),We("Arguments"),ze("Directive"),We("SelectionSet")],Field:[Ge("property"),We("Arguments"),ze("Directive"),We("SelectionSet")],Arguments:[Xe("("),ze("Argument"),Xe(")")],Argument:[Ge("attribute"),Xe(":"),"Value"],FragmentSpread:[Xe("..."),Ge("def"),ze("Directive")],InlineFragment:[Xe("..."),We("TypeCondition"),ze("Directive"),"SelectionSet"],FragmentDefinition:[$e("fragment"),We(Be(Ge("def"),[$e("on")])),"TypeCondition",ze("Directive"),"SelectionSet"],TypeCondition:[$e("on"),"NamedType"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue";case"$":return"Variable";case"&":return"NamedType"}return null;case"Name":switch(e.value){case"true":case"false":return"BooleanValue"}return"null"===e.value?"NullValue":"EnumValue"}},NumberValue:[Qe("Number","number")],StringValue:[{style:"string",match:function(e){return"String"===e.kind},update:function(e,t){t.value.startsWith('"""')&&(e.inBlockstring=!t.value.slice(3).endsWith('"""'))}}],BooleanValue:[Qe("Name","builtin")],NullValue:[Qe("Name","keyword")],EnumValue:[Ge("string-2")],ListValue:[Xe("["),ze("Value"),Xe("]")],ObjectValue:[Xe("{"),ze("ObjectField"),Xe("}")],ObjectField:[Ge("attribute"),Xe(":"),"Value"],Type:function(e){return"["===e.value?"ListType":"NonNullType"},ListType:[Xe("["),"Type",Xe("]"),We(Xe("!"))],NonNullType:["NamedType",We(Xe("!"))],NamedType:[He("atom")],Directive:[Xe("@","meta"),Ge("meta"),We("Arguments")],DirectiveDef:[$e("directive"),Xe("@","meta"),Ge("meta"),We("ArgumentsDef"),$e("on"),ze("DirectiveLocation",Xe("|"))],InterfaceDef:[$e("interface"),Ge("atom"),We("Implements"),ze("Directive"),Xe("{"),ze("FieldDef"),Xe("}")],Implements:[$e("implements"),ze("NamedType",Xe("&"))],DirectiveLocation:[Ge("string-2")],SchemaDef:[$e("schema"),ze("Directive"),Xe("{"),ze("OperationTypeDef"),Xe("}")],OperationTypeDef:[Ge("keyword"),Xe(":"),Ge("atom")],ScalarDef:[$e("scalar"),Ge("atom"),ze("Directive")],ObjectTypeDef:[$e("type"),Ge("atom"),We("Implements"),ze("Directive"),Xe("{"),ze("FieldDef"),Xe("}")],FieldDef:[Ge("property"),We("ArgumentsDef"),Xe(":"),"Type",ze("Directive")],ArgumentsDef:[Xe("("),ze("InputValueDef"),Xe(")")],InputValueDef:[Ge("attribute"),Xe(":"),"Type",We("DefaultValue"),ze("Directive")],UnionDef:[$e("union"),Ge("atom"),ze("Directive"),Xe("="),ze("UnionMember",Xe("|"))],UnionMember:["NamedType"],EnumDef:[$e("enum"),Ge("atom"),ze("Directive"),Xe("{"),ze("EnumValueDef"),Xe("}")],EnumValueDef:[Ge("string-2"),ze("Directive")],InputDef:[$e("input"),Ge("atom"),ze("Directive"),Xe("{"),ze("InputValueDef"),Xe("}")],ExtendDef:[$e("extend"),"ObjectTypeDef"]};function $e(e){return{style:"keyword",match:function(t){return"Name"===t.kind&&t.value===e}}}function Ge(e){return{style:e,match:function(e){return"Name"===e.kind},update:function(e,t){e.name=t.value}}}function He(e){return{style:e,match:function(e){return"Name"===e.kind},update:function(e,t){var n;(null===(n=e.prevState)||void 0===n?void 0:n.prevState)&&(e.name=t.value,e.prevState.prevState.type=t.value)}}}function Je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eatWhitespace:function(e){return e.eatWhile(Ke)},lexRules:qe,parseRules:Ye,editorConfig:{}};return{startState:function(){var t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeperator:!1,prevState:null};return nt(e.parseRules,t,j.h.DOCUMENT),t},token:function(t,n){return Ze(t,n,e)}}}function Ze(e,t,n){var i;if(t.inBlockstring)return e.match(/.*"""/)?(t.inBlockstring=!1,"string"):(e.skipToEnd(),"string");var r=n.lexRules,o=n.parseRules,a=n.eatWhitespace,u=n.editorConfig;if(t.rule&&0===t.rule.length?it(t):t.needsAdvance&&(t.needsAdvance=!1,rt(t,!0)),e.sol()){var s=(null===u||void 0===u?void 0:u.tabSize)||2;t.indentLevel=Math.floor(e.indentation()/s)}if(a(e))return"ws";var c=ut(r,e);if(!c)return e.match(/\S+/)||e.match(/\s/),nt(tt,t,"Invalid"),"invalidchar";if("Comment"===c.kind)return nt(tt,t,"Comment"),"comment";var d=et({},t);if("Punctuation"===c.kind)if(/^[{([]/.test(c.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1));else if(/^[})\]]/.test(c.value)){var f=t.levels=(t.levels||[]).slice(0,-1);t.indentLevel&&f.length>0&&f[f.length-1]<t.indentLevel&&(t.indentLevel=f[f.length-1])}for(;t.rule;){var l="function"===typeof t.rule?0===t.step?t.rule(c,e):null:t.rule[t.step];if(t.needsSeperator&&(l=null===l||void 0===l?void 0:l.separator),l){if(l.ofRule&&(l=l.ofRule),"string"===typeof l){nt(o,t,l);continue}if(null===(i=l.match)||void 0===i?void 0:i.call(l,c))return l.update&&l.update(t,c),"Punctuation"===c.kind?rt(t,!0):t.needsAdvance=!0,l.style}at(t)}return et(t,d),nt(tt,t,"Invalid"),"invalidchar"}function et(e,t){for(var n=Object.keys(t),i=0;i<n.length;i++)e[n[i]]=t[n[i]];return e}F($e,"word"),F(Ge,"name"),F(He,"type"),F(Je,"onlineParser"),F(Ze,"getToken"),F(et,"assign");var tt={Invalid:[],Comment:[]};function nt(e,t,n){if(!e[n])throw new TypeError("Unknown rule: "+n);t.prevState=Object.assign({},t),t.kind=n,t.name=null,t.type=null,t.rule=e[n],t.step=0,t.needsSeperator=!1}function it(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeperator=e.prevState.needsSeperator,e.prevState=e.prevState.prevState)}function rt(e,t){var n;if(ot(e)&&e.rule){var i=e.rule[e.step];if(i.separator){var r=i.separator;if(e.needsSeperator=!e.needsSeperator,!e.needsSeperator&&r.ofRule)return}if(t)return}for(e.needsSeperator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)it(e),e.rule&&(ot(e)?(null===(n=e.rule)||void 0===n?void 0:n[e.step].separator)&&(e.needsSeperator=!e.needsSeperator):(e.needsSeperator=!1,e.step++))}function ot(e){var t=Array.isArray(e.rule)&&"string"!==typeof e.rule[e.step]&&e.rule[e.step];return t&&t.isList}function at(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)it(e);e.rule&&rt(e,!1)}function ut(e,t){for(var n=Object.keys(e),i=0;i<n.length;i++){var r=t.match(e[n[i]]);if(r&&r instanceof Array)return{kind:n[i],value:r[0]}}}F(nt,"pushRule"),F(it,"popRule"),F(rt,"advanceRule"),F(ot,"isList"),F(at,"unsuccessful"),F(ut,"lex");var st,ct=Object.assign(Object.assign({},j.h),{ALIASED_FIELD:"AliasedField",ARGUMENTS:"Arguments",SHORT_QUERY:"ShortQuery",QUERY:"Query",MUTATION:"Mutation",SUBSCRIPTION:"Subscription",TYPE_CONDITION:"TypeCondition",INVALID:"Invalid",COMMENT:"Comment",SCHEMA_DEF:"SchemaDef",SCALAR_DEF:"ScalarDef",OBJECT_TYPE_DEF:"ObjectTypeDef",OBJECT_VALUE:"ObjectValue",LIST_VALUE:"ListValue",INTERFACE_DEF:"InterfaceDef",UNION_DEF:"UnionDef",ENUM_DEF:"EnumDef",ENUM_VALUE:"EnumValue",FIELD_DEF:"FieldDef",INPUT_DEF:"InputDef",INPUT_VALUE_DEF:"InputValueDef",ARGUMENTS_DEF:"ArgumentsDef",EXTEND_DEF:"ExtendDef",DIRECTIVE_DEF:"DirectiveDef",IMPLEMENTS:"Implements",VARIABLE_DEFINITIONS:"VariableDefinitions",TYPE:"Type"});globalThis&&globalThis.__awaiter,function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(st||(st={}))}}]);
//# sourceMappingURL=354.364097e2.chunk.js.map