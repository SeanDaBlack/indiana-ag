console.log("Hello from the other side!");

(self.webpackChunk = self.webpackChunk || []).push([
  [536],
  {
    18136: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      var s = i(88716);
      async function a(e, t, i, a) {
        let n = null;
        if (null != t)
          try {
            const e = document.getElementById("extraData");
            if (null != e && (e.remove(), e.dataset.extradataKey == t)) {
              const t = e.innerHTML;
              n = JSON.parse(t);
            }
          } catch {}
        if (null == n || (null != a && !(await a(n)))) {
          const t = await i(),
            a = await (0, s.Mq)(e, t);
          (0, s.Do)(a), (n = await a.json());
        }
        return n;
      }
    },
    41821: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = { Online: 0, Offline: 1, Scheduled: 2 };
    },
    65971: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = { Any: 0, Group: 1, Prior: 2, Invite: 3 };
    },
    8149: (e, t, i) => {
      "use strict";
      function s(e, t) {
        return (
          Array.isArray(e) &&
          Array.isArray(t) &&
          e.length === t.length &&
          e.every((e, i) => e === t[i])
        );
      }
      i.d(t, { Z: () => s });
    },
    57524: (e, t, i) => {
      "use strict";
      function s(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      i.d(t, { Z: () => s });
    },
    50734: (e, t, i) => {
      "use strict";
      function s() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }
      i.d(t, { Z: () => s });
    },
    74957: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = { Display: 0, Edit: 1 };
    },
    80533: (e, t, i) => {
      "use strict";
      i.d(t, { O7: () => n, qv: () => s, zS: () => a });
      const s = ["InProgress", "Deleted"],
        a = "Deleted",
        n = "Returned";
    },
    33430: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      var s = i(18785),
        a = Promise.resolve();
      function n(e) {
        function t(t, i) {
          var s;
          if ("string" == typeof t) s = { url: t };
          else if (t instanceof Uint8Array) s = { data: t };
          else {
            if ("object" != typeof t || null === t)
              throw new TypeError("invalid src type");
            s = Object.assign({}, t);
          }
          i && i.withCredentials && (s.withCredentials = i.withCredentials);
          var a = e.getDocument(s);
          return (
            (a.__PDFDocumentLoadingTask = !0),
            i && i.onPassword && (a.onPassword = i.onPassword),
            i && i.onProgress && (a.onProgress = i.onProgress),
            a
          );
        }
        return {
          createLoadingTask: t,
          PDFJSWrapper: function (i, n, l) {
            var r = null,
              o = null,
              u = null,
              c = !1;
            function d() {
              i.getContext("2d").clearRect(0, 0, i.width, i.height);
            }
            function m() {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
            }
            i.getContext("2d").save(),
              (this.destroy = function () {
                null !== r && ((a = r.destroy()), (r = null));
              }),
              (this.getResolutionScale = function () {
                return i.offsetWidth / i.width;
              }),
              (this.printPage = function (e, t) {
                if (null !== o) {
                  var i = (void 0 === e ? 150 : e) / 72,
                    s = 96 / 72,
                    a = document.createElement("iframe");
                  new Promise(function (e, t) {
                    (a.frameBorder = "0"),
                      (a.scrolling = "no"),
                      (a.width = "0px;"),
                      (a.height = "0px;"),
                      (a.style.cssText = "position: absolute; top: 0; left: 0"),
                      (a.onload = function () {
                        e(this.contentWindow);
                      }),
                      window.document.body.appendChild(a);
                  })
                    .then(function (e) {
                      return (
                        (e.document.title = ""),
                        r.getPage(1).then(function (t) {
                          var a = t.getViewport({ scale: 1 });
                          return (
                            (e.document.head.appendChild(
                              e.document.createElement("style")
                            ).textContent =
                              "@supports ((size:A4) and (size:1pt 1pt)) {@page { margin: 1pt; size: " +
                              (a.width * i) / s +
                              "pt " +
                              (a.height * i) / s +
                              "pt; }}@media print {body { margin: 0 }canvas { page-break-before: avoid; page-break-after: always; page-break-inside: avoid }}@media screen {body { margin: 0 }}"),
                            e
                          );
                        })
                      );
                    })
                    .then(function (e) {
                      for (var s = [], a = 1; a <= r.numPages; ++a)
                        (void 0 !== t && -1 === t.indexOf(a)) ||
                          s.push(
                            r.getPage(a).then(function (t) {
                              var s = t.getViewport({ scale: 1 }),
                                a = e.document.body.appendChild(
                                  e.document.createElement("canvas")
                                );
                              return (
                                (a.width = s.width * i),
                                (a.height = s.height * i),
                                t.render({
                                  canvasContext: a.getContext("2d"),
                                  transform: [i, 0, 0, i, 0, 0],
                                  viewport: s,
                                  intent: "display",
                                }).promise
                              );
                            })
                          );
                      Promise.all(s)
                        .then(function () {
                          e.focus(),
                            e.document.queryCommandSupported("print")
                              ? e.document.execCommand("print", !1, null)
                              : e.print(),
                            n();
                        })
                        .catch(function (e) {
                          n(), l("error", e);
                        });
                    });
                }
                function n() {
                  a.parentNode.removeChild(a);
                }
              }),
              (this.renderPage = function (t) {
                if (null !== u) {
                  if (c) return;
                  return (
                    (c = !0),
                    void u.cancel().catch(function (e) {
                      l("error", e);
                    })
                  );
                }
                if (null !== o) {
                  var d =
                      (void 0 === o.rotate ? 0 : o.rotate) +
                      (void 0 === t ? 0 : t),
                    h =
                      (i.offsetWidth / o.getViewport({ scale: 1 }).width) *
                      (window.devicePixelRatio || 1),
                    f = o.getViewport({ scale: h, rotation: d });
                  l("page-size", f.width, f.height, h),
                    (i.width = f.width),
                    (i.height = f.height),
                    (u = o.render({
                      canvasContext: i.getContext("2d"),
                      viewport: f,
                    })),
                    (n.style.visibility = "hidden"),
                    m();
                  var p = {
                      scrollPageIntoView: function (e) {
                        l("link-clicked", e.pageNumber);
                      },
                    },
                    g = new s.PDFLinkService();
                  g.setDocument(r),
                    g.setViewer(p),
                    (a = a.then(
                      function () {
                        var i = o
                            .getAnnotations({ intent: "display" })
                            .then(function (t) {
                              e.AnnotationLayer.render({
                                viewport: f.clone({ dontFlip: !0 }),
                                div: n,
                                annotations: t,
                                page: o,
                                linkService: g,
                                renderInteractiveForms: !1,
                              });
                            }),
                          s = u.promise
                            .then(function () {
                              (n.style.visibility = ""), (c = !1), (u = null);
                            })
                            .catch(
                              function (i) {
                                if (
                                  ((u = null),
                                  i instanceof e.RenderingCancelledException)
                                )
                                  return (c = !1), void this.renderPage(t);
                                l("error", i);
                              }.bind(this)
                            );
                        return Promise.all([i, s]);
                      }.bind(this)
                    ));
                }
              }),
              (this.forEachPage = function (e) {
                var t = r.numPages;
                !(function i(s) {
                  r.getPage(s)
                    .then(e)
                    .then(function () {
                      ++s <= t && i(s);
                    });
                })(1);
              }),
              (this.loadPage = function (e, t) {
                (o = null),
                  null !== r &&
                    (a = a
                      .then(function () {
                        return r.getPage(e);
                      })
                      .then(
                        function (e) {
                          (o = e),
                            this.renderPage(t),
                            l("page-loaded", e.pageNumber);
                        }.bind(this)
                      )
                      .catch(function (e) {
                        d(), m(), l("error", e);
                      }));
              }),
              (this.loadDocument = function (s) {
                if (((r = null), (o = null), l("num-pages", void 0), !s))
                  return (
                    i.removeAttribute("width"),
                    i.removeAttribute("height"),
                    void m()
                  );
                a = a
                  .then(function () {
                    var i, a;
                    if (
                      "object" == typeof (a = s) &&
                      null !== a &&
                      !0 === a.__PDFDocumentLoadingTask
                    ) {
                      if (s.destroyed)
                        return void l(
                          "error",
                          new Error("loadingTask has been destroyed")
                        );
                      i = s;
                    } else
                      i = t(s, {
                        onPassword: function (t, i) {
                          var s;
                          switch (i) {
                            case e.PasswordResponses.NEED_PASSWORD:
                              s = "NEED_PASSWORD";
                              break;
                            case e.PasswordResponses.INCORRECT_PASSWORD:
                              s = "INCORRECT_PASSWORD";
                          }
                          l("password", t, s);
                        },
                        onProgress: function (e) {
                          var t = e.loaded / e.total;
                          l("progress", Math.min(t, 1));
                        },
                      });
                    return i.promise;
                  })
                  .then(function (e) {
                    (r = e), l("num-pages", e.numPages), l("loaded");
                  })
                  .catch(function (e) {
                    d(), m(), l("error", e);
                  });
              }),
              (n.style.transformOrigin = "0 0");
          },
        };
      }
    },
    84470: (e, t, i) => {
      "use strict";
      i.d(t, { JR: () => l, Nx: () => r, uX: () => o });
      var s = i(31066);
      const a = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return t.reduce((e, t) =>
          e.flatMap((e) => t.map((t) => [e, t].flat()))
        );
      };
      var n = i(93311);
      function l(e) {
        const t = (function (e) {
          return (
            (e = null == e ? null : e.toString().replace(/[^+0-9.-]+/g, "")),
            parseFloat(e)
          );
        })(e);
        return isNaN(t) ? 0 : t;
      }
      function r(e) {
        if (null == e) return null;
        if ("number" == typeof e) return 0 != e;
        const t = e.toString().toLowerCase();
        return "1" == t || "true" == t
          ? 1
          : "0" == t || "false" == t
          ? 0
          : null;
      }
      function o(e, t) {
        const i = (0, s._)(t);
        return (
          u(i.body, "conditional-block, calculation", (t) => {
            !(function (e, t) {
              const i = {
                calculation: (e, t) => {
                  const i = t.parentElement,
                    a = !e || !e.text.length,
                    n = document.createElement("span");
                  if (
                    (n.append(...t.children),
                    (0, s.T)(n, null != e ? e.text[0] : ""),
                    i.replaceChild(n, t),
                    a)
                  )
                    return;
                  n.dataset.isIterable = "true";
                  const l =
                    null != i.dataset.iterables
                      ? JSON.parse(i.dataset.iterables)
                      : [];
                  l.unshift(e.text), (i.dataset.iterables = JSON.stringify(l));
                },
                "conditional-block": (e, t) => {
                  null == e || 1 === r(e.text[0])
                    ? t.replaceWith(...(t.querySelector("div").children || []))
                    : (t.outerHTML = "");
                },
              };
              i[t.nodeName.toLocaleLowerCase()](e, t);
            })((0, n.hr)(t.id) ? null : e.find((e) => e.id == t.id), t);
          }),
          (function (e) {
            if (0 != e.querySelectorAll("[data-iterables]").length) {
              const t = (e) => {
                const t = JSON.parse(e.dataset.iterables);
                if (
                  (delete e.dataset.iterables,
                  1 != t.length || 1 != t[0].length)
                ) {
                  const i = a.apply(null, t),
                    n = document.createElement("span");
                  i.forEach((t) => {
                    const i = e.cloneNode(!0),
                      a = i.querySelectorAll(
                        ':scope > [data-is-iterable="true"]'
                      );
                    for (let e = a.length - 1; e >= 0; e--)
                      (0, s.T)(a[e], Array.isArray(t) ? t[e] : t);
                    n.append(i);
                  }),
                    e.replaceWith(...n.children);
                }
              };
              u(e.body, "[data-iterables]", t);
            }
            e.querySelectorAll("[data-is-iterable]").forEach(
              (e) => delete e.dataset.isIterable
            );
          })(i),
          i.body.innerHTML
        );
      }
      function u(e, t, i) {
        const s = e.querySelectorAll(t);
        for (let e = s.length - 1; e >= 0; e--) u(s[e], t, i);
        e.matches(t) && i(e);
      }
    },
    624: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => m });
      const s = {
        props: ["childrenIds", "viewOnly"],
        inject: ["getElementComponent"],
        computed: {
          children: function () {
            return this.childrenIds
              .map((e) => this.$store.getters["page/getElementByVmId"](e))
              .filter((e) => !!this.showChanges || !0 !== e.isBase);
          },
          showChanges() {
            return this.$store.getters["page/showChanges"];
          },
        },
        methods: {
          childStyle(e) {
            if (!this.showChanges) return {};
            const t = e.baseChangeType();
            return null == t
              ? {}
              : ("new" != t && "deleted" != t) ||
                (null != this.$parent &&
                null != this.$parent.data &&
                null != this.$parent.data.baseChangeType
                  ? this.$parent.data.baseChangeType()
                  : null) != t
              ? {
                  "min-height": "5px",
                  "border-style": "dashed",
                  "border-width": "2px",
                  "border-color":
                    "changed" == t
                      ? "blue"
                      : "deleted" == t
                      ? "red"
                      : "new" == t
                      ? "green"
                      : "black",
                }
              : {};
          },
        },
      };
      var a = i(83262);
      const n = (0, a.Z)(
          s,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "row" },
              [
                e._l(e.children, function (t) {
                  return [
                    i(e.getElementComponent(t), {
                      key: t.vmId,
                      tag: "component",
                      style: e.childStyle(t),
                      attrs: { data: t, name: t.vmId, "view-only": e.viewOnly },
                    }),
                  ];
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        l = {
          props: ["data", "forceNonLocal"],
          subscriptions() {
            return { errors: this.data.errors$(), valid: this.data.valid$() };
          },
        },
        r = (0, a.Z)(
          l,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return e.forceNonLocal ||
              e.data.definition.settings.showErrorsLocally
              ? i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.valid,
                        expression: "!valid",
                      },
                    ],
                  },
                  e._l(e.errors || [], function (t) {
                    return i(
                      "span",
                      { staticClass: "field-validation-error" },
                      [
                        i("i", {
                          staticClass: "icon icon-attention align-middle mr-1",
                          attrs: {
                            title: "Error",
                            "aria-label": "Error:",
                            role: "img",
                          },
                        }),
                        e._v(e._s(t)),
                      ]
                    );
                  }),
                  0
                )
              : e._e();
          },
          [],
          !1,
          null,
          "b7f731aa",
          null
        ).exports;
      var o = i(4480),
        u = i(35447),
        c = i(7202),
        d = i(23934);
      const m = {
        inject: {
          elementFilter: { from: "elementFilter", default: () => (e) => !0 },
          pageEventBus: { from: "pageEventBus", default: () => d.Z },
        },
        props: ["data", "viewOnly"],
        components: {
          ChildrenList: n,
          AdminSettingsDifferences: u.Z,
          ErrorList: r,
          HelpIcon: o.Z,
          Comments: c.Z,
        },
        created() {
          this.pageEventBus().on("focus", (e) => {
            this.vmId == e && null != this.focus && this.focus();
          });
        },
        computed: {
          showAdminEditControls() {
            return this.$store.getters["page/canAdminEditData"];
          },
          isAdminEditing: {
            get() {
              return this.$store.getters["page/isAdminEditingById"](this.vmId);
            },
            set(e) {
              this.$store.commit("page/setAdminEditing", {
                vmId: this.vmId,
                enabled: e,
              });
            },
          },
          isViewOnly() {
            return this.viewOnly && !this.isAdminEditing;
          },
          definition() {
            return this.data.definition;
          },
          settings() {
            return this.definition.settings;
          },
          colClass() {
            return "col-md-" + (this.settings.columns || 12);
          },
          vmId() {
            return this.data.vmId || this.data.id;
          },
          children() {
            return this.$store.getters["page/getChildrenByVmId"](
              this.vmId
            ).filter((e) => this.elementFilter(e));
          },
          value: {
            get() {
              return this.$store.getters["page/getValueByVmId"](this.vmId);
            },
            set(e) {
              this.$store.commit("page/setValueByVmId", {
                id: this.vmId,
                value: e,
              });
            },
          },
        },
        methods: {
          toggleAdminEdit() {
            this.isAdminEditing
              ? this.cancelAdminEdit()
              : this.startAdminEdit();
          },
          startAdminEdit() {
            (this.oldValue = this.value), (this.isAdminEditing = !0);
          },
          cancelAdminEdit() {
            (this.value = this.oldValue), (this.isAdminEditing = !1);
          },
          childStyle(e) {
            const t = null != e.baseChanges && e.baseChanges.length > 0,
              i =
                null !=
                  (this.$parent?.data || this.$parent?.$parent?.data)
                    ?.baseLink && null == e.baseLink;
            return i || t
              ? {
                  "min-height": "5px",
                  "border-style": "dashed",
                  "border-width": "2px",
                  "border-color": t ? "blue" : i ? "red" : "green",
                }
              : {};
          },
        },
      };
    },
    40958: (e, t, i) => {},
    97633: (e, t, i) => {
      "use strict";
      let s;
      i.d(t, { R: () => s }),
        (function (e) {
          (e[(e.No = 0)] = "No"),
            (e[(e.Single = 1)] = "Single"),
            (e[(e.Multiple = 2)] = "Multiple");
        })(s || (s = {}));
    },
    76619: (e, t, i) => {},
    64987: (e, t, i) => {
      "use strict";
      i(30058), i(23090), i(3087), i(38652), i(99946), i(92976);
    },
    19603: (e, t, i) => {
      "use strict";
      let s, a;
      i(30058),
        i(23090),
        i(99946),
        (function (e) {
          (e[(e.No = 0)] = "No"),
            (e[(e.Single = 1)] = "Single"),
            (e[(e.Multiple = 2)] = "Multiple");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Text = 0)] = "Text"), (e[(e.Html = 1)] = "Html");
        })(a || (a = {})),
        i(92976);
    },
    51192: (e, t, i) => {
      "use strict";
      let s, a, n;
      i(64987),
        i(23090),
        i(3087),
        i(38652),
        i(99946),
        (function (e) {
          (e[(e.Custom = 0)] = "Custom"),
            (e[(e.Stock = 1)] = "Stock"),
            (e[(e.DataSource = 2)] = "DataSource");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Counties = 0)] = "Counties"),
            (e[(e.Provinces = 1)] = "Provinces"),
            (e[(e.States = 2)] = "States"),
            (e[(e.Countries = 3)] = "Countries");
        })(a || (a = {})),
        i(76619),
        (function (e) {
          (e[(e.InlineTextbox = 0)] = "InlineTextbox"),
            (e[(e.TextboxBelow = 1)] = "TextboxBelow"),
            (e[(e.Textarea = 2)] = "Textarea");
        })(n || (n = {}));
    },
    30058: (e, t, i) => {
      "use strict";
      i(23090), i(44898), i(76619);
    },
    37937: (e, t, i) => {
      "use strict";
      i(76619);
    },
    60552: (e, t, i) => {
      "use strict";
      let s, a, n, l, r, o;
      i(30058),
        i(23090),
        i(38652),
        i(519),
        i(99946),
        i(92976),
        i(76619),
        (function (e) {
          (e[(e.ListAndSearch = 0)] = "ListAndSearch"),
            (e[(e.SearchOnly = 1)] = "SearchOnly"),
            (e[(e.ListOnly = 2)] = "ListOnly");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Online = 0)] = "Online"),
            (e[(e.Offline = 1)] = "Offline"),
            (e[(e.Scheduled = 2)] = "Scheduled");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Annually = 0)] = "Annually"),
            (e[(e.BiAnnually = 1)] = "BiAnnually"),
            (e[(e.Quarterly = 2)] = "Quarterly"),
            (e[(e.Monthly = 3)] = "Monthly"),
            (e[(e.Custom = 4)] = "Custom");
        })(n || (n = {})),
        (function (e) {
          (e[(e.LabelLeft = 0)] = "LabelLeft"),
            (e[(e.LabelTop = 1)] = "LabelTop");
        })(l || (l = {})),
        (function (e) {
          (e[(e.NoNav = 0)] = "NoNav"),
            (e[(e.LeftNav = 1)] = "LeftNav"),
            (e[(e.TabNav = 2)] = "TabNav");
        })(r || (r = {})),
        (function (e) {
          (e[(e.Bar = 0)] = "Bar"),
            (e[(e.Rule = 1)] = "Rule"),
            (e[(e.Side = 2)] = "Side"),
            (e[(e.None = 3)] = "None");
        })(o || (o = {}));
    },
    92976: (e, t, i) => {
      "use strict";
      let s;
      !(function (e) {
        (e[(e.Inherit = 0)] = "Inherit"),
          (e[(e.Blank = 1)] = "Blank"),
          (e[(e.DefaultValue = 2)] = "DefaultValue"),
          (e[(e.EnteredValue = 3)] = "EnteredValue");
      })(s || (s = {}));
    },
    519: (e, t, i) => {
      "use strict";
      i(23090);
    },
    3087: (e, t, i) => {
      "use strict";
      i(23090), i(38652);
    },
    23090: (e, t, i) => {
      "use strict";
      i(76619), i(44898);
    },
    99946: (e, t, i) => {
      "use strict";
      i(23090), i(92976);
    },
    38652: (e, t, i) => {
      "use strict";
      i(23090);
    },
    44898: (e, t, i) => {
      "use strict";
      i(76619);
    },
    31066: (e, t, i) => {
      "use strict";
      function s(e, t) {
        if (e.nodeType === Node.TEXT_NODE || 0 === e.childNodes.length)
          return (e.textContent = t);
        for (const i of e.childNodes) {
          if (i.nodeType === Node.TEXT_NODE) return (i.textContent = t);
          s(i, t);
        }
      }
      function a(e) {
        return new DOMParser().parseFromString(e || "", "text/html");
      }
      i.d(t, { T: () => s, _: () => a });
    },
    93311: (e, t, i) => {
      "use strict";
      function s(e) {
        return null == e || /^\s*$/.test(e);
      }
      function a(...e) {
        return (function (e) {
          let t = null;
          if (e.length) for (let i = 0; i < e.length; i++) s(t) && (t = e[i]);
          return t;
        })(e);
      }
      i.d(t, { hr: () => s, w5: () => a });
    },
    66229: (e, t, i) => {
      "use strict";
      i(23090), i(60552);
    },
    73741: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      var s = i(81217);
      const a = {
          components: { Promised: i(57564).o, LoadingWheel: s.Z },
          data: () => ({ fade: !1, display: !1 }),
          props: ["promise"],
          watch: {
            promise(e) {
              (this.fade = !1),
                (this.display = !0),
                null != e &&
                  e
                    .then((e) => {
                      this.$nextTick(() => {
                        setTimeout(() => {
                          (this.fade = !0),
                            setTimeout(() => {
                              this.display = !1;
                            }, 500);
                        }, 1500);
                      });
                    })
                    .catch(() => {});
            },
          },
        },
        n = (0, i(83262).Z)(
          a,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("Promised", {
              attrs: { promise: e.promise },
              scopedSlots: e._u(
                [
                  {
                    key: "pending",
                    fn: function () {
                      return [
                        e._t("pending", function () {
                          return [
                            i("LoadingWheel", {
                              staticStyle: { display: "inline-block" },
                              attrs: { width: 16 },
                            }),
                          ];
                        }),
                      ];
                    },
                    proxy: !0,
                  },
                  {
                    key: "rejected",
                    fn: function (t) {
                      return [
                        e._t(
                          "rejected",
                          function () {
                            return [
                              i("span", {
                                staticClass: "icon icon-attention",
                                staticStyle: { color: "red" },
                              }),
                              i("span", { staticClass: "sr-only" }, [
                                e._v("FAILED"),
                              ]),
                            ];
                          },
                          { error: t }
                        ),
                      ];
                    },
                  },
                  {
                    key: "default",
                    fn: function (t) {
                      return [
                        e._t(
                          "default",
                          function () {
                            return [
                              i("span", {
                                staticClass: "icon icon-check fadeOut",
                                class: {
                                  fadeOutEnd: e.fade,
                                  fadeOutHide: !e.display,
                                },
                              }),
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Done"),
                              ]),
                            ];
                          },
                          { data: t }
                        ),
                      ];
                    },
                  },
                ],
                null,
                !0
              ),
            });
          },
          [],
          !1,
          null,
          "69cae23a",
          null
        ).exports;
    },
    36161: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => r });
      var s = i(93311),
        a = i(61320),
        n = i.n(a);
      const l = {
          inheritAttrs: !1,
          props: {
            value: { type: String, required: !1 },
            ariaLabelledBy: { type: String, required: !1 },
            ariaRequired: { type: Boolean, required: !1 },
            vmId: { type: String, required: !1 },
            defaultValue: { type: String, required: !1 },
            placeholder: { type: String, required: !1 },
            config: {
              type: Object,
              required: !1,
              default: () => ({
                allowInput: !0,
                altInput: !0,
                dateFormat: "m-d-Y",
                altFormat: "m-d-Y",
                disableMobile: !0,
                defaultDate: "",
                onOpen: () => {},
                onClose: () => {},
              }),
            },
          },
          data: () => ({ tempValue: "", altInputValue: "" }),
          mounted() {
            void 0 !== this.flatPickr &&
              (this.$emit("created-input", {
                inputElement: this.flatPickr._input,
              }),
              this.flatPickr._input.addEventListener(
                "blur",
                () => {
                  this.setDate(), this.emitValue();
                },
                !0
              ),
              this.flatPickr._input.addEventListener("input", (e) =>
                this.setAltInputValue(e)
              ),
              this.flatPickr.daysContainer.addEventListener(
                "keydown",
                this.calendarKeydownHandler
              ),
              this.flatPickr._input.setAttribute(
                "aria-labelledby",
                this.ariaLabelledBy
              ),
              this.flatPickr._input.setAttribute(
                "aria-required",
                this.ariaRequired
              ),
              this.flatPickr.calendarContainer.setAttribute("role", "dialog"),
              this.flatPickr.calendarContainer.setAttribute(
                "aria-modal",
                "true"
              ),
              this.flatPickr.calendarContainer.setAttribute(
                "aria-label",
                "Choose Date"
              ),
              this.flatPickr.calendarContainer.setAttribute(
                "aria-description",
                "Cursor keys can navigate dates"
              ),
              this.$attrs.id &&
                (this.flatPickr._input.setAttribute("id", this.$attrs.id),
                this.$el.removeAttribute("id")),
              this.setPlaceholder());
          },
          watch: {
            placeholder() {
              this.setPlaceholder();
            },
            defaultValue() {
              this.setPlaceholder();
            },
            tempValue(e) {
              this.value != e && this.$emit("input", e);
            },
            value(e) {
              this.tempValue != e && (this.tempValue = e);
            },
            altInputValue() {
              this.setDate();
            },
          },
          computed: {
            effectiveConfig() {
              return {
                ...this.config,
                wrap: !0,
                clickOpens: !1,
                defaultDate: (0, s.w5)(
                  this.getValue(),
                  this.defaultValue,
                  this.config.defaultDate
                ),
                onOpen: (e, t, i) => {
                  this.config.onOpen && this.config.onOpen(),
                    i.jumpToDate(t || void 0),
                    this.$refs.datepickerToggle.setAttribute(
                      "aria-expanded",
                      "true"
                    );
                },
                onClose: (e, t, i) => {
                  (this.altInputValue = t),
                    this.$refs.datepickerToggle.setAttribute(
                      "aria-expanded",
                      "false"
                    ),
                    this.$refs.datepickerToggle.focus(),
                    this.config.onClose && this.config.onClose();
                },
              };
            },
            flatPickr() {
              return this.$refs["flat-pickr"]
                ? this.$refs["flat-pickr"].fp
                : null;
            },
          },
          methods: {
            getValue() {
              return void 0 !== this.value
                ? this.value
                : void 0 !== this.vmId
                ? this.$store.getters["page/getValueByVmId"](this.vmId)
                : void 0;
            },
            setPlaceholder() {
              const e = (0, s.w5)(this.defaultValue, this.placeholder, null);
              null != e
                ? this.flatPickr._input.setAttribute("placeholder", e)
                : this.flatPickr._input.removeAttribute("placeholder"),
                (0, s.hr)(this.defaultValue)
                  ? this.flatPickr._input.classList.remove("dfDefaultValue")
                  : this.flatPickr._input.classList.add("dfDefaultValue");
            },
            emitValue() {
              this.$listeners["html-input"]
                ? this.$emit("html-input", { target: this.flatPickr._input })
                : this.$emit("input", this.flatPickr._input.value);
            },
            setAltInputValue(e) {
              (this.altInputValue = e.target.value),
                this.altInputValue.length || this.flatPickr.clear();
            },
            setDate() {
              10 === this.altInputValue.length &&
                void 0 !== this.flatPickr.parseDate(this.altInputValue) &&
                this.flatPickr.setDate(this.altInputValue);
            },
            async openDatepicker() {
              this.flatPickr.isOpen
                ? this.flatPickr.close()
                : await this.flatPickr.open();
              const e =
                this.flatPickr.calendarContainer.querySelector(
                  ".flatpickr-day.selected"
                ) ||
                this.flatPickr.calendarContainer.querySelector(
                  ".flatpickr-day.today"
                );
              e?.classList.contains("selected") &&
                e.setAttribute("aria-description", "selected"),
                e.focus();
            },
            async calendarKeydownHandler(e) {
              [
                "Backspace",
                "Tab",
                "Enter",
                "Escape",
                " ",
                "PageUp",
                "PageDown",
                "End",
                "Home",
                "ArrowLeft",
                "ArrowUp",
                "ArrowRight",
                "ArrowDown",
                "Delete",
              ].includes(e.key) &&
                (e.preventDefault(), e.stopImmediatePropagation());
              const t = n()({
                year: this.flatPickr.currentYear,
                month: this.flatPickr.currentMonth,
                day: parseInt(document.activeElement.textContent),
              });
              let i;
              switch (e.key) {
                case "Escape":
                case "Tab":
                  this.flatPickr.close();
                  break;
                case "Backspace":
                case "Delete":
                  this.flatPickr.clear(),
                    await new Promise((e) => setTimeout(e, 0)),
                    this.flatPickr.todayDateElem.focus();
                  break;
                case "Enter":
                case " ":
                  this.flatPickr.setDate(
                    new Date(
                      this.flatPickr.currentYear,
                      this.flatPickr.currentMonth,
                      parseInt(document.activeElement.textContent)
                    )
                  ),
                    "Enter" == e.key
                      ? (this.flatPickr._input.focus(), this.flatPickr.close())
                      : (this.flatPickr.selectedDateElem.setAttribute(
                          "aria-description",
                          "selected"
                        ),
                        this.flatPickr.selectedDateElem.focus());
                  break;
                case "PageUp":
                case "PageDown": {
                  const s = "PageUp" == e.key;
                  (i = this.flatPickr.formatDate(
                    t[s ? "subtract" : "add"](
                      1,
                      e.shiftKey ? "years" : "months"
                    ).toDate(),
                    this.flatPickr.config.ariaDateFormat
                  )),
                    this.flatPickr[e.shiftKey ? "changeYear" : "changeMonth"](
                      (e.shiftKey ? this.flatPickr.currentYear : 0) +
                        (s ? -1 : 1)
                    ),
                    this.flatPickr.calendarContainer
                      .querySelector(`.flatpickr-day[aria-label="${i}"]`)
                      .focus();
                  break;
                }
                case "Home":
                case "End": {
                  const s = "Home" == e.key;
                  (i = this.flatPickr.formatDate(
                    t[s ? "startOf" : "endOf"]("week").toDate(),
                    this.flatPickr.config.ariaDateFormat
                  )),
                    this.flatPickr.calendarContainer
                      .querySelector(`.flatpickr-day[aria-label="${i}"]`)
                      .focus();
                  break;
                }
                case "ArrowLeft":
                case "ArrowRight": {
                  const s = t["ArrowLeft" == e.key ? "subtract" : "add"](
                    1,
                    "days"
                  ).toDate();
                  (i = this.flatPickr.formatDate(
                    s,
                    this.flatPickr.config.ariaDateFormat
                  )),
                    this.flatPickr.jumpToDate(s),
                    this.flatPickr.calendarContainer
                      .querySelector(`.flatpickr-day[aria-label="${i}"]`)
                      .focus();
                  break;
                }
                case "ArrowUp":
                case "ArrowDown": {
                  const s = t["ArrowUp" == e.key ? "subtract" : "add"](
                    1,
                    "weeks"
                  ).toDate();
                  (i = this.flatPickr.formatDate(
                    s,
                    this.flatPickr.config.ariaDateFormat
                  )),
                    this.flatPickr.jumpToDate(s),
                    this.flatPickr.calendarContainer
                      .querySelector(`.flatpickr-day[aria-label="${i}"]`)
                      .focus();
                  break;
                }
              }
            },
          },
        },
        r = (0, i(83262).Z)(
          l,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "input-group" },
              [
                i(
                  "flat-pickr",
                  e._g(
                    e._b(
                      {
                        ref: "flat-pickr",
                        attrs: {
                          value: e.tempValue,
                          config: e.effectiveConfig,
                        },
                        on: { "on-close": e.emitValue, change: e.emitValue },
                      },
                      "flat-pickr",
                      e.$attrs,
                      !1
                    ),
                    e.$listeners
                  )
                ),
                e._v(" "),
                i("div", { staticClass: "input-group-append" }, [
                  i("button", {
                    ref: "datepickerToggle",
                    staticClass: "input-group-text icon icon-lg-calendar",
                    attrs: {
                      type: "button",
                      "aria-label": "Open datepicker",
                      "aria-expanded": "false",
                    },
                    on: { click: e.openDatepicker },
                  }),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "05969693",
          null
        ).exports;
    },
    47138: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => l });
      var s = i(57564),
        a = i(81217);
      const n = {
          components: { Promised: s.o, LoadingWheel: a.Z },
          props: ["promise"],
        },
        l = (0, i(83262).Z)(
          n,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("Promised", {
              attrs: { promise: e.promise },
              scopedSlots: e._u(
                [
                  {
                    key: "pending",
                    fn: function (t) {
                      return [
                        e._t(
                          "pending",
                          function () {
                            return [
                              i("LoadingWheel", {
                                staticClass: "col-12",
                                attrs: { width: 100 },
                              }),
                            ];
                          },
                          { pending: t }
                        ),
                      ];
                    },
                  },
                  {
                    key: "rejected",
                    fn: function (t) {
                      return [
                        e._t(
                          "rejected",
                          function () {
                            return [i("h1", [e._v("An error occurred")])];
                          },
                          { rejected: t }
                        ),
                      ];
                    },
                  },
                  {
                    key: "default",
                    fn: function (t) {
                      return [
                        e._t(
                          "default",
                          function () {
                            return [
                              i("span", {
                                staticStyle: { display: "none !important" },
                              }),
                            ];
                          },
                          null,
                          t
                        ),
                      ];
                    },
                  },
                ],
                null,
                !0
              ),
            });
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
    },
    57484: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => $s });
      var s = i(2230),
        a = i(77382),
        n = i(50734);
      let l;
      !(function (e) {
        (e[(e.Inherit = 0)] = "Inherit"),
          (e[(e.Blank = 1)] = "Blank"),
          (e[(e.DefaultValue = 2)] = "DefaultValue"),
          (e[(e.EnteredValue = 3)] = "EnteredValue");
      })(l || (l = {}));
      var r = i(65485),
        o = i(90010),
        u = i(18816),
        c = i(29548),
        d = i(3184),
        m = i(23741),
        h = i(80598),
        f = i(65333),
        p = i(83457),
        g = i(85335),
        v = i(39296),
        b = i(93311);
      let y = null;
      class C {
        constructor(e, t, i, s) {
          (this.parentElement = e),
            (this.id = i.id),
            (this.typeName = i.fullType),
            (this.definition = i),
            (this.comments = null == t ? [] : t.comments || []),
            (this.history = null == t ? [] : t.history || []),
            (this.calculationContext = s),
            null == e && null == s.rootElement && (s.rootElement = this),
            (this.dependenciesIndex = []),
            (this.dependencies = []),
            (this.foreachCounts = {});
          const a = /[.]([^.]*)Def,/.exec(this.definition.fullType);
          if (null == a) throw new Error(JSON.stringify(this.definition));
          (this.typeName = "MI.Common.DynamicForms.Models.DF" + a[1]),
            (this.stub = null),
            (this.fixedCalculationResults = {}),
            (this.fixedCalculationResults$ = new o.X({})),
            this.setData(t, !0),
            (this.children = []),
            (this._children$ = new o.X([])),
            (this._edited$ = new o.X(!1)),
            this.initChildren(t),
            (this.changes = []),
            (this.baseLink = void 0),
            (this.isBase = void 0),
            (this.isFocusable = void 0);
        }
        setKey(e, t, i, s) {
          (i = i || t),
            null == s && null != e && (s = e[t]),
            (this[i] = s),
            null == this[i + "$"]
              ? (this[i + "$"] = new o.X(this[i]))
              : s != this[i + "$"].getValue() && this[i + "$"].next(this[i]);
        }
        initChildren(e) {
          (this.children = (this.definition.children || []).map((t, i) =>
            qe(
              this,
              e
                ? e.children && e.children.length > i
                  ? e.children[i]
                  : {}
                : null,
              t,
              this.calculationContext
            )
          )),
            this._children$.next(this.children);
        }
        resolveCalculation(e, t, s) {
          if (null == e && null == t) return (0, u.D)([[]]);
          null == y && (y = Promise.resolve().then(i.bind(i, 75009)));
          const a = this.definition.settings.calculations[e] || t;
          if (null == a) return (0, u.D)([[]]);
          const n = y.then((e) => e.resolveCalculation(a, this, s));
          return (0, c.a)([(0, u.D)(n), this.fixedCalculationResults$]).pipe(
            (0, m.w)((t) => {
              let [i, s] = t;
              return null != s && e in s ? (0, u.D)([s[e]]) : i();
            })
          );
        }
        async invokeAsync(e, t, i) {
          const s = this.getRoot(),
            a = await this.calculationContext.urlFetcher("invokeDraft", {
              formId: s.formId,
            });
          let n = {
            formName: s.formName,
            formVersion: s.formVersion,
            formHash: s.formHash,
            segment: null,
            skipForm: !0,
            noWrite: !0,
            asAdmin: this.calculationContext.adminReview || !1,
            inPreview: this.calculationContext.adminPreview || !1,
            testMode: this.calculationContext.testMode || !1,
            target: this.id,
            targetPathArray: this.getElementPathIndexFromRoot(),
            type: e,
            data: t,
          };
          null != i && (n = i(n));
          const l = await this.calculationContext.fetchXrsf(a, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            }),
            r = await l.json();
          return JSON.parse(r.Result);
        }
        resolveCalculationPromiseBool(e, t, i) {
          const s = this.resolveCalculation(e, t, i);
          return (0, c.a)([s, y])
            .pipe(
              (0, h.U)((e) => {
                let [t, i] = e;
                return t.reduce((e, t) => e || 1 === i.parseBool(t), !1);
              }),
              (0, f.P)()
            )
            .toPromise();
        }
        resolveCalculationPromise(e, t, i) {
          return this.resolveCalculation(e, t, i)
            .pipe((0, f.P)())
            .toPromise();
        }
        getVirtualContext$() {
          return null != this.parentElement
            ? this.parentElement.getVirtualContext$()
            : (0, u.D)([[]]);
        }
        getCalculation(e, t) {
          throw new Error();
        }
        effectiveExtraData$(e, t) {
          return t();
        }
        visible$() {
          return null != this.parentElement
            ? this.parentElement.visible$()
            : (0, u.D)([!0]);
        }
        effectiveHiddenValueMode() {
          return (this.definition.settings.hiddenValueMode ?? l.Inherit) ==
            l.Inherit
            ? null != this.parentElement
              ? this.parentElement.effectiveHiddenValueMode()
              : l.Blank
            : this.definition.settings.hiddenValueMode;
        }
        setData(e, t) {
          (this.vmId = this.vmId || (0, n.Z)()),
            (this.stub = null == e),
            null != e &&
              ((this.comments = e.comments),
              (this.history = e.history),
              (this.fixedCalculationResults = e.fixedCalculationResults),
              this.fixedCalculationResults$.next(this.fixedCalculationResults)),
            t ||
              this.children.forEach((t, i) => {
                (null == e || (e.children && e.children.length > i)) &&
                  t.setData(null == e ? null : e.children[i]);
              });
        }
        getData(e) {
          if (this.stub) return null;
          var t = this.valid$();
          return {
            id: this.id,
            typeName: this.typeName,
            children: e ? null : this.children.map((e) => e.getData()),
            valid: null == t || null == t.getValue || t.getValue(),
          };
        }
        getCustomPageNav() {
          return this.children
            .filter((e) => null != e)
            .reduce((e, t) => e.concat(t.getCustomPageNav()), []);
        }
        hasCustomPageNav() {
          return this.getCustomPageNav().length > 0;
        }
        getLabel() {
          return (
            this.definition.settings.shortLabel ||
            this.definition.settings.label ||
            this.definition.settings.displayLabel ||
            this.definition.settings.adminDisplayLabel
          );
        }
        getElementByVmId(e) {
          if (this.vmId == e) return this;
          let t = null;
          return (
            this.children
              .filter((e) => null != e)
              .some((i) => ((t = i.getElementByVmId(e)), null != t)),
            t
          );
        }
        getElementPathByVmId(e) {
          if (this.vmId == e) return [this];
          let t = null;
          return (
            this.children
              .filter((e) => null != e)
              .some((i) => ((t = i.getElementPathByVmId(e)), null != t)),
            null == t ? null : [this].concat(t)
          );
        }
        getElementPathIndexFromRoot() {
          const e = [];
          let t = this;
          for (; null != t.parentElement; )
            e.push(t.parentElement.children.indexOf(t)), (t = t.parentElement);
          return e.reverse(), e;
        }
        getElementsByFilter(e) {
          const t = [];
          return this._getElementsByFilter(e, t), t;
        }
        _getElementsByFilter(e, t) {
          e.apply(this, [this]) && t.push(this),
            this.children
              .filter((e) => null != e)
              .forEach((i) => i._getElementsByFilter(e, t));
        }
        getElementsById$(e, t) {
          var i = this._getElementsById$(e, t);
          if (0 == i.length) return (0, u.D)([[]]);
          var s = i.filter((e) => e.pipe),
            a = i.filter((e) => !e.pipe);
          return (
            a.length > 0 && s.push((0, u.D)([a])),
            0 == s.length
              ? (0, u.D)([[]])
              : 1 == s.length
              ? s[0]
              : (0, c.a)(s).pipe((0, h.U)((e) => V(e)))
          );
        }
        getSegmentView(e, t) {
          return null == e ? this : new E(this, e, t);
        }
        getValuesById$(e, t) {
          return this.getElementsById$(e, t).pipe(
            (0, m.w)((e) =>
              (0, c.a)(e.map((e) => e.effectiveValueList$())).pipe(
                (0, h.U)((e) => V(e))
              )
            )
          );
        }
        _getElementsById$(e, t) {
          return this.id == e
            ? [this]
            : 0 == this.children.filter((e) => null != e).length
            ? []
            : V(
                this.children
                  .filter((e) => null != e)
                  .map((i) => i._getElementsById$(e, t))
              );
        }
        valid$(e, t) {
          if (
            ((e = !!e),
            (t = !!t),
            null == this._baseElementValid$ &&
              (this._baseElementValid$ = {
                true: { true: void 0, false: void 0 },
                false: { true: void 0, false: void 0 },
              }),
            null == this._baseElementValid$[e][t])
          )
            if (t) this._baseElementValid$[e][t] = (0, u.D)([!0]);
            else {
              var i = this._children$.pipe(
                (0, m.w)((i) =>
                  0 == i.filter((e) => null != e).length
                    ? (0, u.D)([[]])
                    : (0, c.a)(
                        i
                          .filter((e) => null != e)
                          .map((i) =>
                            (0, c.a)(
                              i.valid$(e, t),
                              this._validateChild$(i)
                            ).pipe(
                              (0, h.U)((e) => {
                                let [t, i] = e;
                                return !i || t;
                              })
                            )
                          )
                      )
                ),
                (0, h.U)((e) => e.every((e) => e))
              );
              this._baseElementValid$[e][t] = i.pipe(
                (0, p.B)({
                  resetOnRefCountZero: !0,
                  connector: () => new d.t(1),
                })
              );
            }
          return this._baseElementValid$[e][t];
        }
        errors$() {
          return (0, u.D)([[]]);
        }
        async firstInvalidElement(e) {
          if (
            !(await this.valid$(e, !0)
              .pipe((0, f.P)())
              .toPromise()) &&
            this.isFocusable
          )
            return this;
          for (const e of this.children) {
            var t = await e.firstInvalidElement();
            if (null != t) return t;
          }
          return null;
        }
        firstFocusableElement() {
          if (this.isFocusable) return this;
          for (const t of this.children) {
            var e = t.firstFocusableElement();
            if (null != e) return e;
          }
          return null;
        }
        edited$() {
          return this._edited$;
        }
        markEdited() {
          this._edited$.next(!0);
        }
        _validateChild$(e) {
          return null != this.parentElement
            ? this.parentElement._validateChild$(this)
            : (0, u.D)([!0]);
        }
        _validateUneditedChild$(e) {
          return null != this.parentElement
            ? this.parentElement._validateUneditedChild$(this)
            : (0, u.D)([!0]);
        }
        _validateUnedited$() {
          return null != this.parentElement
            ? this.parentElement._validateUneditedChild$(this)
            : (0, u.D)([!0]);
        }
        getRoot() {
          return null != this.parentElement
            ? this.parentElement.getRoot()
            : this;
        }
        markElementAsBase() {
          (this.isBase = !0),
            this.children
              .filter((e) => null != e)
              .forEach((e) => {
                e.markElementAsBase();
              });
        }
        linkBaseElement(e) {
          null != e &&
            (("FormDef" == this.definition.type &&
              "FormDef" == e.definition.type) ||
              ("FormTemplateDef" == this.definition.type &&
                "FormTemplateDef" == e.definition.type) ||
              (null != this.id && this.id == e.id)) &&
            ((e.vmId = this.vmId),
            (e.baseLink = this),
            (this.baseLink = e),
            (this.baseChanges = this.diffBaseElement())),
            (this.isBase = !1),
            this.children
              .filter((e) => null != e)
              .forEach((t) => {
                const i =
                  null == e
                    ? []
                    : e.children
                        .filter((e) => null != e)
                        .filter(
                          (e) =>
                            ("FormTemplateDef" == t.definition.type &&
                              "FormTemplateDef" == e.definition.type) ||
                            (null != e.id && e.id == t.id)
                        );
                t.linkBaseElement(i.length > 0 ? i[0] : null);
              }),
            null != e &&
              ((e.isBase = !0),
              e.children
                .filter((e) => null != e)
                .filter(
                  (e) =>
                    !this.children
                      .filter((e) => null != e)
                      .some((t) => t.id == e.id)
                )
                .forEach((e) => {
                  e.markElementAsBase();
                }));
        }
        baseChangeType() {
          return null == this.baseLink
            ? this.isBase
              ? "deleted"
              : "new"
            : null != this.baseChanges && this.baseChanges.length > 0
            ? "changed"
            : null;
        }
        baseChangeRecursive() {
          let e = this.baseChangeType();
          return (
            null == e &&
              (this.children.length != this.baseLink.children.length ||
                this.children.some((e) => null != e.baseChangeRecursive()) ||
                this.baseLink.children.some(
                  (e) => null != e.baseChangeType()
                )) &&
              (e = "changed"),
            e
          );
        }
        diffBaseElement() {
          if (null == this.baseLink) return [];
          const e = [];
          return (
            (function t(i, s, a) {
              function n(i, s, a) {
                if (Array.isArray(null == s ? a : s)) {
                  (a = a || []),
                    (s = s || []).length !== a.length &&
                      e.push({
                        key: i + ".length",
                        baseSetting: s.length,
                        currentSetting: a.length,
                      });
                  for (var n = 0; n < Math.max(s.length, a.length); n++)
                    t(i + "[" + n + "]", s[n], a[n]);
                } else
                  "object" == (null == s ? typeof a : typeof s)
                    ? t(i, s, a)
                    : JSON.stringify(s) !== JSON.stringify(a) &&
                      e.push({ key: i, baseSetting: s, currentSetting: a });
              }
              "object" == (null == s ? typeof a : typeof s)
                ? (0, r.Z)(
                    Object.keys(s || {}).concat(Object.keys(a || {}))
                  ).forEach((e) => {
                    n(
                      null == i ? e : null != e ? i + "." + e : i,
                      s ? s[e] : null,
                      a ? a[e] : null
                    );
                  })
                : n(i, s, a);
            })(
              null,
              this.baseLink.definition.settings,
              this.definition.settings
            ),
            e
          );
        }
      }
      function w(e) {
        return null == e || 0 == e.length
          ? []
          : e.match(/(\\.|[^\\\\`])+/g).map(function (e) {
              return e.replace(/\\`/g, "`").replace(/\\\\/g, "\\");
            });
      }
      function _(e) {
        return e.map(function (e) {
          return x(e);
        });
      }
      function x(e) {
        return e && e.toUpperCase ? e.toUpperCase().trim() : e;
      }
      function S(e, t, i, s) {
        return function (a) {
          if (i)
            if (e(a, i)) {
              if (!t) return !0;
            } else if (t) return !1;
          var n = t;
          return (
            s.some(function (i) {
              return (n = e(a, i)), t ? !n : n;
            }),
            n
          );
        };
      }
      function D(e, t) {
        return function (i, s, a) {
          if (0 == i.length) return t;
          var n = function (e) {
              return null == e ? "" : e;
            },
            l = S(
              function (t, i) {
                return e(n(t), n(i));
              },
              t,
              s,
              a
            ),
            r = t;
          return (
            i.some(function (e) {
              return (r = l(e)), t ? !r : r;
            }),
            r
          );
        };
      }
      function P(e) {
        return function (t, i, s) {
          var a = S(e, !0, i, s),
            n = !0;
          return (
            t.forEach(function (e) {
              var t = parseFloat(e);
              return isNaN(t)
                ? ((n = "dependency-mismatch"), !1)
                : (n = n && a(t));
            }),
            n
          );
        };
      }
      function I(e, t, i, s) {
        return (
          "Equals" == s
            ? D(function (e, t) {
                return e == t;
              }, !1)
            : "NotEquals" == s
            ? D(function (e, t) {
                return e != t;
              }, !0)
            : "LessThan" == s
            ? P(function (e, t) {
                return e < t;
              })
            : "LessThanOrEqualTo" == s
            ? P(function (e, t) {
                return e <= t;
              })
            : "GreaterThan" == s
            ? P(function (e, t) {
                return e > t;
              })
            : "GreaterThanOrEqualTo" == s
            ? P(function (e, t) {
                return e >= t;
              })
            : null
        )(e, t, i);
      }
      function k(e) {
        return null != e && e.some((e) => null != e && !/^\s*$/.test(e));
      }
      function $(e, t, i) {
        const s = e[i],
          a = _(w(e[`${i}-matches`])),
          n = w(e[`${i}-matchlabels`]),
          l = t.filter((e) => a.some((t) => t == x(e), a)),
          r = a.indexOf(x(l[0]));
        return s.replace("{0}", n[r]);
      }
      function V(e) {
        return Array.prototype.concat.apply([], e);
      }
      class E extends C {
        constructor(e, t, i) {
          super(
            e.parentElement,
            {
              comments: e.comments,
              history: e.history,
              segment: t,
              triggerKey: i,
              children: e.children,
            },
            e.definition,
            e.calculationContext
          ),
            (this.wrapped = e),
            (this.segment = t),
            (this.triggerKey = i);
        }
        initChildren(e) {
          (this.children = e.children
            .filter((e) => null != e)
            .filter((t) =>
              "PageDef" == t.definition.type ||
              "CaptchaControlDef" == t.definition.type
                ? t.definition.settings.segment == e.segment
                : "StateFormDef" == t.definition.type
                ? t.id == e.segment
                : "SubmitTriggerDef" == t.definition.type
                ? null == e.triggerKey ||
                  t.definition.settings.triggerKey == e.triggerKey
                : "FormReminderDef" != t.definition.type &&
                  "FormExpireDef" != t.definition.type
            )
            .map((t) => new E(t, e.segment, e.triggerKey))),
            this._children$.next(this.children);
        }
        _getElementsByFilter(e, t) {
          "WorkflowSwitchDef" != this.wrapped.definition.type
            ? (e.apply(this.wrapped, [this.wrapped]) && t.push(this.wrapped),
              this.children
                .filter((e) => null != e)
                .forEach((i) => i._getElementsByFilter(e, t)))
            : this.wrapped._getElementsByFilter(e, t);
        }
        getElementByVmId(e) {
          if ("WorkflowSwitchDef" == this.wrapped.definition.type)
            return this.wrapped.getElementByVmId(e);
          if (this.wrapped.vmId == e) return this.wrapped;
          let t = null;
          return (
            this.children
              .filter((e) => null != e)
              .some((i) => ((t = i.getElementByVmId(e)), null != t)),
            t
          );
        }
        _getElementsById$(e, t) {
          return "WorkflowSwitchDef" == this.wrapped.definition.type
            ? this.wrapped._getElementsById$(e, t)
            : this.wrapped.id == e
            ? [this.wrapped]
            : 0 == this.children.filter((e) => null != e).length
            ? []
            : V(
                this.children
                  .filter((e) => null != e)
                  .map((i) => i._getElementsById$(e, t))
              );
        }
      }
      class T extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this._value =
              null == t ? this.getValueFromDependencies() : t.value),
            (this._value$ = this._value$ || new o.X(this._value)),
            (this._hasValue =
              null == t || 0 == Object.keys(t).length
                ? null != this.getValueFromDependencies()
                : t.hasValue),
            (this._hasValue$ = this._hasValue$ || new o.X(this._hasValue)),
            (this.clientValidateRules$ =
              this.clientValidateRules$ ||
              new o.X(this.clientValidateRules || [])),
            (this.autoEdit = !0);
        }
        setData(e, t) {
          super.setData(e, t),
            this.setKey(e, "value", "_value"),
            this.setKey(e, "hasValue", "_hasValue"),
            this.setKey(e, "clientValidateRules");
        }
        getValueFromDependencies() {
          const e = this.calculationContext.rootElement?.dependenciesIndex,
            t = null == e || 0 == e.length ? 0 : e[0],
            i = this.calculationContext.rootElement?.dependencies ?? {};
          return this.id in i ? i[this.id][t] : null;
        }
        setKey(e, t, i, s) {
          null == s &&
            null == e &&
            "value" == t &&
            (s = this.getValueFromDependencies()),
            null == s &&
              null == e &&
              "hasValue" == t &&
              (s = null != this.getValueFromDependencies()),
            super.setKey(e, t, i, s);
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              ((t.value = null == this._value ? "" : this._value),
              (t.valueSet = this._hasValue)),
            t
          );
        }
        valid$(e, t) {
          if (
            ((e = !!e),
            (t = !!t),
            null == this._baseControlValid$ &&
              (this._baseControlValid$ = {
                true: { true: void 0, false: void 0 },
                false: { true: void 0, false: void 0 },
              }),
            null == this._baseControlValid$[e][t])
          ) {
            var i = super.valid$(e, t),
              s = this.errors$().pipe((0, h.U)((e) => 0 == e.length));
            const a = (0, c.a)(
              i,
              this.edited$(),
              this._validateUnedited$(),
              s
            ).pipe(
              (0, h.U)((t) => {
                let [i, s, a, n] = t;
                return i && (!(s || e || a) || n);
              })
            );
            this._baseControlValid$[e][t] = a.pipe(
              (0, p.B)({ resetOnRefCountZero: !0, connector: () => new d.t(1) })
            );
          }
          return this._baseControlValid$[e][t];
        }
        effectiveLabel$() {
          return (
            null == this._effectiveLabel$ &&
              (this.definition.settings.labelCalculationId
                ? (this._effectiveLabel$ = this.resolveCalculation(
                    this.definition.settings.labelCalculationId
                  ).pipe(
                    (0, h.U)((e) => (e.length ? e[0] : null)),
                    (0, p.B)({
                      resetOnRefCountZero: !0,
                      connector: () => new o.X(null),
                    })
                  ))
                : (this._effectiveLabel$ = (0, u.D)([
                    this.definition.settings.label,
                  ]))),
            this._effectiveLabel$
          );
        }
        effectiveShortLabel$() {
          return this.definition.settings.shortLabel
            ? (0, u.D)([this.definition.settings.shortLabel])
            : this.effectiveLabel$();
        }
        effectiveLabelText$() {
          return (0, c.a)(
            this.effectiveShortLabel$(),
            this.effectiveLabel$()
          ).pipe(
            (0, h.U)((e) => {
              let [t, i] = e;
              return (0, b.w5)(i, t, null);
            })
          );
        }
        setValue(e) {
          const t = this.autoEdit && this._value != e;
          (this._value = e),
            this._value$.getValue() != e && this._value$.next(e),
            (this._hasValue = !0),
            this._hasValue$.getValue() || this._hasValue$.next(!0),
            t && this.markEdited();
        }
        value() {
          return this._value;
        }
        value$() {
          return this._value$;
        }
        valueList$() {
          return this._value$.pipe(
            (0, h.U)((e) => (null == e ? [] : Array.isArray(e) ? e : [e]))
          );
        }
        effectiveValue$() {
          throw new Error("NYI");
        }
        hasValue$() {
          return this._hasValue$;
        }
        defaultValue$() {
          if (this.definition.settings.defaultValueCalculationId)
            return this.resolveCalculation(
              this.definition.settings.defaultValueCalculationId
            ).pipe((0, h.U)((e) => e.filter((e) => !(0, b.hr)(e))));
          {
            const e = this.definition.settings.defaultValue;
            return (0, b.hr)(e) ? (0, u.D)([[]]) : (0, u.D)([[e]]);
          }
        }
        effectiveValueList$() {
          if (null == this._effectiveValueList$) {
            const e = [
              (0, h.U)((e) =>
                (null == e ? [] : Array.isArray(e) ? e : [e]).filter(
                  (e) => !(0, b.hr)(e)
                )
              ),
            ];
            e.push(
              (0, m.w)((e) =>
                (() =>
                  this._hasValue$.pipe(
                    (0, m.w)((t) => (t ? (0, u.D)([e]) : this.defaultValue$()))
                  ))()
              )
            );
            const t = this._value$,
              i = t.pipe.apply(t, e);
            this._effectiveValueList$ = i.pipe(
              (0, p.B)({ resetOnRefCountZero: !0, connector: () => new d.t(1) })
            );
          }
          return this._effectiveValueList$;
        }
        effectiveValueList() {
          return this.effectiveValueList$()
            .pipe((0, f.P)())
            .toPromise();
        }
        rules$() {
          return this.clientValidateRules$.pipe(
            (0, h.U)((e) =>
              Object.assign(
                {},
                null == e ? this.definition.clientValidateRules : e
              )
            )
          );
        }
        errors$() {
          if (null == this._baseControlErrors$) {
            const e = this.rules$().pipe(
              (0, m.w)((e) => {
                if (0 == Object.keys(e).length) return (0, u.D)([[]]);
                const t = this.effectiveValueList$(),
                  i = [],
                  s = Object.keys(e);
                function a(e) {
                  i.push(
                    t.pipe(
                      (0, h.U)(e),
                      (0, h.U)((e) => (null == e ? [] : e))
                    )
                  );
                }
                function n(e, s, a) {
                  const n = l.apply(this, [e, s]);
                  i.push(
                    (0, c.a)([n, t]).pipe(
                      (0, h.U)((e) => {
                        let [t, i] = e;
                        const [s, n] = t;
                        if (n) {
                          var l = a(i, s);
                          return null == l ? [] : l;
                        }
                        return [];
                      })
                    )
                  );
                }
                function l(e, t) {
                  const i = w(e[`${t}-matches`]);
                  return this.calculationContext.rootElement
                    .getValuesById$(e[`${t}-other`], this.vmId)
                    .pipe(
                      (0, h.U)((e) => [
                        e,
                        I(e, null, 0 == i.length ? [""] : i, "Equals"),
                      ])
                    );
                }
                for (let r = 0; r < s.length; r++) {
                  const o = s[r],
                    u = e[o];
                  switch (o) {
                    case "data-val-serveronlyerror":
                      a((t) => {
                        var i = w(e["data-val-serveronlyerror-values"]);
                        if (
                          I(t, null, 0 == i.length ? [""] : i, "Equals") ||
                          (0 == i.length && 0 == t.length)
                        )
                          return u;
                      });
                      break;
                    case "data-val-required":
                      a((e) => {
                        if (!k(e)) return u;
                      });
                      break;
                    case "data-val-requiredfile":
                      i.push(
                        this.hasValue$().pipe((0, h.U)((e) => (e ? [] : [u])))
                      );
                      break;
                    case "data-val-requiredifotherhasvalue":
                      n.apply(this, [
                        e,
                        o,
                        (t, i) => {
                          if (!k(t)) return $(e, i, o);
                        },
                      ]);
                      break;
                    case "data-val-requiredfileifotherhasvalue": {
                      const t = l.apply(this, [e, o]);
                      i.push(
                        (0, c.a)([t, this.hasValue$()]).pipe(
                          (0, h.U)((t) => {
                            let [i, s] = t;
                            const [a, n] = i;
                            return n && !s ? $(e, a, o) : [];
                          })
                        )
                      );
                      break;
                    }
                    case "data-val-requireexactcountifotherhasvalue": {
                      const s = w(e[`${o}-counts`]),
                        a = w(e[`${o}-others`]),
                        n = w(e[`${o}-matches`]),
                        l = (0, c.a)(
                          a.map((e) =>
                            this.calculationContext.rootElement.getValuesById$(
                              e,
                              this.vmId
                            )
                          )
                        ).pipe(
                          (0, h.U)((e) => {
                            for (let t = 0; t < n.length; t++)
                              for (let i = 0; i < e.length; i++)
                                if (I(e[i], null, [n[t]], "Equals"))
                                  return [!0, t];
                            return [!1, null];
                          })
                        );
                      i.push(
                        (0, c.a)([t, l]).pipe(
                          (0, h.U)((t) => {
                            let [i, a] = t;
                            const [n, l] = a,
                              r = parseInt(s[l]);
                            if (n && null != i && i.length != r) {
                              const t = e[o],
                                i = w(e[`${o}-matchlabels`]),
                                a = w(e[`${o}-otherlabels`]);
                              return [
                                t
                                  .replace("{0}", s[l])
                                  .replace("{1}", a[l])
                                  .replace("{2}", i[l]),
                              ];
                            }
                            return [];
                          })
                        )
                      );
                      break;
                    }
                    case "data-val-requireoneifotherhasvalue": {
                      const t = l.apply(this, [e, o]),
                        s = w(e["data-val-requireoneifotherhasvalue-elements"]),
                        a = (0, c.a)(
                          s.map((e) =>
                            this.calculationContext.rootElement.getValuesById$(
                              e,
                              this.vmId
                            )
                          )
                        ).pipe((0, h.U)(V));
                      i.push(
                        (0, c.a)(a, t).pipe(
                          (0, h.U)((t) => {
                            let [i, s] = t;
                            const [a, n] = s;
                            return n && k(i) ? [$(e, a, o)] : [];
                          })
                        )
                      );
                      break;
                    }
                    case "data-val-requireone": {
                      const t = w(e["data-val-requireone-elements"]),
                        s = (0, c.a)(
                          t.map((e) =>
                            this.calculationContext.rootElement.getValuesById$(
                              e,
                              this.vmId
                            )
                          )
                        ).pipe((0, h.U)(V));
                      i.push(s.pipe((0, h.U)((e) => (k(e) ? [u] : []))));
                      break;
                    }
                    case "data-val-requireexactcount":
                      a((t) => {
                        if (
                          null != t &&
                          t.length !=
                            parseInt(e["data-val-requireexactcount-count"])
                        )
                          return u;
                      });
                      break;
                    case "data-val-requiredvalueifotherhasvalue":
                      n.apply(this, [
                        e,
                        o,
                        (t, i) => {
                          var s =
                            e[
                              "data-val-requiredvalueifotherhasvalue-valuematchtype"
                            ];
                          if (
                            !I(
                              t,
                              e["data-val-requiredvalueifotherhasvalue-value"],
                              w(
                                e[
                                  "data-val-requiredvalueifotherhasvalue-valuelist"
                                ]
                              ),
                              s
                            )
                          )
                            return $(e, i, o);
                        },
                      ]);
                      break;
                    case "data-val-requiredvalue":
                      a((t) => {
                        if (
                          !I(
                            t,
                            e["data-val-requiredvalue-value"],
                            w(e["data-val-requiredvalue-valuelist"]),
                            e["data-val-requiredvalue-valuematchtype"]
                          )
                        )
                          return u;
                      });
                      break;
                    case "data-val-filesize":
                      i.push(
                        (0, c.a)(this.hasValue$(), this.fileSize$).pipe(
                          (0, h.U)((t) => {
                            let [i, s] = t;
                            return i &&
                              s > parseInt(e["data-val-filesize-size"])
                              ? [u]
                              : [];
                          })
                        )
                      );
                      break;
                    case "data-val-extension":
                      i.push(
                        (0, c.a)(this.hasValue$(), this.fileName$).pipe(
                          (0, h.U)((t) => {
                            let [i, s] = t;
                            if (i) {
                              const t = e["data-val-extension-extension"],
                                i = _(null == t ? [] : t.split(",")),
                                a = x(s);
                              if (!i.some((e) => a.endsWith("." + e)))
                                return [u];
                            }
                            return [];
                          })
                        )
                      );
                      break;
                    case "data-val-length":
                      a((t) => {
                        if (k(t)) {
                          const i = e["data-val-length-min"],
                            s = e["data-val-length-max"],
                            a = (t[0] + "").length;
                          if (a < i || a > s) return u;
                        }
                      });
                      break;
                    case "data-val-regex":
                      a((t) => {
                        if (k(t)) {
                          const i = e["data-val-regex-pattern"];
                          if (!new RegExp(i).test(t[0] + "")) return u;
                        }
                      });
                  }
                }
                return 0 == i.length
                  ? (0, u.D)([[]])
                  : (null == this.parentElement
                      ? (0, u.D)([!0])
                      : this.parentElement._validateChild$(this)
                    ).pipe(
                      (0, m.w)((e) =>
                        e
                          ? (0, c.a)(i).pipe((0, h.U)((e) => V(e)))
                          : (0, u.D)([[]])
                      )
                    );
              })
            );
            this._baseControlErrors$ = e.pipe((0, g.n)([]), (0, v.x)());
          }
          return this._baseControlErrors$;
        }
      }
      class F extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFAddress");
        }
        effectiveLabel$() {
          return (
            null == this._effectiveLabel$ &&
              (this.definition.settings.labelCalculationId
                ? ((this._effectiveLabel$ = new o.X(null)),
                  this.resolveCalculation(
                    this.definition.settings.labelCalculationId
                  )
                    .pipe((0, h.U)((e) => (e.length ? e[0] : null)))
                    .subscribe(this._effectiveLabel$))
                : (this._effectiveLabel$ = new o.X(
                    this.definition.settings.label
                  ))),
            this._effectiveLabel$
          );
        }
        effectiveShortLabel$() {
          return this.definition.settings.shortLabel
            ? (0, u.D)([this.definition.settings.shortLabel])
            : this.effectiveLabel$();
        }
        effectiveLabelText$() {
          return (0, c.a)(
            this.effectiveShortLabel$(),
            this.effectiveLabel$()
          ).pipe(
            (0, h.U)((e) => {
              let [t, i] = e;
              return (0, b.w5)(i, t, null);
            })
          );
        }
      }
      class L extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFCalculated");
        }
        effectiveValueList$() {
          return this.valueList$();
        }
        valueList$() {
          if (null == this._valueList$) {
            const e = this.resolveCalculation(
              this.definition.settings.calculationId
            );
            this._valueList$ = e.pipe(
              (0, p.B)({ resetOnRefCountZero: !0, connector: () => new d.t(1) })
            );
          }
          return this._valueList$;
        }
      }
      var A = i(84470);
      class R extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFValidation");
        }
        valid$() {
          return !this.definition.settings.serverSide ||
            this.calculationContext.adminPreview
            ? this.resolveCalculation(
                this.definition.settings.calculationId,
                this.definition.settings.legacyCalculation
              ).pipe(
                (0, h.U)((e) => e.reduce((e, t) => e || 1 === (0, A.Nx)(t), !1))
              )
            : super.valid$();
        }
        errors$() {
          return !this.definition.settings.serverSide ||
            this.calculationContext.adminPreview
            ? this.valid$().pipe(
                (0, h.U)((e) =>
                  e ? [] : [this.definition.settings.errorMessage]
                )
              )
            : super.errors$();
        }
      }
      let M, N, O;
      !(function (e) {
        (e[(e.Notification = 0)] = "Notification"),
          (e[(e.Return = 1)] = "Return"),
          (e[(e.Invite = 2)] = "Invite");
      })(M || (M = {})),
        i(66229),
        i(64987),
        i(23090),
        i(3087),
        i(38652),
        i(99946),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Stacked = 1)] = "Stacked"),
            (e[(e.Inline = 2)] = "Inline"),
            (e[(e.WithChildren = 3)] = "WithChildren");
        })(N || (N = {})),
        i(30058),
        i(92976),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.CheckBox = 1)] = "CheckBox"),
            (e[(e.Radio = 2)] = "Radio");
        })(O || (O = {}));
      class U extends T {
        constructor(e, t, i, s) {
          null != t && null == t.value && (t.value = []),
            super(e, t, i, s),
            (this._hasValue =
              null == t || null == t.value || 0 == t.value.length
                ? this.getValueFromDependencies().length > 0
                : t.hasValue),
            (this.typeName = "MI.Common.DynamicForms.Models.DFCheckGroup"),
            (this.isFocusable = !0);
        }
        getValueFromDependencies() {
          let e = super.getValueFromDependencies();
          return null == e && (e = []), e;
        }
        defaultValue$() {
          return (0, c.a)([super.defaultValue$(), this.effectiveItems$()]).pipe(
            (0, h.U)(([e, t]) => e.filter((e) => t.some((t) => t.value == e)))
          );
        }
        effectiveItems$() {
          const e = this.definition.settings.layout,
            t = [];
          let i = null;
          i = 3 != e ? this.definition.settings.items : this.children;
          for (let s = 0; s < i.length; s++) {
            const a = i[s];
            let n = null;
            n =
              "labelCalculationId" in a && a.labelCalculationId
                ? this.resolveCalculation(a.labelCalculationId)
                : 3 != e
                ? (0, u.D)([[a.label]])
                : (0, u.D)([[a.definition.settings.label]]);
            let l = null;
            (l =
              "valueCalculationId" in a && a.valueCalculationId
                ? this.resolveCalculation(a.valueCalculationId)
                : 3 != e
                ? (0, u.D)([[a.value]])
                : (0, u.D)([[a.definition.settings.value]])),
              t.push(
                (0, c.a)([n, l]).pipe(
                  (0, h.U)(([e, t]) =>
                    (e.length >= t.length
                      ? e.map((e, i) => ({ label: e, value: t[i] }))
                      : t.map((t, i) => ({ value: t, label: e[i] }))
                    ).map(({ label: e, value: t }) => ({
                      label: e,
                      value: null == t || /^\s*$/.test(t) ? e : t,
                    }))
                  )
                )
              );
          }
          return (0, c.a)(t).pipe((0, h.U)((e) => e.flat()));
        }
        _validateChild$(e) {
          return (0, c.a)([
            super._validateChild$(e),
            this.value$().pipe(
              (0, h.U)(
                (t) =>
                  null != t &&
                  t.indexOf(e.definition.settings.effectiveValue) >= 0
              )
            ),
          ]).pipe((0, h.U)(([e, t]) => e && t));
        }
      }
      class B extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFContactPageTemplate");
        }
      }
      class H extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFContent");
        }
        effectiveHtmlContent$() {
          if (null == this._effectiveHtmlContent$) {
            this._effectiveHtmlContent$ = new o.X("");
            const e =
              this.definition.settings.htmlContent ||
              this.definition.settings.bodyHtmlCalculationContent;
            if (0 != (this.definition.settings.htmlCalculations || []).length) {
              const t = [];
              for (const e of this.definition.settings.htmlCalculations)
                t.push(
                  this.resolveCalculation(e.calculationId).pipe(
                    (0, h.U)((t) => ({ id: e.calculationId, text: t }))
                  )
                );
              (0, c.a)(t)
                .pipe((0, h.U)((t) => (0, A.uX)(t, e)))
                .subscribe((e) => this._effectiveHtmlContent$?.next(e));
            } else this._effectiveHtmlContent$ = new o.X(e);
          }
          return this._effectiveHtmlContent$;
        }
      }
      class W extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFContentTemplatePage");
        }
      }
      class Z extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFDatePicker");
        }
      }
      function G(e) {
        return e.map(function (e) {
          return (function (e) {
            return e && e.toUpperCase ? e.toUpperCase().trim() : e;
          })(e);
        });
      }
      class q extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFDisplayIfOtherHasValue");
        }
        visible$() {
          return super.visible$().pipe(
            (0, m.w)((e) => {
              if (e) {
                if (
                  null != this.definition.settings.calculationId ||
                  (this.definition.settings.legacyCalculation || []).length > 0
                )
                  return this.resolveCalculation(
                    this.definition.settings.calculationId,
                    this.definition.settings.legacyCalculation
                  ).pipe(
                    (0, h.U)((e) =>
                      e.reduce((e, t) => e || 1 === (0, A.Nx)(t), !1)
                    )
                  );
                {
                  const e = this.definition.settings.valuesToMatch
                    ? this.definition.settings.valuesToMatch.slice()
                    : [];
                  this.definition.settings.valueToMatch &&
                    e.push(this.definition.settings.valueToMatch);
                  const t = G(e);
                  return this.getElementsByFilter(
                    (e) => e.id == this.definition.settings.otherElementId
                  ).length > 0
                    ? (0, u.D)([!0])
                    : this.calculationContext.rootElement
                        .getElementsById$(
                          this.definition.settings.otherElementId,
                          this.vmId
                        )
                        .pipe(
                          (0, m.w)((e) =>
                            (0, c.a)(e.map((e) => e.effectiveValueList$()))
                          ),
                          (0, h.U)((e) => Array.prototype.concat.apply([], e)),
                          (0, h.U)((e) => G(e)),
                          (0, h.U)(
                            (e) =>
                              (this.definition.settings.invert || !1) !=
                              e.some((e) => t.some((t) => e == t))
                          )
                        );
                }
              }
              return (0, u.D)([!1]);
            })
          );
        }
        valid$(e, t) {
          return (0, c.a)(this.visible$(), super.valid$(e, t)).pipe(
            (0, h.U)((e) => {
              let [t, i] = e;
              return !t || i;
            })
          );
        }
      }
      class j extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFDisplayElement");
        }
      }
      const K = { 0: "counties", 1: "provinces", 2: "states", 3: "countries" },
        z = {
          states: [
            { value: "AL", text: "Alabama" },
            { value: "AK", text: "Alaska" },
            { value: "AZ", text: "Arizona" },
            { value: "AR", text: "Arkansas" },
            { value: "CA", text: "California" },
            { value: "CO", text: "Colorado" },
            { value: "CT", text: "Connecticut" },
            { value: "DE", text: "Delaware" },
            { value: "DC", text: "District of Columbia" },
            { value: "FL", text: "Florida" },
            { value: "GA", text: "Georgia" },
            { value: "HI", text: "Hawaii" },
            { value: "ID", text: "Idaho" },
            { value: "IL", text: "Illinois" },
            { value: "IN", text: "Indiana" },
            { value: "IA", text: "Iowa" },
            { value: "KS", text: "Kansas" },
            { value: "KY", text: "Kentucky" },
            { value: "LA", text: "Louisiana" },
            { value: "ME", text: "Maine" },
            { value: "MD", text: "Maryland" },
            { value: "MA", text: "Massachusetts" },
            { value: "MI", text: "Michigan" },
            { value: "MN", text: "Minnesota" },
            { value: "MS", text: "Mississippi" },
            { value: "MO", text: "Missouri" },
            { value: "MT", text: "Montana" },
            { value: "NE", text: "Nebraska" },
            { value: "NV", text: "Nevada" },
            { value: "NH", text: "New Hampshire" },
            { value: "NJ", text: "New Jersey" },
            { value: "NM", text: "New Mexico" },
            { value: "NY", text: "New York" },
            { value: "NC", text: "North Carolina" },
            { value: "ND", text: "North Dakota" },
            { value: "OH", text: "Ohio" },
            { value: "OK", text: "Oklahoma" },
            { value: "OR", text: "Oregon" },
            { value: "PA", text: "Pennsylvania" },
            { value: "RI", text: "Rhode Island" },
            { value: "SC", text: "South Carolina" },
            { value: "SD", text: "South Dakota" },
            { value: "TN", text: "Tennessee" },
            { value: "TX", text: "Texas" },
            { value: "UT", text: "Utah" },
            { value: "VT", text: "Vermont" },
            { value: "VA", text: "Virginia" },
            { value: "WA", text: "Washington" },
            { value: "WV", text: "West Virginia" },
            { value: "WI", text: "Wisconsin" },
            { value: "WY", text: "Wyoming" },
          ],
          provinces: [
            { value: "ON", text: "Ontario" },
            { value: "QC", text: "Quebec" },
            { value: "NS", text: "Nova Scotia" },
            { value: "NB", text: "New Brunswick" },
            { value: "MB", text: "Manitoba" },
            { value: "BC", text: "British Columbia" },
            { value: "PE", text: "Prince Edward Island" },
            { value: "SK", text: "Saskatchewan" },
            { value: "AB", text: "Alberta" },
            { value: "NL", text: "Newfoundland and Labrador" },
            { value: "NT", text: "Northwest Territories" },
            { value: "YT", text: "Yukon" },
            { value: "NU", text: "Nunavut" },
          ],
          countries: [
            { value: "AF", text: "Afghanistan" },
            { value: "AX", text: "Åland Islands" },
            { value: "AL", text: "Albania" },
            { value: "DZ", text: "Algeria" },
            { value: "AS", text: "American Samoa" },
            { value: "AD", text: "Andorra" },
            { value: "AO", text: "Angola" },
            { value: "AI", text: "Anguilla" },
            { value: "AQ", text: "Antarctica" },
            { value: "AG", text: "Antigua and Barbuda" },
            { value: "AR", text: "Argentina" },
            { value: "AM", text: "Armenia" },
            { value: "AW", text: "Aruba" },
            { value: "AU", text: "Australia" },
            { value: "AT", text: "Austria" },
            { value: "AZ", text: "Azerbaijan" },
            { value: "BS", text: "Bahamas" },
            { value: "BH", text: "Bahrain" },
            { value: "BD", text: "Bangladesh" },
            { value: "BB", text: "Barbados" },
            { value: "BY", text: "Belarus" },
            { value: "BE", text: "Belgium" },
            { value: "BZ", text: "Belize" },
            { value: "BJ", text: "Benin" },
            { value: "BM", text: "Bermuda" },
            { value: "BT", text: "Bhutan" },
            { value: "BO", text: "Bolivia (Plurinational State of)" },
            { value: "BQ", text: "Bonaire, Sint Eustatius and Saba" },
            { value: "BA", text: "Bosnia and Herzegovina" },
            { value: "BW", text: "Botswana" },
            { value: "BV", text: "Bouvet Island" },
            { value: "BR", text: "Brazil" },
            { value: "IO", text: "British Indian Ocean Territory" },
            { value: "BN", text: "Brunei Darussalam" },
            { value: "BG", text: "Bulgaria" },
            { value: "BF", text: "Burkina Faso" },
            { value: "BI", text: "Burundi" },
            { value: "CV", text: "Cabo Verde" },
            { value: "KH", text: "Cambodia" },
            { value: "CM", text: "Cameroon" },
            { value: "CA", text: "Canada" },
            { value: "KY", text: "Cayman Islands" },
            { value: "CF", text: "Central African Republic" },
            { value: "TD", text: "Chad" },
            { value: "CL", text: "Chile" },
            { value: "CN", text: "China" },
            { value: "CX", text: "Christmas Island" },
            { value: "CC", text: "Cocos (Keeling) Islands" },
            { value: "CO", text: "Colombia" },
            { value: "KM", text: "Comoros" },
            { value: "CD", text: "Congo (Democratic Republic of the)" },
            { value: "CG", text: "Congo" },
            { value: "CK", text: "Cook Islands" },
            { value: "CR", text: "Costa Rica" },
            { value: "CI", text: "Côte d'Ivoire" },
            { value: "HR", text: "Croatia" },
            { value: "CU", text: "Cuba" },
            { value: "CW", text: "Curaçao" },
            { value: "CY", text: "Cyprus" },
            { value: "CZ", text: "Czechia" },
            { value: "DK", text: "Denmark" },
            { value: "DJ", text: "Djibouti" },
            { value: "DM", text: "Dominica" },
            { value: "DO", text: "Dominican Republic" },
            { value: "EC", text: "Ecuador" },
            { value: "EG", text: "Egypt" },
            { value: "SV", text: "El Salvador" },
            { value: "GQ", text: "Equatorial Guinea" },
            { value: "ER", text: "Eritrea" },
            { value: "EE", text: "Estonia" },
            { value: "ET", text: "Ethiopia" },
            { value: "FK", text: "Falkland Islands (Malvinas)" },
            { value: "FO", text: "Faroe Islands" },
            { value: "FJ", text: "Fiji" },
            { value: "FI", text: "Finland" },
            { value: "FR", text: "France" },
            { value: "GF", text: "French Guiana" },
            { value: "PF", text: "French Polynesia" },
            { value: "TF", text: "French Southern Territories" },
            { value: "GA", text: "Gabon" },
            { value: "GM", text: "Gambia" },
            { value: "GE", text: "Georgia" },
            { value: "DE", text: "Germany" },
            { value: "GH", text: "Ghana" },
            { value: "GI", text: "Gibraltar" },
            { value: "GR", text: "Greece" },
            { value: "GL", text: "Greenland" },
            { value: "GD", text: "Grenada" },
            { value: "GP", text: "Guadeloupe" },
            { value: "GU", text: "Guam" },
            { value: "GT", text: "Guatemala" },
            { value: "GG", text: "Guernsey" },
            { value: "GN", text: "Guinea" },
            { value: "GW", text: "Guinea-Bissau" },
            { value: "GY", text: "Guyana" },
            { value: "HT", text: "Haiti" },
            { value: "HM", text: "Heard Island and McDonald Islands" },
            { value: "VA", text: "Holy See" },
            { value: "HN", text: "Honduras" },
            { value: "HK", text: "Hong Kong" },
            { value: "HU", text: "Hungary" },
            { value: "IS", text: "Iceland" },
            { value: "IN", text: "India" },
            { value: "ID", text: "Indonesia" },
            { value: "IR", text: "Iran (Islamic Republic of)" },
            { value: "IQ", text: "Iraq" },
            { value: "IE", text: "Ireland" },
            { value: "IM", text: "Isle of Man" },
            { value: "IL", text: "Israel" },
            { value: "IT", text: "Italy" },
            { value: "JM", text: "Jamaica" },
            { value: "JP", text: "Japan" },
            { value: "JE", text: "Jersey" },
            { value: "JO", text: "Jordan" },
            { value: "KZ", text: "Kazakhstan" },
            { value: "KE", text: "Kenya" },
            { value: "KI", text: "Kiribati" },
            { value: "KP", text: "Korea (Democratic People's Republic of)" },
            { value: "KR", text: "Korea (Republic of)" },
            { value: "KW", text: "Kuwait" },
            { value: "KG", text: "Kyrgyzstan" },
            { value: "LA", text: "Lao People's Democratic Republic" },
            { value: "LV", text: "Latvia" },
            { value: "LB", text: "Lebanon" },
            { value: "LS", text: "Lesotho" },
            { value: "LR", text: "Liberia" },
            { value: "LY", text: "Libya" },
            { value: "LI", text: "Liechtenstein" },
            { value: "LT", text: "Lithuania" },
            { value: "LU", text: "Luxembourg" },
            { value: "MO", text: "Macao" },
            {
              value: "MK",
              text: "Macedonia (the former Yugoslav Republic of)",
            },
            { value: "MG", text: "Madagascar" },
            { value: "MW", text: "Malawi" },
            { value: "MY", text: "Malaysia" },
            { value: "MV", text: "Maldives" },
            { value: "ML", text: "Mali" },
            { value: "MT", text: "Malta" },
            { value: "MH", text: "Marshall Islands" },
            { value: "MQ", text: "Martinique" },
            { value: "MR", text: "Mauritania" },
            { value: "MU", text: "Mauritius" },
            { value: "YT", text: "Mayotte" },
            { value: "MX", text: "Mexico" },
            { value: "FM", text: "Micronesia (Federated States of)" },
            { value: "MD", text: "Moldova (Republic of)" },
            { value: "MC", text: "Monaco" },
            { value: "MN", text: "Mongolia" },
            { value: "ME", text: "Montenegro" },
            { value: "MS", text: "Montserrat" },
            { value: "MA", text: "Morocco" },
            { value: "MZ", text: "Mozambique" },
            { value: "MM", text: "Myanmar" },
            { value: "NA", text: "Namibia" },
            { value: "NR", text: "Nauru" },
            { value: "NP", text: "Nepal" },
            { value: "NL", text: "Netherlands" },
            { value: "NC", text: "New Caledonia" },
            { value: "NZ", text: "New Zealand" },
            { value: "NI", text: "Nicaragua" },
            { value: "NE", text: "Niger" },
            { value: "NG", text: "Nigeria" },
            { value: "NU", text: "Niue" },
            { value: "NF", text: "Norfolk Island" },
            { value: "MP", text: "Northern Mariana Islands" },
            { value: "NO", text: "Norway" },
            { value: "OM", text: "Oman" },
            { value: "PK", text: "Pakistan" },
            { value: "PW", text: "Palau" },
            { value: "PS", text: "Palestine, State of" },
            { value: "PA", text: "Panama" },
            { value: "PG", text: "Papua New Guinea" },
            { value: "PY", text: "Paraguay" },
            { value: "PE", text: "Peru" },
            { value: "PH", text: "Philippines" },
            { value: "PN", text: "Pitcairn" },
            { value: "PL", text: "Poland" },
            { value: "PT", text: "Portugal" },
            { value: "PR", text: "Puerto Rico" },
            { value: "QA", text: "Qatar" },
            { value: "RE", text: "Réunion" },
            { value: "RO", text: "Romania" },
            { value: "RU", text: "Russian Federation" },
            { value: "RW", text: "Rwanda" },
            { value: "BL", text: "Saint Barthélemy" },
            {
              value: "SH",
              text: "Saint Helena, Ascension and Tristan da Cunha",
            },
            { value: "KN", text: "Saint Kitts and Nevis" },
            { value: "LC", text: "Saint Lucia" },
            { value: "MF", text: "Saint Martin (French part)" },
            { value: "PM", text: "Saint Pierre and Miquelon" },
            { value: "VC", text: "Saint Vincent and the Grenadines" },
            { value: "WS", text: "Samoa" },
            { value: "SM", text: "San Marino" },
            { value: "ST", text: "Sao Tome and Principe" },
            { value: "SA", text: "Saudi Arabia" },
            { value: "SN", text: "Senegal" },
            { value: "RS", text: "Serbia" },
            { value: "SC", text: "Seychelles" },
            { value: "SL", text: "Sierra Leone" },
            { value: "SG", text: "Singapore" },
            { value: "SX", text: "Sint Maarten (Dutch part)" },
            { value: "SK", text: "Slovakia" },
            { value: "SI", text: "Slovenia" },
            { value: "SB", text: "Solomon Islands" },
            { value: "SO", text: "Somalia" },
            { value: "ZA", text: "South Africa" },
            {
              value: "GS",
              text: "South Georgia and the South Sandwich Islands",
            },
            { value: "SS", text: "South Sudan" },
            { value: "ES", text: "Spain" },
            { value: "LK", text: "Sri Lanka" },
            { value: "SD", text: "Sudan" },
            { value: "SR", text: "Suriname" },
            { value: "SJ", text: "Svalbard and Jan Mayen" },
            { value: "SZ", text: "Swaziland" },
            { value: "SE", text: "Sweden" },
            { value: "CH", text: "Switzerland" },
            { value: "SY", text: "Syrian Arab Republic" },
            { value: "TW", text: "Taiwan, Province of China[a]" },
            { value: "TJ", text: "Tajikistan" },
            { value: "TZ", text: "Tanzania, United Republic of" },
            { value: "TH", text: "Thailand" },
            { value: "TL", text: "Timor-Leste" },
            { value: "TG", text: "Togo" },
            { value: "TK", text: "Tokelau" },
            { value: "TO", text: "Tonga" },
            { value: "TT", text: "Trinidad and Tobago" },
            { value: "TN", text: "Tunisia" },
            { value: "TR", text: "Turkey" },
            { value: "TM", text: "Turkmenistan" },
            { value: "TC", text: "Turks and Caicos Islands" },
            { value: "TV", text: "Tuvalu" },
            { value: "UG", text: "Uganda" },
            { value: "UA", text: "Ukraine" },
            { value: "AE", text: "United Arab Emirates" },
            {
              value: "GB",
              text: "United Kingdom of Great Britain and Northern Ireland",
            },
            { value: "US", text: "United States" },
            { value: "UM", text: "United States Minor Outlying Islands" },
            { value: "UY", text: "Uruguay" },
            { value: "UZ", text: "Uzbekistan" },
            { value: "VU", text: "Vanuatu" },
            { value: "VE", text: "Venezuela (Bolivarian Republic of)" },
            { value: "VN", text: "Viet Nam" },
            { value: "VG", text: "Virgin Islands (British)" },
            { value: "VI", text: "Virgin Islands (U.S.)" },
            { value: "WF", text: "Wallis and Futuna" },
            { value: "EH", text: "Western Sahara" },
            { value: "YE", text: "Yemen" },
            { value: "ZM", text: "Zambia" },
            { value: "ZW", text: "Zimbabwe" },
          ],
        };
      i(51192), i(40958);
      var J = i(57956),
        X = i(88716);
      const Y = {};
      class Q extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFDropDownList"),
            (this.isFocusable = !0);
        }
        resolveItems(e, t, i) {
          (e = e || [null]), (i = i || t);
          const s = [],
            a = Math.max(
              ...[e, t, i].map(function (e) {
                return e.length;
              })
            );
          for (let n = 0; n < a; n++) {
            const a = t.length <= n ? t[t.length - 1] : t[n],
              l = i.length <= n ? i[i.length - 1] : i[n],
              r = e.length <= n ? e[e.length - 1] : e[n];
            s.push({
              text: a,
              effectiveValue: null == l || "" == l ? a : l,
              group: null == r || "" == r ? null : { name: r },
            });
          }
          return s;
        }
        async itemDatasourceAsync() {
          if (null == this.definition.settings.datasourceTable) return [];
          const e = this.id,
            t = this.getElementPathIndexFromRoot(),
            i = JSON.stringify([e, t]);
          return (
            i in Y ||
              (Y[i] = (async () => {
                const i = this.getRoot(),
                  s = await this.calculationContext.urlFetcher("invokeDraft", {
                    formId: i.formId,
                  }),
                  a = {
                    formName: i.formName,
                    formVersion: i.formVersion,
                    formHash: i.formHash,
                    segment: null,
                    skipForm: !0,
                    noWrite: !0,
                    asAdmin: this.calculationContext.adminReview || !1,
                    inPreview: this.calculationContext.adminPreview || !1,
                    testMode: this.calculationContext.testMode || !1,
                    target: e,
                    targetPathArray: t,
                    type: "resolveDatasourceItems",
                  };
                try {
                  const e = await this.calculationContext.fetchXrsf(s, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(a),
                    }),
                    t = await e.json();
                  return JSON.parse(t.Result).map((e) => ({
                    text: e.Text,
                    group: e.Group,
                    effectiveValue: e.Value,
                  }));
                } catch (e) {
                  return console.log(e), [];
                }
              })()),
            await Y[i]
          );
        }
        itemStock() {
          const e = this.definition.settings.standardDropdownList;
          if (0 == e) {
            const t = this.calculationContext.urlFetcher;
            return (async () => {
              const i = await t("standardDropDownListItems", {
                  type: e.toString(),
                }),
                s = await fetch(i);
              return (
                (0, X.Do)(s),
                (await s.json()).map((e) => ({
                  text: e.Text,
                  effectiveValue: e.Value,
                }))
              );
            })();
          }
          if (null != e)
            return z[K[e]].map((e) => ({
              text: e.text,
              effectiveValue: e.value,
            }));
          throw new Error();
        }
        items$() {
          let e = null;
          if (
            0 == this.definition.settings.listDataType ||
            (null == this.definition.settings.listDataType &&
              null != this.definition.settings.listItems &&
              this.definition.settings.listItems.length > 0)
          ) {
            const t = this.definition.settings.listItems ?? [],
              i = [];
            for (let e = 0; e < t.length; e++) {
              const s = t[e],
                a = s.group
                  ? (0, u.D)([[s.group]])
                  : this.resolveCalculation(
                      s.groupCalculationId,
                      s.legacyGroupCalculation
                    ),
                n = s.text
                  ? (0, u.D)([[s.text]])
                  : this.resolveCalculation(
                      s.textCalculationId,
                      s.legacyTextCalculation
                    ),
                l = s.effectiveValue
                  ? (0, u.D)([[s.effectiveValue]])
                  : this.resolveCalculation(
                      s.valueCalculationId,
                      s.legacyValueCalculation
                    );
              i.push(
                (0, c.a)([n, l, a]).pipe(
                  (0, h.U)(([e, t, i]) =>
                    (e.length >= t.length
                      ? e.map((e, s) => ({
                          text: e,
                          effectiveValue: t[s],
                          group: i[s],
                        }))
                      : t.map((t, s) => ({
                          effectiveValue: t,
                          text: e[s],
                          group: i[s],
                        }))
                    ).map(({ text: e, effectiveValue: t, group: i }) => ({
                      text: e,
                      group: null == i || "" == i ? null : { name: i },
                      effectiveValue: null == t || /^\s*$/.test(t) ? e : t,
                    }))
                  )
                )
              );
            }
            e = (0, c.a)(i).pipe((0, h.U)((e) => e.flat()));
          } else
            2 == this.definition.settings.listDataType
              ? (e = this.itemDatasourceAsync())
              : (1 == this.definition.settings.listDataType ||
                  (null == this.definition.settings.listDataType &&
                    null != this.definition.settings.standardDropdownList)) &&
                (e = this.itemStock());
          return (0, J.b)(e) ? e : (0, u.D)(null != e && "then" in e ? e : [e]);
        }
        sortedItems$() {
          let e = this.items$();
          return (
            !1 !== this.definition.settings.sortList &&
              (e = e.pipe(
                (0, h.U)((e) => {
                  e.sort(function (e, t) {
                    const i = null == e.group ? null : e.group.name,
                      s = null == t.group ? null : t.group.name;
                    return i == s
                      ? e.text > t.text
                        ? 1
                        : e.text < t.text
                        ? -1
                        : 0
                      : i > s
                      ? 1
                      : -1;
                  });
                  const t = [];
                  return (
                    e.forEach((e) => {
                      var i, s;
                      (t.length &&
                        ((s = e),
                        (null == (i = t[t.length - 1]).group
                          ? null == s.group
                          : null != s.group && i.group.name == s.group.name) &&
                          (null == i.text
                            ? null == s.text
                            : i.text == s.text) &&
                          (null == i.effectiveValue
                            ? null == s.effectiveValue
                            : i.effectiveValue == s.effectiveValue))) ||
                        t.push(e);
                    }),
                    t
                  );
                })
              )),
            e
          );
        }
        groupedItems$() {
          return this.sortedItems$().pipe(
            (0, h.U)((e) => {
              const t = (e) =>
                  Object.keys(e).find((e) => "name" == e.toLocaleLowerCase()),
                i = e.filter(function (e) {
                  return null != e.group && "" != e.group[t(e.group)];
                }),
                s = [],
                a = {};
              return (
                i.forEach(function (e) {
                  let i = a[e.group[t(e.group)]];
                  null == i
                    ? ((i = { key: e.group[t(e.group)], items: [e] }),
                      (a[i.key] = i),
                      s.push(i))
                    : i.items.push(e);
                }),
                s
              );
            })
          );
        }
        ungroupedItems$() {
          return this.sortedItems$().pipe(
            (0, h.U)((e) => {
              const t = e.filter(function (e) {
                return null == e.group || "" == e.group.name;
              });
              let i = this.definition.settings.placeholderText;
              return (
                (0, b.hr)(i) && (i = "-- Select an option --"),
                t.unshift({ effectiveValue: void 0, text: i }),
                t
              );
            })
          );
        }
      }
      class ee extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFExtraDataShim");
        }
      }
      class te extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFFile"),
            (this.isFileUpload = !0),
            (this.uploadStatus = null),
            (this.isFocusable = !0);
        }
        setData(e, t) {
          super.setData(e, t), this._setFileData(e);
        }
        setFileData(e) {
          this._setFileData(e), this.markEdited();
        }
        _setFileData(e) {
          if (null != e)
            e.hasValue || this.setKey(e, "hasValue", "_hasValue"),
              this.setKey(e, "valueId"),
              this.setKey(e, "fileName"),
              this.setKey(e, "fileSize"),
              this.setKey(e, "contentType"),
              this.setKey(e, "fileUrl"),
              e.hasValue && this.setKey(e, "hasValue", "_hasValue");
          else {
            this.setKey({}, "hasValue", "_hasValue");
            const e = this.getValueFromDependencies();
            null != e &&
              (this.setKey(e, "fileName"), this.setKey(e, "fileUrl"));
          }
        }
        getData(e) {
          const t = super.getData(e);
          return (
            (t.valueId = this.valueId),
            (t.fileName = this.fileName),
            (t.fileSize = parseInt(this.fileSize)),
            (t.contentType = this.contentType),
            this._hasValue || (t.removeExisting = !0),
            this.valueId || (this.uploadStatus = null),
            t
          );
        }
        rules$() {
          return super.rules$().pipe(
            (0, h.U)(
              (e) => (
                Object.keys(e)
                  .filter((e) => 0 == e.indexOf("data-val-required"))
                  .forEach((t) => {
                    const i =
                      "data-val-requiredfile" +
                      t.substring("data-val-required".length);
                    (e[i] = e[t]), delete e[t];
                  }),
                e
              )
            )
          );
        }
      }
      i(76619);
      class ie extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFForEach");
        }
        initChildren(e) {
          this.calculationContext.rootElement.dependenciesIndex =
            this.calculationContext.rootElement.dependenciesIndex || [];
          const t = this.calculationContext.rootElement.dependenciesIndex,
            i = t.length > 0 ? t[0] : 0;
          if ((t.unshift(0), null == e)) {
            const e =
                this.calculationContext.rootElement.foreachCounts[this.id],
              s = null == e ? this.definition.settings.min || 0 : e[i];
            for (let s = 0; s < i; s++) t[0] += e[s];
            this.children = new Array(s + 0).fill(0).map((e) => {
              const i = this.generateItem(null);
              return t[0]++, i;
            });
          } else
            for (
              this.children =
                e && e.children
                  ? e.children.map((e) => {
                      const i = this.generateItem(e);
                      return t[0]++, i;
                    })
                  : [];
              this.children.length < (this.definition.settings.min || 0);

            )
              this.addItem(null);
          t.shift(), this._children$.next(this.children);
        }
        setData(e, t) {
          if ((super.setData(e, !0), !t)) {
            this.calculationContext.rootElement.dependenciesIndex =
              this.calculationContext.rootElement.dependenciesIndex || [];
            const t = this.calculationContext.rootElement.dependenciesIndex,
              i = t.length > 0 ? t[0] : 0;
            let s;
            if ((t.unshift(0), null != e)) s = e.children.length;
            else if (
              this.id in this.calculationContext.rootElement.foreachCounts
            ) {
              const e =
                this.calculationContext.rootElement.foreachCounts[this.id];
              for (let s = 0; s < i; s++) t[0] += e[s];
              s = e[i];
            } else
              s = this.children
                ? this.children.length
                : this.definition.settings.min || 0;
            const a = this.children ? this.children.slice(0, s) : [];
            for (let i = 0; i < s; i++) {
              const s = null != e ? e.children[i] : null;
              a[i] ? a[i].setData(s) : (a[i] = this.generateItem(s)), t[0]++;
            }
            t.shift(), this.setItems(a);
          }
        }
        setCalculationItems(e) {
          let t = 0,
            i = this.children.filter(
              (i) => (
                i.isManualChild && t++, e.includes(i.childId) || i.isManualChild
              )
            );
          if (i.length == e.length + t && this.children.length == e.length + t)
            return;
          const s = e.filter((e) => !i.some((t) => t.childId == e));
          s.length > 0 &&
            s.forEach((e) => {
              const t = i.filter((e) => !e.removedChild).length,
                s = this.generateItem({ childId: e, isManualChild: !1 });
              (s.childIndex = (t + 1).toString()), i.push(s);
            }),
            i
              .filter((e) => !e.removedChild)
              .forEach((e, t) => {
                e.childIndex = (t + 1).toString();
              }),
            (i = e
              .map((e) => i.filter((t) => t.childId == e)[0])
              .sort((e, t) =>
                null == e.childIndex
                  ? 1
                  : null == t.childIndex
                  ? -1
                  : parseInt(e.childIndex) - parseInt(t.childIndex)
              )),
            this.definition.settings.addRemoveItems &&
              this.children
                .filter((e) => 1 == e.isManualChild)
                .forEach((e) => {
                  i.splice(parseInt(e.childIndex) - 1, 0, e);
                }),
            this.setItems(i);
        }
        setItems(e) {
          (this.children = e),
            this._children$.next(e),
            null == this.baseLink ||
              this.isBase ||
              this.baseLink.setItems(e.map((e) => e.baseLink));
        }
        generateItem(e) {
          const t = new se(this, e, this.definition, this.calculationContext);
          if (null != this.baseLink && !this.isBase) {
            const i = this.baseLink.generateItem(e);
            t.linkBaseElement(i);
          }
          return t;
        }
        addItem(e) {
          const t = this.generateItem(e || {});
          null == t.childId && (t.isManualChild = !0), this._addItem(t);
        }
        _addItem(e) {
          null == e.childIndex &&
            (e.childIndex = (
              this.children.filter((e) => !e.removedChild).length + 1
            ).toString()),
            this.children.push(e),
            this._children$.next(this.children),
            null == this.baseLink ||
              null == e.baseLink ||
              this.isBase ||
              this.baseLink._addItem(e.baseLink);
        }
        removeItem(e, t) {
          const i = this.children.indexOf(e);
          if (i >= 0) {
            if (
              !e.isManualChild &&
              t.length > 0 &&
              t.filter((t) => t.includes(e.childId))
            ) {
              const e = this.children[i];
              (e.removedChild = !0), (e.childIndex = null);
            } else this.children.splice(i, 1);
            for (let e = i; e < this.children.length; e++) {
              const t = this.children[e];
              t.childIndex =
                null == t.childIndex
                  ? null
                  : (parseInt(t.childIndex) - 1).toString();
            }
            this._children$.next(this.children);
          }
          null == this.baseLink ||
            null == e.baseLink ||
            this.isBase ||
            this.baseLink.removeItem(e.baseLink, []);
        }
        valid$(e, t) {
          const i = super.valid$(e, t),
            s = this.errors$().pipe((0, h.U)((e) => 0 == e.length));
          return (0, c.a)(i, s).pipe((0, h.U)(([e, t]) => e && t));
        }
        errors$() {
          return this._children$.pipe(
            (0, h.U)((e) => {
              const t = [];
              return (
                null != this.definition.settings.min &&
                  this.children.length < this.definition.settings.min &&
                  t.push(
                    `Must have at least ${
                      this.definition.settings.min
                    } ${this.getLabel()}`
                  ),
                null != this.definition.settings.max &&
                  this.children.length > this.definition.settings.max &&
                  t.push(
                    `Must have at most ${
                      this.definition.settings.max
                    } ${this.getLabel()}`
                  ),
                t
              );
            })
          );
        }
        _getElementsById$(e, t) {
          if (this.id == e) return [this];
          const i = (t) => t.children.some((t) => t.id == e || i(t));
          if (!i(this.definition)) return super._getElementsById$(e, t);
          let s = null;
          return (
            this.children.some(
              (e) => (e.getElementByVmId(t) && (s = e), null != s)
            ),
            null != s
              ? s._getElementsById$(e, t)
              : [
                  this._children$.pipe(
                    (0, m.w)((i) => {
                      let s = null;
                      i.some(
                        (e) => (e.getElementByVmId(t) && (s = e), null != s)
                      );
                      const a =
                          null != s
                            ? s._getElementsById$(e, t)
                            : super._getElementsById$(e, t),
                        n = a.filter((e) => "pipe" in e),
                        l = a.filter((e) => !("pipe" in e));
                      return (
                        l.length > 0 && n.push((0, u.D)([l])),
                        0 == n.length
                          ? (0, u.D)([[]])
                          : (0, c.a)(n).pipe(
                              (0, h.U)((e) => {
                                return ((t = e),
                                Array.prototype.concat.apply([], t)).filter(
                                  (e) => !e.parentElement.removedChild
                                );
                                var t;
                              })
                            )
                      );
                    })
                  ),
                ]
          );
        }
        effectiveLabel$() {
          return (
            null == this._effectiveLabel$ &&
              (this.definition.settings.labelCalculationId
                ? ((this._effectiveLabel$ = new o.X(null)),
                  this.resolveCalculation(
                    this.definition.settings.labelCalculationId
                  )
                    .pipe((0, h.U)((e) => (e.length ? e[0] : null)))
                    .subscribe(this._effectiveLabel$))
                : (this._effectiveLabel$ = new o.X(
                    this.definition.settings.label
                  ))),
            this._effectiveLabel$
          );
        }
      }
      class se extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.typeName = null);
        }
        getVirtualContext$() {
          return null == this.parentElement
            ? (0, u.D)([[]])
            : this.parentElement
                .getVirtualContext$()
                .pipe(
                  (0, m.w)((e) =>
                    this.parentElement._children$.pipe(
                      (0, h.U)((t) => [...e, t.indexOf(this).toString()])
                    )
                  )
                );
        }
        initChildren(e) {
          super.initChildren(e),
            null != e &&
              (null == e.childId && this.definition.settings.addRemoveItems
                ? (this.childId = null)
                : (this.childId = e.childId),
              (this.removedChild = e.removedChild),
              (this.isManualChild = e.isManualChild)),
            this.children
              .filter((e) => e instanceof ae)
              .forEach((e) => e.setForEachItem(this));
        }
      }
      class ae extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFForEach+ChildId"),
            (this.foreachItem = null),
            (this.foreachItem$ = new o.X(null));
        }
        setData(e, t) {
          super.setData(e, t);
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              ((t.value = this.childId()),
              (t.removedChild = this.removedChild()),
              (t.isManualChild = this.manualChild())),
            t
          );
        }
        setForEachItem(e) {
          (this.foreachItem = e), this.foreachItem$.next(e);
        }
        valueList$() {
          return this.foreachItem$.pipe(
            (0, h.U)((e) => (null == e ? [] : [e.childId]))
          );
        }
        effectiveValueList$() {
          return this.valueList$();
        }
        childId() {
          return this.foreachItem.childId;
        }
        removedChild() {
          return this.foreachItem.removedChild;
        }
        manualChild() {
          return this.foreachItem.isManualChild;
        }
      }
      class ne extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFFormAlternative");
        }
        getCustomPageNav() {
          return [this];
        }
      }
      i(60552);
      class le extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DynamicForm"),
            (this.externalData = t.externalData),
            (this.formId = t.formId),
            (this.formName = t.formName),
            (this.formVersion = t.formVersion),
            (this.formHash = t.formHash),
            (this.viewTypes = t.viewTypes),
            (this.status = t.status),
            (this.dependencies = t.dependencies),
            (this.foreachCounts = t.foreachCounts);
        }
        appendExternalData(e) {
          this.externalData = this.externalData ?? {};
          for (const [t, i] of Object.entries(e ?? {}))
            this.externalData[t] = i;
        }
        setData(e, t) {
          (this.dependencies = e.dependencies),
            (this.foreachCounts = e.foreachCounts),
            super.setData(e, t),
            (this.status = e.status),
            (this.viewTypes = e.viewTypes),
            (this.formId = this.formId || e.formId),
            (this.externalData = e.externalData);
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              ((t.formId = this.formId),
              (t.formName = this.formName),
              (t.formVersion = this.formVersion),
              (t.formHash = this.formHash),
              (t.externalData = this.externalData)),
            t
          );
        }
        markEdited() {
          const e = this.getElementsByFilter((e) => e instanceof T);
          for (const t of e) t.markEdited();
        }
      }
      class re extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFLandingPageTemplate"),
            (this.allowAnonymous = !0);
        }
      }
      var oe = i(74957),
        ue = i(65971);
      let ce, de, me, he, fe;
      !(function (e) {
        (e[(e.Display = 0)] = "Display"), (e[(e.Edit = 1)] = "Edit");
      })(ce || (ce = {}));
      class pe extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFPage"),
            (this._status$ = this._status$ || new o.X(null));
        }
        getData(e) {
          const t = super.getData(e);
          return null != t && (t.status = this.status), t;
        }
        setData(e, t) {
          super.setData(e, t), null != e && this.setStatus(e.status);
        }
        setStatus(e) {
          (this.status = e),
            null == this._status$
              ? (this._status$ = new o.X(e))
              : this._status$.next(e);
        }
        _validateUneditedChild$(e) {
          return (0, c.a)([
            super._validateChild$(e),
            this._status$.pipe((0, h.U)((e) => "NotStarted" != e)),
          ]).pipe((0, h.U)(([e, t]) => e && t));
        }
        permitLaterPages$() {
          return this.definition.settings.mustBeCompletedToProceed
            ? this.clientStatus$().pipe((0, h.U)((e) => "Complete" == e))
            : (0, u.D)([!0]);
        }
        visible$() {
          return super
            .visible$()
            .pipe(
              (0, m.w)((e) => (e ? this.isEnabled$(null) : (0, u.D)([!1])))
            );
        }
        isVisible(e, t, i) {
          return null != this._isDisplay(e, t, i);
        }
        isEditable(e, t, i) {
          return "edit" == this._isDisplay(e, t, i);
        }
        isViewOnly(e, t, i) {
          return "display" == this._isDisplay(e, t, i);
        }
        _isDisplay(e, t, i) {
          const s = this.definition.settings.segment,
            a =
              null == s
                ? null
                : this.getRoot()
                    .getElementsByFilter((e) => e.id == s)
                    .find((e) => !0);
          if (null == a) {
            const i = this.getRoot().definition.effectiveStatuses?.find(
              (e) => e.value == t
            );
            return (
              null == i
                ? "Public" != e || ("Returned" != t && "InProgress" != t)
                : i.mode != ("Public" == e ? "User" : "Admin")
            )
              ? "display"
              : "edit";
          }
          if (
            null != a &&
            s == i &&
            a.definition.settings.preStatus == t &&
            (a.definition.settings.type != ue.Z.Group || a.isInGroup)
          ) {
            const i = this.getRoot().definition.effectiveStatuses?.find(
              (e) => e.value == t
            );
            return (
              null == i
                ? "Public" == e
                : i.mode == ("Public" == e ? "User" : "Admin")
            )
              ? "edit"
              : "display";
          }
          return null != a && "NotStarted" != a.status && "Public" != e
            ? "display"
            : null;
        }
        isEnabled$(e) {
          if (
            (() => {
              if (
                null == this.definition.settings.visible ||
                0 == this.definition.settings.visible.length
              )
                return !0;
              switch (e) {
                case "Edit":
                  return this.definition.settings.visible.includes(oe.Z.Edit);
                case "Display":
                  return this.definition.settings.visible.includes(
                    oe.Z.Display
                  );
                default:
                  return !0;
              }
            })()
          ) {
            if (this.definition.settings.calculationId)
              return this.resolveCalculation(
                this.definition.settings.calculationId
              ).pipe(
                (0, h.U)((e) => e.reduce((e, t) => e || 1 === (0, A.Nx)(t), !1))
              );
            if (this.definition.settings.otherElementId) {
              const e = this.definition.settings.valuesToMatch
                ? this.definition.settings.valuesToMatch.slice()
                : [];
              this.definition.settings.valueToMatch &&
                e.push(this.definition.settings.valueToMatch);
              const t = G(e);
              return this.getElementsByFilter(
                (e) => e.id == this.definition.settings.otherElementId
              ).length > 0
                ? (0, u.D)([!0])
                : this.calculationContext.rootElement
                    .getElementsById$(
                      this.definition.settings.otherElementId,
                      this.vmId
                    )
                    .pipe(
                      (0, m.w)((e) =>
                        (0, c.a)(e.map((e) => e.effectiveValueList$()))
                      ),
                      (0, h.U)((e) => Array.prototype.concat.apply([], e)),
                      (0, h.U)((e) => G(e)),
                      (0, h.U)(
                        (e) =>
                          (this.definition.settings.invert || !1) !=
                          e.some((e) => t.some((t) => e == t))
                      )
                    );
            }
            return (0, u.D)([!0]);
          }
          return (0, u.D)([!1]);
        }
        clientStatus$() {
          return this._status$.pipe(
            (0, m.w)((e) =>
              null == e
                ? this.valid$().pipe(
                    (0, h.U)((e) => (e ? "Complete" : "Invalid"))
                  )
                : (0, u.D)([e])
            )
          );
        }
      }
      i(519),
        (function (e) {
          (e[(e.Submitter = 0)] = "Submitter"),
            (e[(e.Reviewer = 1)] = "Reviewer");
        })(de || (de = {})),
        (function (e) {
          (e[(e.Any = 0)] = "Any"),
            (e[(e.Group = 1)] = "Group"),
            (e[(e.Prior = 2)] = "Prior"),
            (e[(e.Invite = 3)] = "Invite");
        })(me || (me = {}));
      class ge extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFStateForm"),
            (this._status$ = this._status$ || new o.X(null));
        }
        getData(e) {
          const t = super.getData(e);
          return null != t && (t.status = this.status), t;
        }
        setData(e, t) {
          super.setData(e, t),
            (this.isInGroup = e.isInGroup),
            (this.activatedDate = e.activatedDate),
            (this.completedDate = e.completedDate),
            (this.isAssignedUser = e.isAssignedUser),
            (this.isAssignedToOtherUser = e.isAssignedToOtherUser),
            this.setStatus(e.status);
        }
        setStatus(e) {
          (this.status = e),
            null == this._status$
              ? (this._status$ = new o.X(e))
              : this._status$.next(e);
        }
        clientStatus$() {
          return (0, c.a)(this._status$, this.valid$()).pipe(
            (0, h.U)(([e, t]) => (null == e ? (t ? "Complete" : "Invalid") : e))
          );
        }
      }
      class ve extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFPdfAlternative");
        }
        setData(e, t) {
          super.setData(e, t), null != e && (this.fileUrl = e.fileUrl);
        }
        getCustomPageNav() {
          return [this];
        }
      }
      class be extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFRadioGroup"),
            (this.isFocusable = !0);
        }
        effectiveItems$() {
          const e = this.definition.settings.items,
            t = [];
          for (let i = 0; i < e.length; i++) {
            const s = e[i];
            let a = null;
            a = s.labelCalculationId
              ? this.resolveCalculation(s.labelCalculationId, null)
              : (0, u.D)([[s.label]]);
            let n = null;
            (n = s.valueCalculationId
              ? this.resolveCalculation(s.valueCalculationId, null)
              : (0, u.D)([[s.value]])),
              t.push(
                (0, c.a)([a, n]).pipe(
                  (0, h.U)((e) => {
                    let [t, i] = e;
                    return (
                      t.length >= i.length
                        ? t.map((e, t) => ({ label: e, value: i[t] }))
                        : i.map((e, i) => ({ value: e, label: t[i] }))
                    ).map((e) => {
                      let { label: t, value: i } = e;
                      return {
                        label: t,
                        value: null == i || /^\s*$/.test(i) ? t : i,
                      };
                    });
                  })
                )
              );
          }
          return (0, c.a)(t).pipe((0, h.U)((e) => e.flat()));
        }
      }
      class ye extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFRegion");
        }
      }
      class Ce extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFRequireValueIfOtherHasValue");
        }
      }
      class we extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFSection");
        }
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"), (e[(e.Textarea = 1)] = "Textarea");
      })(he || (he = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Integer = 1)] = "Integer"),
            (e[(e.Number = 2)] = "Number"),
            (e[(e.Currency = 3)] = "Currency"),
            (e[(e.WholeCurrency = 4)] = "WholeCurrency"),
            (e[(e.PositiveInteger = 5)] = "PositiveInteger"),
            (e[(e.PositiveNumber = 6)] = "PositiveNumber"),
            (e[(e.PositiveCurrency = 7)] = "PositiveCurrency"),
            (e[(e.PositiveWholeCurrency = 8)] = "PositiveWholeCurrency"),
            (e[(e.Phone = 9)] = "Phone"),
            (e[(e.Email = 10)] = "Email"),
            (e[(e.Date = 11)] = "Date"),
            (e[(e.URL = 12)] = "URL"),
            (e[(e.Zip = 13)] = "Zip"),
            (e[(e.CanadianPostalCode = 14)] = "CanadianPostalCode"),
            (e[(e.SSN = 15)] = "SSN"),
            (e[(e.EIN = 16)] = "EIN");
        })(fe || (fe = {}));
      var _e = i(11970),
        xe = i(38153);
      class Se extends T {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFTextbox"),
            (this.autoEdit = !1),
            (this.isFocusable = !0);
        }
        valueList$() {
          const e = super.valueList$();
          return this.calculationContext.nonLiveTextboxes
            ? e
            : e.pipe(Se.debounceExceptFirst(Se.debounceValueTime));
        }
        effectiveValueList$() {
          const e = super.effectiveValueList$();
          return this.calculationContext.nonLiveTextboxes
            ? e
            : e.pipe(Se.debounceExceptFirst(Se.debounceValueTime));
        }
        static debounceValueTime = 500;
        static debounceExceptFirst(e) {
          let t = !0;
          return (0, xe.D)((i) =>
            t ? ((t = !1), (0, _e.H)(0)) : (0, _e.H)(e)
          );
        }
      }
      class De extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.isCustomReceiptContent = !0);
        }
        visible() {
          return null == this.definition.settings.conditionalCalculationId &&
            0 ==
              (this.definition.settings.legacyConditionalCalculation || [])
                .length
            ? Promise.resolve(!0)
            : this.resolveCalculation(
                this.definition.settings.conditionalCalculationId,
                this.definition.settings.legacyConditionalCalculation
              )
                .pipe(
                  (0, h.U)(
                    (e) =>
                      e.some(
                        (e) =>
                          this.definition.settings.conditionalValuesToMatch.indexOf(
                            e
                          ) >= 0
                      ) != !!this.definition.settings.conditionalInvert
                  )
                )
                .pipe((0, f.P)())
                .toPromise();
        }
        receiptContents() {
          const e = this.definition.settings.htmlContent;
          if (
            null == this.definition.settings.htmlContentCalculationId &&
            0 == (this.definition.settings.htmlCalculations || []).length &&
            0 ==
              (this.definition.settings.legacyHtmlContentCalculation || [])
                .length
          )
            return Promise.resolve([e]);
          if (0 != (this.definition.settings.htmlCalculations || []).length) {
            const t = [];
            for (const e of this.definition.settings.htmlCalculations)
              t.push(
                this.resolveCalculation(e.calculationId).pipe(
                  (0, h.U)((t) => ({ id: e.calculationId, text: t }))
                )
              );
            return (0, c.a)(t)
              .pipe(
                (0, h.U)((t) => (0, A.uX)(t, e)),
                (0, f.P)()
              )
              .toPromise();
          }
          return this.resolveCalculationPromise(
            this.definition.settings.htmlContentCalculationId,
            this.definition.settings.legacyHtmlContentCalculation
          );
        }
      }
      class Pe extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.isCustomViewType = !0);
        }
        visible() {
          const e = this.definition.settings.showByDefault;
          return 0 == e
            ? Promise.resolve(!0)
            : 1 == e
            ? Promise.resolve(!1)
            : this.resolveCalculationPromiseBool(
                this.definition.settings.showByDefaultCalculatedId
              );
        }
        viewTypes() {
          return [this.definition.settings.label];
        }
      }
      class Ie extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.isCustomViewType = !0);
        }
        visible() {
          const e = this.definition.settings.showByDefault;
          return 0 == e
            ? Promise.resolve(!0)
            : 1 == e
            ? Promise.resolve(!1)
            : this.resolveCalculationPromiseBool(
                this.definition.settings.showByDefaultCalculatedId
              );
        }
        viewTypes() {
          return [this.definition.settings.label];
        }
      }
      let ke;
      !(function (e) {
        (e[(e.True = 0)] = "True"),
          (e[(e.False = 1)] = "False"),
          (e[(e.Calculation = 2)] = "Calculation");
      })(ke || (ke = {}));
      class $e extends C {
        isCustomViewType;
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.isCustomViewType = !0);
        }
        visible() {
          const e = this.definition.settings.showByDefault;
          return 0 ==
            this.getRoot().getElementsByFilter(
              (e) =>
                e.id == this.definition.settings.fileUploadId &&
                e.isFileUpload &&
                parseInt(e.fileSize) > 0
            ).length
            ? Promise.resolve(!1)
            : e == ke.True
            ? Promise.resolve(!0)
            : e == ke.False
            ? Promise.resolve(!1)
            : this.resolveCalculationPromiseBool(
                this.definition.settings.showByDefaultCalculatedId
              );
        }
        viewTypes() {
          return [this.definition.settings.label];
        }
      }
      class Ve extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFCommonCheckout"),
            (this.isPostSubmitRedirect = !0);
        }
        shouldSkipConfirm() {
          return !!this.definition.settings.skipConfirmation || null;
        }
        shouldSkipCompletion() {
          return this.definition.settings.skipCompletion;
        }
        getPostSubmitRedirect() {
          return null != this.definition.settings.redirectUrlCalculationId
            ? this.resolveCalculationPromise(
                this.definition.settings.redirectUrlCalculationId,
                this.definition.settings.legacyRedirectUrlCalculation
              )
            : this.definition.settings.redirectUrl;
        }
      }
      class Ee extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.isSignature = !0),
            (this.isCustomViewType = !0),
            (this.isSigned = this.isSigned || !1),
            (this.isSigned$ = this.isSigned$ || new o.X(this.isSigned)),
            (this.typeName = "MI.Common.DynamicForms.Models.DFSignature");
        }
        setData(e, t) {
          super.setData(e, t), null != e && this.setKey(e, "isSigned");
        }
        visible() {
          return this.isSigned$.pipe((0, f.P)()).toPromise();
        }
        viewTypes() {
          return [
            this.definition.settings.label,
            `${this.definition.settings.label} (Certification)`,
          ];
        }
        hasCustomConfirmComponent(e) {
          return e;
        }
        async getCustomConfirmComponent(e) {
          const t = (await i.e(262).then(i.bind(i, 27452)))
            .getCustomConfirmComponent;
          return await t.apply(this, [e]);
        }
        requireUserVerification() {
          const e = this.definition.settings.requireUserVerification;
          return null == e || e;
        }
        shouldSkipConfirm() {
          return !!this.isSigned && null;
        }
        shouldSkipConfirm$() {
          return this.isSigned$.pipe((0, h.U)((e) => !!e && null));
        }
        hasCustomSubmitText$() {
          return this.isSigned$.pipe((0, h.U)((e) => !e));
        }
        submitText$() {
          return this.isSigned$.pipe((0, h.U)((e) => (e ? null : "Sign")));
        }
      }
      const Te = "Continue to Payment";
      class Fe extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFAbstractPay");
        }
        shouldSkipConfirm() {
          return this.shouldSkipConfirm$()
            .pipe((0, f.P)())
            .toPromise();
        }
        shouldSkipConfirm$() {
          return this.getCalculatedItems$().pipe(
            (0, h.U)(
              (e) =>
                e.reduce((e, t) => e + t.quantity * t.unitPrice, 0) > 0 || null
            )
          );
        }
        hasCustomSubmitText$() {
          return this.submitText$().pipe((0, h.U)((e) => e != Te));
        }
        submitText$() {
          return this.shouldSkipConfirm$().pipe(
            (0, m.w)((e) =>
              e
                ? this.resolveCalculation(
                    this.definition.settings
                      .paymentSubmitButtonTextCalculationId
                  ).pipe(
                    (0, h.U)(
                      (e) =>
                        (e && e.length
                          ? e.join("")
                          : this.definition.settings.paymentSubmitButtonText) ||
                        Te
                    )
                  )
                : (0, u.D)([null])
            )
          );
        }
        getCalculatedItems() {
          return this.getCalculatedItems$()
            .pipe((0, f.P)())
            .toPromise();
        }
        getCalculatedItems$() {
          const e = [];
          for (
            let t = 0;
            t < (this.definition.settings.items?.length ?? 0);
            t++
          ) {
            const i = this.definition.settings.items[t],
              s = [
                {
                  quantity: null == i.quantity ? 1 : i.quantity,
                  unitPrice: i.unitPrice || 0,
                  description: i.description || "",
                  sku: i.sku || "",
                },
              ];
            e.push([
              s,
              (0, c.a)(
                Object.keys(s[0])
                  .map((e) => [e, i[e + "CalculationId"]])
                  .map(([e, t]) =>
                    null == t
                      ? (0, u.D)([[e, null]])
                      : this.resolveCalculation(t).pipe((0, h.U)((t) => [e, t]))
                  )
              ),
            ]);
          }
          return (0, c.a)(
            e.map(([e, t]) => t.pipe((0, h.U)((t) => [e, t])))
          ).pipe(
            (0, h.U)((e) => {
              const t = [];
              for (const [i, s] of e)
                if (!s.some((e) => null != e[1] && 0 == e[1].length)) {
                  for (let [e, t] of s)
                    if (null != t) {
                      e.endsWith("Calculation") &&
                        (e = e.slice(0, -1 * "Calculation".length));
                      for (let s = 0; s < t.length; s++)
                        s >= i.length && i.push({}),
                          (i[s][e] =
                            "unitPrice" == e || "quantity" == e
                              ? (0, A.JR)(t[s])
                              : t[s]);
                    }
                  for (const e of Object.keys(i[0]))
                    for (const t of i)
                      null == t[e] &&
                        (t[e] =
                          "unitPrice" == e || "quantity" == e
                            ? (0, A.JR)(i[0][e])
                            : i[0][e]);
                  Array.prototype.push.apply(t, i);
                }
              return t;
            })
          );
        }
      }
      class Le extends Fe {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFCommonCheckout");
        }
        hasCustomConfirmComponent(e) {
          return e;
        }
        async getCustomConfirmComponent(e) {
          if (e) {
            const e = (await i.e(262).then(i.bind(i, 29474)))
              .getCustomConfirmComponent;
            return await e.apply(this, []);
          }
          throw new Error();
        }
      }
      class Ae extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.LexmarkIntegrationDef");
        }
        hasCustomConfirmComponent(e) {
          return e;
        }
        async getCustomConfirmComponent(e) {
          const t = (await i.e(262).then(i.bind(i, 82870)))
            .getCustomConfirmComponent;
          return await t.apply(this, [e]);
        }
      }
      let Re;
      !(function (e) {
        (e[(e.Email = 0)] = "Email"),
          (e[(e.SMS = 1)] = "SMS"),
          (e[(e.Gov2GoAlert = 2)] = "Gov2GoAlert");
      })(Re || (Re = {})),
        i(37937);
      class Me extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFCompletionEmailer");
        }
        hasCustomConfirmComponent(e) {
          return e;
        }
        async getCustomConfirmComponent(e) {
          const t = (await i.e(262).then(i.bind(i, 74883)))
            .getCustomConfirmComponent;
          return await t.apply(this, []);
        }
      }
      var Ne = i(63784);
      class Oe extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFSubmitTrigger");
        }
        submitButtons$() {
          const e = (e) => [
              {
                text: e,
                trigger: this.definition.settings.triggerKey,
                order: this.definition.settings.order,
              },
            ],
            t = function () {
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              return t.reduce((e, t) => (null == e || /^\s*$/.test(e) ? t : e));
            },
            i = t(
              this.definition.settings.buttonText,
              this.definition.settings.displayLabel
            ),
            s = ["buttonTextCalculationId", "displayCalculationId"];
          if (s.some((e) => null != this.definition.settings[e])) {
            if (null == this._submitButtons$) {
              this._submitButtons$ = new d.t(1);
              const a = {
                buttonTextCalculationId: new Ne.y(),
                displayCalculationId: new Ne.y(),
              };
              for (const e of s) {
                const t = this.definition.settings[e];
                a[e] = this.resolveCalculation(t);
              }
              (0, c.a)([a.buttonTextCalculationId, a.displayCalculationId])
                .pipe(
                  (0, h.U)((s) => {
                    let [a, n] = s;
                    return 1 === (0, A.Nx)(n[0]) || null == n[0]
                      ? e(t(a[0], i))
                      : [];
                  })
                )
                .subscribe(this._submitButtons$);
            }
            return this._submitButtons$;
          }
          return (0, u.D)([e(i)]);
        }
      }
      class Ue extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFWorkflowSwitch"),
            (this._branchSubjects = null),
            this.initBranchSubjects();
        }
        _currentBranch() {
          if (null != this._branchSubjects)
            for (var e of Object.keys(this._branchSubjects))
              if (this._branchSubjects[e].getValue())
                return this.children.find((t) => t.id == e);
          return this.children.find((e) => e.id.endsWith("_ELSE"));
        }
        initBranchSubjects() {
          setTimeout(() => {
            if (null == this._branchSubjects) {
              this._branchSubjects = {};
              for (let e of this.definition.settings.branches) {
                const t = new o.X(!1);
                this._branchSubjects[e.branchId] = t;
                const i = e.calculationId;
                this.resolveCalculation(i)
                  .pipe(
                    (0, h.U)((e) =>
                      e.reduce((e, t) => e || 1 === (0, A.Nx)(t), !1)
                    )
                  )
                  .subscribe(t);
              }
            }
            return this._branchSubjects;
          }, 0);
        }
        _getElementsByFilter(e, t) {
          return this._currentBranch()._getElementsByFilter(e, t);
        }
        getElementByVmId(e) {
          return this._currentBranch().getElementByVmId(e);
        }
        _getElementsById$(e, t) {
          return this._currentBranch()._getElementsById$(e, t);
        }
      }
      class Be extends C {
        captchaToken;
        hasCaptchaToken$;
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.captchaToken = null),
            (this.hasCaptchaToken$ = new o.X(!1));
        }
        shouldSkipConfirm() {
          return !1;
        }
        shouldSkipConfirm$() {
          return (0, u.D)([!1]);
        }
        hasCustomConfirmComponent(e) {
          return !e;
        }
        isSegment(e) {
          return null == e || e == this.definition.settings.segment;
        }
        async setCaptchaToken(e) {
          this.captchaToken = e;
          const t = this.id.replace("_Control", "");
          for (const i of await this.getRoot().getElementsById$(t).toPromise())
            i.setCaptchaToken(e);
          this.hasCaptchaToken$.next(!0);
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              null != this.captchaToken &&
              (t.captchaToken = this.captchaToken),
            t
          );
        }
        blockSubmit$() {
          return this.hasCaptchaToken$.pipe((0, h.U)((e) => !e));
        }
        async getCustomConfirmComponent(e) {
          let t;
          return (
            (t = (await i.e(262).then(i.bind(i, 46170))).default),
            { component: t, data: { callback: (e) => this.setCaptchaToken(e) } }
          );
        }
      }
      class He extends C {
        captchaToken;
        constructor(e, t, i, s) {
          super(e, t, i, s), (this.captchaToken = null);
        }
        setCaptchaToken(e) {
          this.captchaToken = e;
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              null != this.captchaToken &&
              (t.captchaToken = this.captchaToken),
            t
          );
        }
      }
      i(19603);
      var We = i(75009);
      class Ze extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName = "MI.Common.DynamicForms.Models.DFDataTable");
        }
        setData(e, t) {
          super.setData(e, t), this.setKey(e, "selectedRows", "selectedRows");
        }
        setSelectedRows(e) {
          (this.selectedRows = e), this.selectedRows$.next(e);
        }
        getSelectedRows() {
          return this.selectedRows;
        }
        getData(e) {
          const t = super.getData(e);
          return (
            null != t &&
              null != this.selectedRows &&
              (t.selectedRows = this.selectedRows.map((e) => ({ data: e }))),
            t
          );
        }
        rows$(e, t, i) {
          if (null != this.definition.settings.dataSourceCalculationId) {
            const s = (0, We.makeBackendFunc)("resolveDatasourceLookup"),
              a =
                this.definition.settings.calculations[
                  this.definition.settings.dataSourceCalculationId
                ][0],
              n = (0, c.a)(e, t, i).pipe(
                (0, h.U)(([e, t, i]) => ({
                  SkipRows: e,
                  OnlyFirstRows: t,
                  Sort: i,
                }))
              );
            return s(
              a,
              {
                node: this,
                rootCalc: a,
                ...this.calculationContext,
                debug: !1,
              },
              n
            ).result.pipe(
              (0, h.U)(({ result: e, otherData: t }) => ({
                data: e?.pagedRows ?? [],
                dataCount: e?.unpagedRowCount ?? 0,
              }))
            );
          }
          return (0, c.a)(e, t, i).pipe(
            (0, m.w)(async ([e, t, i]) => {
              const s = await this.invokeAsync(
                "resolveDatatableData",
                JSON.stringify({ skip: e, top: t, sort: i })
              );
              return {
                data: s.data.map((e) =>
                  e.reduce((e, t) => ((e[t.Key] = t.Value), e), {})
                ),
                dataCount: s.dataCount,
              };
            })
          );
        }
      }
      class Ge extends C {
        constructor(e, t, i, s) {
          super(e, t, i, s),
            (this.typeName =
              "MI.Common.DynamicForms.Models.DFDataTableSelectedColumnData");
        }
        valueList$() {
          const e = this.parentElement,
            t = e.definition.settings.tableColumns.findIndex(
              (e) => e.datasourceColumn == this.definition.settings.column
            );
          return e.selectedRows$.pipe((0, h.U)((e) => e.map((e) => e[t])));
        }
        effectiveValueList$() {
          return this.valueList$();
        }
      }
      function qe(e, t, i, s) {
        switch (i.type) {
          case "AddressDef":
            return new F(e, t, i, s);
          case "CalculatedDef":
            return new L(e, t, i, s);
          case "ValidationDef":
            return new R(e, t, i, s);
          case "CheckGroupDef":
            return new U(e, t, i, s);
          case "ContactPageTemplateDef":
            return new B(e, t, i, s);
          case "ContentDef":
            return new H(e, t, i, s);
          case "ContentTemplatePageDef":
            return new W(e, t, i, s);
          case "DatePickerDef":
            return new Z(e, t, i, s);
          case "DisplayElementDef":
            return new j(e, t, i, s);
          case "DisplayIfOtherHasValueDef":
            return new q(e, t, i, s);
          case "DropDownListDef":
            return new Q(e, t, i, s);
          case "ExtraDataShimDef":
            return new ee(e, t, i, s);
          case "FileDef":
            return new te(e, t, i, s);
          case "ForEachChildIdDef":
            return new ae(e, t, i, s);
          case "ForEachDef":
            return new ie(e, t, i, s);
          case "FormAlternativeDef":
            return new ne(e, t, i, s);
          case "FormDef":
            return new le(e, t, i, s);
          case "LandingPageTemplateDef":
            return new re(e, t, i, s);
          case "PageDef":
            return new pe(e, t, i, s);
          case "StateFormDef":
            return new ge(e, t, i, s);
          case "PdfAlternativeDef":
            return new ve(e, t, i, s);
          case "RadioGroupDef":
            return new be(e, t, i, s);
          case "RegionDef":
            return new ye(e, t, i, s);
          case "RequireValueIfOtherHasValueDef":
            return new Ce(e, t, i, s);
          case "SectionDef":
            return new we(e, t, i, s);
          case "TextboxDef":
            return new Se(e, t, i, s);
          case "DataTableDef":
            return new Ze(e, t, i, s);
          case "DataTableSelectedColumnDataDef":
            return new Ge(e, t, i, s);
          case "ReceiptContentDef":
            return new De(e, t, i, s);
          case "DisplayStampedPdfDef":
            return new Pe(e, t, i, s);
          case "DisplayGeneratedPdfDef":
            return new Ie(e, t, i, s);
          case "FileDocumentDef":
            return new $e(e, t, i, s);
          case "CompletionRedirectDef":
            return new Ve(e, t, i, s);
          case "CommonCheckoutDef":
            return new Le(e, t, i, s);
          case "SubmitTriggerDef":
            return new Oe(e, t, i, s);
          case "WorkflowSwitchDef":
            return new Ue(e, t, i, s);
          case "LexmarkIntegrationDef":
            return new Ae(e, t, i, s);
          case "CompletionEmailerDef":
            return new Me(e, t, i, s);
          case "SignatureDef":
            return new Ee(e, t, i, s);
          case "CaptchaControlDef":
            return new Be(e, t, i, s);
          case "CaptchaBehaviorDef":
            return new He(e, t, i, s);
          default:
            return new C(e, t, i, s);
        }
      }
      var je = i(41821),
        Ke = i(80533),
        ze = i(19788);
      function Je(e) {
        const t = new o.X(null);
        return (
          new s.ZP({
            computed: { value: () => e() },
            watch: {
              value: {
                handler(e) {
                  t.next(e);
                },
                immediate: !0,
              },
            },
          }),
          t
        );
      }
      function Xe(e, t) {
        let i = e.formData ? e.formData.getElementByVmId(t.vmId || t) : null;
        return (
          null == i &&
            e.adminPreview &&
            (i = e.baseFormData
              ? e.baseFormData.getElementByVmId(t.vmId || t)
              : null),
          i
        );
      }
      function Ye(e, t, i) {
        if (e.adminPreview) {
          const e = null == t ? [] : t.children,
            s = null == i ? [] : i.children,
            a = [];
          let n = 0;
          const l = Math.max(s.length, e.length);
          for (n = 0; n < l; n++) {
            if (n < s.length) {
              const e = s[n];
              a.push(e);
            }
            if (n < e.length) {
              const t = e[n];
              s.some((e) => e.id == t.id) || a.push(t);
            }
          }
          return a;
        }
        return i ? i.children : null;
      }
      function Qe(e) {
        return e.adminPreview;
      }
      function et(e) {
        return Qe(e) && e.showAdminDiff;
      }
      function tt(e, t) {
        return e.formData.getElementsByFilter(t);
      }
      function it(e) {
        const t = Je(() => at(e)),
          i = Je(() => (null == e.formData ? null : e.formData.status)),
          s = Je(() => e.segment);
        return (0, c.a)([t, i, s]).pipe(
          (0, h.U)((t) => {
            let [i, s, a] = t;
            if (null == i) return [];
            if (e.adminPreview) return i;
            const n = e.adminReview ? "Admin" : "Public";
            return i
              .filter((e) => e.isVisible(n, s, a))
              .sort((e, t) => {
                const i = e.isEditable(n, s, a);
                if (i == t.isEditable(n, s, a)) {
                  const i = e.definition.settings.segment,
                    s = t.definition.settings.segment;
                  return i == s ? 0 : i < s ? -1 : 1;
                }
                return i ? 1 : -1;
              });
          })
        );
      }
      function st(e) {
        const t = at(e) || [];
        return e.adminPreview
          ? t
          : t
              .filter((t) =>
                t.isVisible(
                  e.adminReview ? "Admin" : "Public",
                  e.formData.status,
                  e.segment
                )
              )
              .sort((t, i) => {
                const s = t.isEditable(
                  e.adminReview ? "Admin" : "Public",
                  e.formData.status,
                  e.segment
                );
                if (
                  s ==
                  i.isEditable(
                    e.adminReview ? "Admin" : "Public",
                    e.formData.status,
                    e.segment
                  )
                ) {
                  const e = t.definition.settings.segment,
                    s = i.definition.settings.segment;
                  return e == s ? 0 : e < s ? -1 : 1;
                }
                return s ? 1 : -1;
              });
      }
      function at(e) {
        return (Ye(e, e.baseFormData, e.formData) || [])
          .filter((e) => "PageDef" == e.definition.type)
          .filter((t) => !!et(e) || !0 !== t.isBase);
      }
      function nt(e, t) {
        const i = t.availableSegments;
        return null != i
          ? t.adminPreview
            ? i
            : i.filter((e) => e.isAssignedUser)
          : null;
      }
      const lt = {
        namespaced: !0,
        state: () => ({
          segment: null,
          page: null,
          formData: null,
          formIdPromise: null,
          baseFormData: null,
          formDataLoading: null,
          adminPreview: null,
          adminReview: null,
          testMode: null,
          adminEditElementIds: [],
          canAddComments: !1,
          canChangeStatus: !1,
          canUpgradeDefinition: !1,
          canReplyToComments: !1,
          canAdminEditData: !1,
          anonymousUser: !1,
          showAdminDiff: !1,
          pendingActions: new Set(),
          isSaveDisabledOnSectionChange: !1,
          schemaLabelMappingPromise: null,
          canDeleteSubmissions: !1,
        }),
        getters: {
          getElementByVmId: (e) => (t) => Xe(e, t),
          getValueByVmId: (e, t) => (e) => {
            const i = t.getElementByVmId(e);
            return null == i ? null : i.value();
          },
          getChildrenByVmId: (e, t) => (i) => {
            let s = t.getElementByVmId(i),
              a = s.isBase ? s.baseLink : s,
              n = s.isBase ? s : s.baseLink;
            return Ye(e, n, a);
          },
          isAdminEditingById: (e, t) => (t) =>
            e.adminEditElementIds.includes(t),
          getElementsById$: (e) => (t, i) =>
            e.formData ? e.formData.getElementsById$(t, i) : (0, u.D)([null]),
          getValuesById$: (e, t) => (e, i) =>
            t
              .getElementsById$(e, i)
              .pipe(
                (0, h.U)((e) =>
                  null == e
                    ? null
                    : (0, c.a)(e.map((e) => e.effectiveValueList$())).pipe(
                        (0, h.U)((e) => Array.prototype.concat.apply([], e))
                      )
                )
              ),
          getElementPathString: (e) => (t) =>
            (function (e, t) {
              let i = "";
              const s = e.formData;
              if (s != t) {
                const e = s.getElementPathByVmId(t.vmId);
                ({ elementPath: i } = e.slice(1, 1e6).reduce(
                  (e, t) => ({
                    parent: t,
                    elementPath:
                      e.elementPath +
                      ".Children[" +
                      e.parent.children.indexOf(t) +
                      "]",
                  }),
                  { parent: s, elementPath: "FormModel" }
                ));
              }
              return i;
            })(e, t),
          viewTypes: (e, t) => e.formData.viewTypes,
          directLinkTemplates: (e, t) =>
            tt(e, (e) => "DirectLinkTemplateDef" == e.definition.type),
          allFileElements: (e, t) =>
            tt(e, (e) => "FileDef" == e.definition.type),
          allElementsWithFileComments: (e, t) =>
            tt(
              e,
              (e) =>
                null != e.comments &&
                e.comments.some((e) => null != e.files && e.files.length > 0)
            ),
          allElementsWithHistory: (e, t) =>
            tt(e, (e) => null != e.history && e.history.length > 0),
          allHistoryEntries: (e, t) =>
            t.allElementsWithHistory
              .map((e) => e.history.map((t) => ({ ...t, element: e })))
              .flat(),
          segments: (e, t) =>
            (function (e, t) {
              return null == e.formData
                ? null
                : e.formData
                    .getElementsByFilter(
                      (e) => "StateFormDef" == e.definition.type
                    )
                    .slice()
                    .sort((e, t) =>
                      e.completedDate < t.completedDate
                        ? -1
                        : e.completedDate > t.completedDate
                        ? 1
                        : 0
                    );
            })(e),
          availableSegments: (e, t) =>
            (function (e, t) {
              const i = t.visibleSegments;
              return null != i
                ? t.adminPreview
                  ? i
                  : i.filter((e) => e.definition.settings.preStatus == t.status)
                : null;
            })(0, t),
          visibleSegments: (e, t) =>
            (function (e, t) {
              const i = t.segments;
              return null != i && i.length > 0
                ? t.adminPreview
                  ? i
                  : i.filter(
                      (t) =>
                        (!0 === t.isAssignedUser ||
                          ((null === t.isAssignedUser || e.adminReview) &&
                            (t.definition.settings.type == ue.Z.Any ||
                              (t.definition.settings.type == ue.Z.Group &&
                                t.isInGroup)))) &&
                        t.definition.settings.mode == (e.adminReview ? 1 : 0)
                    )
                : null;
            })(e, t),
          completedSegments: (e, t) =>
            (function (e, t) {
              const i = t.segments;
              return null != i && i.length > 0
                ? i.filter(
                    (e) =>
                      null != e.completedDate &&
                      "Returned" != e.status &&
                      "ReturnedPending" != e.state
                  )
                : null;
            })(0, t),
          activeSegments: (e, t) => nt(0, t),
          adminPreview: (e) => Qe(e),
          adminReview: (e) => e.adminReview,
          testMode: (e) => e.testMode,
          canAddComments: (e) => e.canAddComments,
          canChangeStatus: (e) => e.canChangeStatus,
          canDeleteSubmissions: (e) => e.canDeleteSubmissions,
          canUpgradeDefinition: (e) => e.canUpgradeDefinition,
          canReplyToComments: (e) => e.canReplyToComments,
          canAdminEditData: (e) => e.canAdminEditData,
          anonymousUser: (e) => e.anonymousUser,
          showChanges: (e, t) => et(e),
          hasChanges: (e, t) =>
            !(!t.adminPreview || null == e.formData) &&
            "changed" == e.formData.baseChangeRecursive(),
          formChanges: (e, t) =>
            t.adminPreview && null != e.formData
              ? null != e.formData.diffBaseElement()
              : null,
          isWorkflow: (e, t) =>
            (function (e, t) {
              return null == e.formData
                ? null
                : e.formData.getElementsByFilter(
                    (e) => "WorkflowDef" == e.definition.type
                  ).length > 0;
            })(e),
          isSubmittable$: (e, t) =>
            Je(() => t.pages).pipe(
              (0, m.w)((e) => (0, c.a)(e.map((e) => e.permitLaterPages$()))),
              (0, h.U)((e) => e.every((e) => e))
            ),
          isOffline: (e, t) => {
            if (null != e.formData) {
              if (t.adminPreview || t.adminReview) return !1;
              if (t.status == Ke.O7) return !1;
              const i = e.formData.definition.settings,
                s = i.availability;
              if (s == je.Z.Online) return !1;
              if (s == je.Z.Offline) return !0;
              if (s == je.Z.Scheduled || null == s) {
                const e = new Date(),
                  t = (e) =>
                    new Date(
                      e.replace(/\s.*$/, "").replace(/([-+]\d\d)$/, "$1:00")
                    ),
                  s = i.effectiveStartDate,
                  a = i.effectiveDeadline;
                return (null != s && e < t(s)) || (null != a && e >= t(a));
              }
              return !1;
            }
            return !1;
          },
          endUserStatuses: (e) =>
            (function (e) {
              return e.formData.definition.effectiveStatuses
                .filter((e) => "User" == e.mode)
                .map((e) => e.value);
            })(e),
          formId: (e) => (e.formData ? e.formData.formId : null),
          formTenantCode: (e) =>
            e.formData ? e.formData.definition.formTenant : null,
          status: (e) => (e.formData ? e.formData.status : null),
          title: (e) =>
            e.formData ? e.formData.definition.settings.label : null,
          offlineContent: (e) =>
            e.formData ? e.formData.definition.settings.offlineContent : null,
          mustLogin: (e, t) =>
            e.formData
              ? e.formData.definition.settings.mustLogin ||
                (nt(0, t) || []).some((e) => e.definition.settings.mustLogin)
              : null,
          formSettings: (e) =>
            e.formData ? e.formData.definition.settings : null,
          isViewOnly: (e) =>
            e.formData ? !!e.formData.definition.settings.isViewOnly : null,
          isPageViewOnly: (e, t) => (e) => {
            const i = t.pages[e - 1];
            return t.isPageObjViewOnly(i);
          },
          isPageObjViewOnly$: (e, t) => (e) =>
            t.isViewOnly ? (0, u.D)([!0]) : t.isPageObjControlsViewOnly$(e),
          isPageObjControlsViewOnly$: (e, t) => (i) => {
            if (null == i) return (0, u.D)([null]);
            if (e.adminPreview) return (0, u.D)([!1]);
            const s = Je(() => t.status),
              a = Je(() => e.segment);
            return (0, c.a)([s, a]).pipe(
              (0, h.U)((t) => {
                let [s, a] = t;
                return (
                  !!i.isViewOnly(e.adminReview ? "Admin" : "Public", s, a) ||
                  null
                );
              })
            );
          },
          isPageObjViewOnly: (e, t) => (i) =>
            !!t.isViewOnly ||
            (null == i
              ? null
              : !e.adminPreview &&
                (!!i.isViewOnly(
                  e.adminReview ? "Admin" : "Public",
                  t.status,
                  e.segment
                ) ||
                  null)),
          isPageObjEditable: (e, t) => (i) =>
            !t.isViewOnly &&
            (null == i
              ? null
              : !!e.adminPreview ||
                !!i.isEditable(
                  e.adminReview ? "Admin" : "Public",
                  t.status,
                  e.segment
                ) ||
                null),
          pages: (e) => at(e),
          currentStatusLabel: (e) => {
            if (e.formData) {
              const t = e.formData.definition.effectiveStatuses.find(
                (t) => t.value == e.formData.status
              );
              return t.adminText || t.value;
            }
            return null;
          },
          statusLabel: (e) => (t) => {
            if (e.formData) {
              const i = e.formData.definition.effectiveStatuses.find(
                (e) => e.value == t
              );
              return i.adminText || i.value;
            }
            return null;
          },
          isClientValidationOnly: (e) =>
            (Ye(e, e.baseFormData, e.formData) || [])
              .filter((t) => !!et(e) || !0 !== t.isBase)
              .some((e) => "DynamicContentTemplateDef" == e.definition.type),
          possibleStatuses: (e) =>
            e.formData
              ? e.formData.definition.effectiveStatuses.filter(
                  (t) => "Deleted" != t.value && t.value != e.formData.status
                )
              : [],
          visiblePages: (e) => st(e),
          visiblePages$: (e) => it(e),
          enabledPages$: (e, t) =>
            (function (e, t) {
              return it(e).pipe(
                (0, m.w)((e) =>
                  (0, c.a)(
                    (e || []).map((e) => {
                      const i = e.isEnabled$
                          ? e.isEnabled$("Edit")
                          : (0, u.D)([!e.isEnabled || e.isEnabled("Edit")]),
                        s = e.permitLaterPages$
                          ? e.permitLaterPages$()
                          : (0, u.D)([!0]),
                        a = t.isPageObjViewOnly$(e);
                      return (0, c.a)([i, s, a]).pipe(
                        (0, h.U)((t) => {
                          let [i, s, a] = t;
                          return [e, i, s, a];
                        })
                      );
                    })
                  )
                ),
                (0, h.U)((e) => {
                  const t = e.filter((e) => e[1]),
                    i = t.findIndex((e) => !e[2] && !e[3]);
                  return i >= 0 && t.splice(i + 1), t.map((e) => e[0]);
                })
              );
            })(e, t),
          enabledPagesPromise: (e, t) =>
            t.enabledPages$.pipe((0, f.P)()).toPromise(),
          status$: (e, t) => Je(() => t.status),
          segment$: (e, t) => Je(() => e.segment),
          comments: (e) => (e.formData ? e.formData.comments : null),
          pendingActionPromise: (e) =>
            Promise.all(Array.from(e.pendingActions)),
          activeModal: (e) => e.activeModal,
        },
        mutations: {
          setAdminEditing(e, t) {
            let { vmId: i, enabled: s } = t;
            s
              ? e.adminEditElementIds.includes(i) ||
                e.adminEditElementIds.push(i)
              : e.adminEditElementIds.includes(i) &&
                (e.adminEditElementIds = e.adminEditElementIds.filter(
                  (e) => e != i
                ));
          },
          clearAdminEditing(e) {
            e.adminEditElementIds = [];
          },
          setSegment(e, t) {
            e.segment = t;
          },
          setValueByVmId(e, t) {
            Xe(e, t.id).setValue(t.value);
          },
          setFileStatusByVmId(e, t) {
            Xe(e, t.id).uploadStatus = t.status;
          },
          setFileInfoByVmId(e, t) {
            Xe(e, t.id).setFileData(t, !0);
          },
          addForEachItem(e, t) {
            Xe(e, t).addItem();
          },
          removeForEachItem(e, t) {
            Xe(e, t.forEachVmId).removeItem(t.item, t.calculatedItems);
          },
          setForEachChildren(e, t) {
            const i = Xe(e, t.forEachVmId);
            null != i && i.setCalculationItems(t.ids);
          },
          toggleAdminDiff(e) {
            e.showAdminDiff = !e.showAdminDiff;
          },
          _formDataIsLoading(e) {
            (e.formDataLoading = !0), (e.formData = null);
          },
          _formDataLoaded(e, t) {
            (e.segment = t.segment),
              (e.formData = t.formData),
              (e.baseFormData = t.baseFormData),
              (e.formDataLoading = !1),
              (e.adminPreview = t.adminPreview),
              (e.adminReview = t.adminReview),
              (e.testMode = t.testMode),
              (e.canAddComments = t.canAddComments),
              (e.canChangeStatus = t.canChangeStatus),
              (e.canUpgradeDefinition = t.canUpgradeDefinition),
              (e.canReplyToComments = t.canReplyToComments),
              (e.canAdminEditData = t.canAdminEditData),
              (e.anonymousUser = t.anonymousUser),
              (e.canDeleteSubmissions = t.canDeleteSubmissions),
              (e.adminEditElementIds = []);
          },
          _formDataUpdated(e, t) {
            e.formData.setData(t);
          },
          _setFormId(e, t) {
            e.formData.formId = t;
          },
          _setAllPagesStatus(e, t) {
            st(e).forEach((e) => {
              e.setStatus && e.setStatus(t);
            });
          },
          _addPendingAction(e, t) {
            e.pendingActions.add(t);
          },
          _removePendingAction(e, t) {
            e.pendingActions.delete(t);
          },
          _addComment(e, t) {
            let { elementData: i, comment: s } = t;
            i.comments.push(s);
          },
          _setCommentVisibility(e, t) {
            let { elementData: i, commentId: s, visibleToSubmitter: a } = t;
            i.comments.find((e) => e.id == s).visibleToSubmitter = a;
          },
          _makeUneditable(e) {
            (e.canAddComments = !1),
              (e.canChangeStatus = !1),
              (e.canUpgradeDefinition = !1),
              (e.canReplyToComments = !1),
              (e.canAdminEditData = !1),
              (e.anonymousUser = !1);
          },
          _setSchemaLabelMapping(e, t) {
            e.schemaLabelMappingPromise = t;
          },
        },
        actions: {
          _trackAction(e, t) {
            e.commit("_addPendingAction", t);
            const i = (i) => (e.commit("_removePendingAction", t), i);
            return t.then(i, i), t;
          },
          async _formPageDataUpdated(e, t) {
            const i = t.data;
            i.formHash != e.state.formData.formHash
              ? e.getters.adminReview
                ? e.dispatch("loadAdminReviewFormData", {
                    ...i,
                    areaCode: i.formTenantCode,
                  })
                : e.dispatch("loadFormData", {
                    ...i,
                    areaCode: i.formTenantCode,
                  })
              : null == t.page
              ? e.state.formData.setData(i, !1)
              : t.page >= 0 &&
                (e.state.formData.setData(i, !0),
                e.getters.pages[t.page - 1].setData(i.children[t.childIndex]));
          },
          async _setPageStatus(e, t) {
            e.getters.pages[t.page - 1].setStatus(t.status);
          },
          async getOrCreateFormId(e, t) {
            if (e.getters.isViewOnly || e.getters.adminPreview)
              return (
                null == e.state.fakeFormId && (e.state.fakeFormId = (0, n.Z)()),
                e.state.fakeFormId
              );
            {
              let t = e.getters.formId;
              return (
                null == t &&
                  (null == e.state.formIdPromise &&
                    (e.state.formIdPromise = e.dispatch("saveFormPage", {
                      page: -1,
                    })),
                  await e.state.formIdPromise,
                  (t = e.getters.formId)),
                t
              );
            }
          },
          uploadExternalFile: async (e, t) =>
            e.dispatch(
              "_trackAction",
              (async () => {
                const { newFile: i, vmId: a, isComment: l } = t;
                let r = e.getters.formId;
                null == r &&
                  (await e.dispatch("saveFormPage", { page: -1 }),
                  (r = e.getters.formId));
                const o = (0, n.Z)(),
                  u = new FormData();
                u.append("formID", r),
                  u.append("asAdmin", e.getters.adminReview),
                  u.append("testMode", e.getters.testMode),
                  u.append("valueID", o),
                  u.append("formFile", i, i.name),
                  l ||
                    e.commit("setFileStatusByVmId", {
                      id: a,
                      status: "in-progress",
                    });
                const c = await e.rootState.urlFetcher(
                    "uploadExternalReference",
                    { areaCode: e.getters.formTenantCode }
                  ),
                  d = () => {
                    l ||
                      (e.commit("setFileStatusByVmId", { id: a, status: "ok" }),
                      e.commit("setFileInfoByVmId", {
                        id: a,
                        valueId: o,
                        contentType: i.type,
                        fileName: i.name,
                        fileSize: i.size,
                        hasValue: !0,
                      }));
                  },
                  m = (t) => {
                    l ||
                      e.commit("setFileStatusByVmId", {
                        id: a,
                        status: t ? "too-large" : "fail",
                      });
                  },
                  h = () => {
                    var t = new FileReader();
                    t.readAsText(i),
                      t.addEventListener("load", async () => {
                        try {
                          const s = c.replace(
                              "UploadExternalReference",
                              "ServiceWorkerOfflineUploadReference"
                            ),
                            a = {
                              formId: r,
                              valueId: o,
                              fileName: i.name,
                              mimeType: i.type,
                              data: t.result,
                            };
                          200 ==
                          (
                            await (0, X.jf)(e, s, {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              credentials: "same-origin",
                              body: JSON.stringify(a),
                            })
                          ).status
                            ? d()
                            : m();
                        } catch (e) {
                          throw (m(), e);
                        }
                      }),
                      t.addEventListener("abort", m),
                      t.addEventListener("error", m);
                  };
                let f;
                try {
                  f = await (0, X.jf)(e, c, {
                    method: "POST",
                    credentials: "same-origin",
                    body: u,
                  });
                } catch (e) {
                  if (!(0, ze.dV)()) throw (m(), e);
                  return void (await h());
                }
                return (
                  200 == f.status
                    ? 1 == (await f.json())?.ThreatDetected
                      ? (() => {
                          if (l) {
                            const t = e.getters.getElementByVmId(a);
                            s.ZP.set(t, "isThreat", !0);
                          } else
                            e.commit("setFileStatusByVmId", {
                              id: a,
                              status: "avScanFail",
                            });
                        })()
                      : d()
                    : (0, ze.E4)(f)
                    ? await h()
                    : m(413 == f.status),
                  o
                );
              })()
            ),
          async submitForm(e, t) {
            const i = async (e) => {
              let t = (
                await Promise.all(
                  e
                    .getElementsByFilter((e) => e.isPostSubmitRedirect)
                    .map((e) => e.getPostSubmitRedirect())
                )
              ).filter((e) => null != e);
              const i = await e.valid$(!0);
              return (
                await new Promise((e) => setTimeout(e, 0)),
                {
                  Result: i.getValue() ? (t.length > 0 ? 3 : 2) : 0,
                  RedirectUrl: t.length > 0 ? t[0] : null,
                }
              );
            };
            if (e.getters.isViewOnly) throw new Error("Readonly");
            if (e.getters.adminPreview)
              return e.state.formData.markEdited(), await i(e.state.formData);
            const s = await e.dispatch("saveFormPage", {
              page: null,
              isSubmit: !0,
              triggerKey: t,
            });
            return null != s
              ? s
              : (0, ze.dV)()
              ? await i(e.state.formData)
              : null;
          },
          async selfAssignSegment(e, t) {
            let { segment: i, verifyData: s } = t;
            const a = await e.dispatch("invokeForm", {
              type: "SelfAssign",
              target: i,
              segment: i,
              data: s,
              assign: !0,
            });
            return a.Success && e.commit("setSegment", i), a.FailureMessages;
          },
          async saveAllAdminEdits(e) {
            const t = [];
            for (let i of e.state.adminEditElementIds) {
              const s = e.getters.getElementByVmId(i),
                a = e.getters.getElementPathString(s),
                n = s.getData();
              t.push({
                type: "AdminEdit",
                target: s.id,
                targetPath: a,
                data: n,
              });
            }
            for (let i of t) await e.dispatch("invokeForm", i);
            e.commit("clearAdminEditing");
          },
          invokeForm(e, t) {
            let {
              segment: i,
              type: s,
              target: a,
              targetPath: n,
              targetPathArray: l,
              data: r,
              assign: o,
              noWrite: u,
            } = t;
            return e.dispatch(
              "_trackAction",
              (async () => {
                if (e.getters.adminPreview) throw new Error("Admin preview");
                if (e.getters.isViewOnly) throw new Error("Readonly");
                const t = {
                    formID: e.getters.formId,
                    formName: e.state.formData.formName,
                    formVersion: e.state.formData.formVersion,
                    testMode: e.getters.testMode,
                    asAdmin: e.getters.adminReview,
                    segment: i,
                    assign: o,
                    noWrite: u,
                    type: s,
                    target: a,
                    targetPath: n,
                    targetPathArray: l,
                    data: JSON.stringify(r),
                  },
                  c = await e.rootState.urlFetcher("invokeDraft", {
                    areaCode: e.getters.formTenantCode,
                    formId: t.formID,
                  }),
                  d = await (0, X.jf)(e, c, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify(t),
                  });
                if (200 == d.status) {
                  const t = await d.json(),
                    i = t.Form;
                  return (
                    await e.dispatch("_formPageDataUpdated", {
                      data: i,
                      page: null,
                      childIndex: null,
                    }),
                    t.Result
                  );
                }
                if (!(0, ze.E4)(d))
                  throw new Error(
                    "Not 200 OK: " + d.status + " " + d.statusText
                  );
              })()
            );
          },
          saveFormPage(e, t) {
            let {
              page: i,
              isSaveAndExit: s,
              isSubmit: a,
              triggerKey: l,
              skipSession: r,
            } = t;
            return (
              e.commit("hasSession", !0, { root: !0 }),
              e.dispatch(
                "_trackAction",
                (async () => {
                  if (e.getters.adminPreview) throw new Error("Admin preview");
                  if (e.getters.isViewOnly || e.getters.isPageViewOnly(i))
                    throw new Error("Readonly");
                  const t = e.state.formData;
                  let o;
                  const u = e.getters.pages;
                  let c = null;
                  if (null == i || s) {
                    if (t.children.some((e) => "Saving" == e.status)) return;
                    const a = e.getters.visiblePages;
                    (o = t.getData(!0)), (o.children = []);
                    for (let n = 0; n < u.length; n++) {
                      const l = u[n];
                      if (
                        a.includes(l) &&
                        !e.getters.isPageObjViewOnly(l) &&
                        (!s || "NotStarted" != l.status || n + 1 == i)
                      ) {
                        await e.dispatch("_setPageStatus", {
                          page: n + 1,
                          status: "Saving",
                        });
                        const i = t.children.indexOf(l);
                        o.children[i] = l.getData();
                      }
                    }
                    for (let i = 0; i < t.children.length; i++) {
                      const s = t.children[i];
                      s.isSegment &&
                        s.isSegment(e.state.segment) &&
                        (o.children[i] = s.getData());
                    }
                    s && (i = null);
                  } else if (
                    ((c = t.children.indexOf(u[i - 1])),
                    (o = t.getData(!0)),
                    i >= 0)
                  ) {
                    const s = u[i - 1];
                    if ("Saving" == s.status) return;
                    if (e.getters.isPageObjViewOnly(s)) return;
                    if (!e.getters.visiblePages.includes(s)) return;
                    await e.dispatch("_setPageStatus", {
                      page: i,
                      status: "Saving",
                    }),
                      (o.children = []),
                      (o.children[c] = t.children[c].getData());
                  } else {
                    if (t.children.some((e) => "Saving" == e.status)) return;
                    (c = -1), (o.children = []);
                  }
                  let d = t.formId;
                  null == d && (d = (0, n.Z)());
                  const m = {
                      FormModel: o,
                      formHash: o.formHash,
                      formID: d,
                      formName: o.formName,
                      formVersion: o.formVersion,
                      testMode: e.getters.testMode,
                      index: c,
                      asAdmin: e.getters.adminReview,
                      sourceStatus: t.status,
                      segment: e.state.segment,
                      submitType: l,
                    },
                    h = await e.rootState.urlFetcher(
                      a
                        ? "saveFullAndSubmitDraft"
                        : "saveDraft" + (null != i ? "Page" : "Full"),
                      {
                        formId: d,
                        formName: t.formName,
                        formVersion: t.formVersion,
                        formHash: t.formHash,
                        testMode: e.getters.testMode,
                        page: c,
                        areaCode: e.getters.formTenantCode,
                        asAdmin: m.asAdmin,
                        sourceStatus: m.sourceStatus,
                        segment: m.segment,
                        submitType: m.submitType,
                      }
                    ),
                    f = await (0, X.jf)(e, h, {
                      method: "POST",
                      headers: {
                        ...(r ? { "X-Session-Refresh": "skip" } : {}),
                        "Content-Type": "application/json",
                      },
                      credentials: "same-origin",
                      body: JSON.stringify(m),
                    });
                  if (200 == f.status) {
                    const s = await f.json(),
                      n = a ? s.Form : s;
                    return (
                      await e.dispatch("_formPageDataUpdated", {
                        data: n,
                        page: i,
                        childIndex: c,
                      }),
                      null == t.formId && e.commit("_setFormId", d),
                      s
                    );
                  }
                  if (!(0, ze.E4)(f))
                    throw new Error(
                      "Not 200 OK: " + f.status + " " + f.statusText
                    );
                  null != i
                    ? await e.dispatch("_setPageStatus", {
                        page: i,
                        status: null,
                      })
                    : e.commit("_setAllPagesStatus", null);
                })()
              )
            );
          },
          deleteDraft(e, t) {
            let { asAdmin: i } = t;
            return e.dispatch(
              "_trackAction",
              (async () => {
                if (e.getters.adminPreview) throw new Error("Admin preview");
                if (!i && e.getters.adminReview)
                  throw new Error("Admin review");
                if (e.getters.isViewOnly) throw new Error("Readonly");
                const t = e.state.formData.formId;
                null != t &&
                  (await (0, ze.R5)(
                    e,
                    e.rootState.urlFetcher,
                    t,
                    i,
                    e.getters.formTenantCode
                  ));
              })()
            );
          },
          async returnDraft(e, t) {
            let { segment: i, comment: s } = t;
            const a = await e.dispatch("invokeForm", {
              type: "ReturnTo",
              target: i,
              segment: i,
              data: { Comment: s },
            });
            return { success: a.Success, messages: a.FailureMessages };
          },
          async resendEmail(e, t) {
            let { segment: i, comment: s, eventType: a } = t;
            const n = await e.dispatch("invokeForm", {
              type: "Resend" + a,
              target: i,
              segment: "Notification" == a ? null : i,
              data: { Comment: s },
            });
            return { success: n.Success, messages: n.FailureMessages };
          },
          async workflowManualOverride(e, t) {
            let { type: i, data: s } = t;
            const a = e.state.formData.getElementsByFilter(
                (e) => "WorkflowDef" == e.definition.type
              ),
              n = await e.dispatch("invokeForm", {
                type: i,
                target: a[0].id,
                segment: null,
                data: s,
              });
            return { success: n.Success, messages: n.FailureMessages };
          },
          async workflowManualOverrideGetPossibleUpgradeRevisions(e) {
            const t = e.state.formData.getElementsByFilter(
                (e) => "WorkflowDef" == e.definition.type
              ),
              i = await e.dispatch("invokeForm", {
                type: "ListPossibleDefinitionUpgradeRevisions",
                target: t[0].id,
                segment: null,
                data: null,
              });
            return {
              success: i.Success,
              messages: i.FailureMessages,
              revisions: i.Revisions,
            };
          },
          async loadFormData(e, t) {
            const { formId: i } = t;
            let {
              areaUrlSlug: s,
              areaCode: a,
              formHash: n,
              formName: l,
              formVersion: r,
              testMode: o,
              urlSlug: u,
              externalData: c,
            } = t;
            e.commit("_formDataIsLoading");
            const d = (t, i, s, a, n) =>
                e.rootState
                  .urlFetcher("getPageDefinitionData", {
                    areaCode: t,
                    areaUrlSlug: i,
                    formName: s,
                    formVersion: a,
                    formHash: n,
                    testMode: o,
                  })
                  .then((e) => fetch(e, { credentials: "same-origin" }))
                  .then((e) => e.json()),
              m =
                null == i
                  ? await e.rootState.urlFetcher("getDraftTemplateData", {
                      areaCode: a,
                      areaUrlSlug: s,
                      formName: l,
                      formVersion: r,
                      formHash: n,
                      urlSlug: u,
                      testMode: o,
                      asAdmin: !1,
                    })
                  : await e.rootState.urlFetcher("getDraftData", {
                      areaCode: a,
                      areaUrlSlug: s,
                      formId: i,
                    }),
              h = fetch(m, { credentials: "same-origin" }),
              f =
                null != l && null != r && null != n
                  ? d(a, s, l, r, n)
                  : Promise.resolve(null),
              p = await h;
            if (404 == p.status) throw new Error("NotFound");
            const g = await p.json();
            let v = null;
            try {
              v = await f;
            } catch {}
            (null != v && g.formHash == v.formHash) ||
              (v = await d(
                g.formTenantCode,
                null,
                g.formName,
                g.formVersion,
                g.formHash
              )),
              await e.dispatch("_loadFormData", {
                definition: v,
                page: g,
                canAddComments: !1,
                canChangeStatus: !1,
                canUpgradeDefinition: !1,
                anonymousUser: !1,
                canReplyToComments: !0,
                canAdminEditData: !1,
                adminPreview: !1,
                adminReview: !1,
                externalData: c,
                testMode: null != g.testMode ? g.testMode : "true" == o,
              }),
              null != i && e.commit("hasSession", !0, { root: !0 });
          },
          async loadAdminPreviewFormData(e, t) {
            const {
              definition: i,
              form: s,
              baseDefinition: a,
              baseForm: n,
            } = t;
            await e.dispatch("_loadFormData", {
              definition: i,
              page: s,
              baseDefinition: a,
              canAddComments: !1,
              canChangeStatus: !1,
              canUpgradeDefinition: !1,
              canReplyToComments: !1,
              canAdminEditData: !1,
              anonymousUser: !1,
              canDeleteSubmissions: !1,
              basePage: n,
              adminPreview: !0,
              adminReview: !1,
            });
          },
          async loadAdminReviewFormData(e, t) {
            const {
              areaCode: i,
              areaUrlSlug: s,
              formId: a,
              preloadedData: n,
            } = t;
            let {
              formHash: l,
              formName: r,
              formVersion: o,
              testMode: u,
              urlSlug: c,
            } = t;
            e.commit("_formDataIsLoading");
            const d = (t, a, n) =>
                e.rootState
                  .urlFetcher("getPageDefinitionData", {
                    areaCode: i,
                    areaUrlSlug: s,
                    formName: t,
                    formVersion: a,
                    formHash: n,
                  })
                  .then((e) => fetch(e, { credentials: "same-origin" }))
                  .then((e) => e.json()),
              m =
                null == a
                  ? await e.rootState.urlFetcher("getDraftTemplateData", {
                      areaCode: i,
                      areaUrlSlug: s,
                      formName: r,
                      formVersion: o,
                      formHash: l,
                      urlSlug: c,
                      forceFresh: !0,
                      asAdmin: !0,
                      testMode: u,
                    })
                  : await e.rootState.urlFetcher("adminSearchReviewData", {
                      tenantCode: i,
                      tenantUrlSlug: s,
                      formId: a,
                    }),
              h =
                null != n && null != n.form?.formId && n.form?.formId == a
                  ? n
                  : fetch(m, { credentials: "same-origin" }).then((e) =>
                      e.json()
                    ),
              f =
                null != r && null != o && null != l
                  ? d(r, o, l)
                  : Promise.resolve(null),
              p = null == a ? { form: await h } : await h,
              g = p.form;
            let v = await f;
            (null != v && g.formHash == v.formHash) ||
              (v = await d(g.formName, g.formVersion, g.formHash)),
              await e.dispatch("_loadFormData", {
                definition: v,
                canAddComments: p.canAddComments,
                canChangeStatus: p.canChangeStatus,
                canUpgradeDefinition: p.canUpgradeDefinition,
                canReplyToComments: p.canReplyToComments,
                canAdminEditData: p.canAdminEditData,
                anonymousUser: p.anonymousUser,
                canDeleteSubmissions: p.canDeleteSubmissions,
                page: g,
                adminPreview: !1,
                adminReview: !0,
                testMode: null != g.testMode ? g.testMode : "true" == u,
              });
          },
          getSchemaLabelMapping: async (e) => (
            null == e.state.schemaLabelMappingPromise &&
              e.commit(
                "_setSchemaLabelMapping",
                (async () => {
                  try {
                    const t = await e.rootState.urlFetcher("schemaLabels", {
                        tenantCode: e.getters.formTenantCode,
                      }),
                      i = await (0, X.jf)(e, t, {});
                    if (200 == i.status) return await i.json();
                    throw new Error("error: " + i.status);
                  } catch (t) {
                    throw (e.commit("_setSchemaLabelMapping", null), t);
                  }
                })()
              ),
            e.state.schemaLabelMappingPromise
          ),
          async _loadFormData(e, t) {
            const {
                definition: i,
                page: s,
                baseDefinition: a,
                basePage: n,
                canAddComments: l,
                canChangeStatus: r,
                canUpgradeDefinition: o,
                canReplyToComments: u,
                canAdminEditData: c,
                anonymousUser: d,
                canDeleteSubmissions: m,
                adminPreview: h,
                adminReview: f,
                testMode: p,
                externalData: g,
              } = t,
              v = await e.rootGetters.isFeatureFlagActiveAsync("BulkInvoke"),
              b = await e.rootGetters.isFeatureFlagActiveAsync(
                "NonLiveTextboxes"
              );
            function y(t, i) {
              const s = {
                  fetchXrsf: X.jf.bind(null, e),
                  urlFetcher: (t, i) =>
                    e.rootState.urlFetcher(t, {
                      tenantCode: e.getters.formTenantCode,
                      ...i,
                    }),
                  getOrCreateFormId: () => e.dispatch("getOrCreateFormId"),
                  rootElement: null,
                  timeZone: e.rootGetters.getTimeZone(e.getters.formTenantCode),
                  adminPreview: h,
                  adminReview: f,
                  schemaVersion: t.formSchemaVersion,
                  testMode: p,
                  bulkInvoke: v,
                  nonLiveTextboxes: b,
                },
                a = qe(null, i, t, s);
              return a.appendExternalData(g), a;
            }
            const C = y(i, s);
            let w = null;
            if (
              (h && null != a && ((w = y(a, n)), C.linkBaseElement(w)),
              e.commit("_formDataLoaded", {
                formData: C,
                baseFormData: w,
                adminPreview: h,
                adminReview: f,
                canAddComments: l,
                canChangeStatus: r,
                canUpgradeDefinition: o,
                canReplyToComments: u,
                canAdminEditData: c,
                anonymousUser: d,
                canDeleteSubmissions: m,
                testMode: p,
              }),
              e.getters.segments.length > 0)
            ) {
              const t = e.getters.availableSegments,
                i =
                  1 == t.length || (e.getters.adminPreview && t.length > 0)
                    ? t[0].id
                    : "NOMATCH";
              e.commit("setSegment", i);
            }
          },
          async setCommentVisibility(e, t) {
            const {
                elementId: i,
                elementData: s,
                commentId: a,
                visibleToSubmitter: n,
              } = t,
              l = e.getters.formId,
              r = new FormData();
            r.append("elementId", i),
              r.append("commentId", a),
              r.append("visibleToSubmitter", n);
            const o = await e.rootState.urlFetcher(
                "setDraftCommentVisibility",
                { tenantCode: e.getters.formTenantCode, formId: l }
              ),
              u = await (0, X.jf)(e, o, {
                method: "POST",
                credentials: "same-origin",
                body: r,
              });
            let c = null;
            if (200 != u.status) throw "error: " + u.status;
            if (((c = await u.json()), !0 !== c.Success))
              throw "Error: Success is not true";
            e.commit("_setCommentVisibility", {
              elementData: s,
              commentId: a,
              visibleToSubmitter: n,
            });
          },
          async addCommentAndChangeStatus(e, t) {
            const {
                text: i,
                visibleToSubmitter: s,
                status: a,
                elementId: n,
                elementData: l,
                fileIds: r,
                fileNames: o,
                fileContentTypes: u,
                userName: c,
              } = t,
              d = null == i || /^\s*$/.test(i),
              m = null == a || /^\s*$/.test(a),
              h = null == r || 0 == r.length;
            if (d && m && h) return;
            const f = m ? "N/A" : e.getters.statusLabel(a);
            var p = "Deleted" == a;
            if ("Returned" != a || (!d && s)) {
              if ("Rejected" == a && d)
                alert("You must supply a comment if rejecting a submission.");
              else if (
                !p ||
                confirm(
                  "Are you sure you wish to set this submission to " +
                    f +
                    "? This will PERMANENTLY delete this submission!"
                )
              ) {
                const t = e.getters.formId,
                  p = new FormData();
                if (
                  (p.append("elementId", null != n ? n : ""),
                  p.append("text", null == i ? "" : i),
                  p.append("visibleToSubmitter", s),
                  p.append("json", (!0).toString()),
                  p.append("asAdmin", e.getters.adminReview),
                  p.append("status", null == a ? "" : a),
                  p.append("userName", null == c ? "Anonymous" : c),
                  null != r)
                )
                  for (let e of r) p.append("fileIds", e);
                if (null != o) for (let e of o) p.append("fileNames", e);
                if (null != u) for (let e of u) p.append("fileContentTypes", e);
                const g = await e.rootState.urlFetcher("addDraftComment", {
                    tenantCode: e.getters.formTenantCode,
                    formId: t,
                  }),
                  v = await (0, X.jf)(e, g, {
                    method: "POST",
                    credentials: "same-origin",
                    body: p,
                  });
                let b = null;
                if (200 == v.status) {
                  if (((b = await v.json()), !0 !== b.success))
                    throw "error: success is not true";
                  b.accessible && (b.editable || e.commit("_makeUneditable"));
                } else if (!(0, ze.E4)(v)) throw "error: " + v.status;
                if ((!d && null != l) || !h) {
                  const a = (i) =>
                    e.rootState.urlFetcher("downloadCommentExternalReference", {
                      tenantCode: e.getters.formTenantCode,
                      formId: t,
                      fileId: n || e.state.formData.id,
                      valueId: i,
                    });
                  e.commit("_addComment", {
                    elementData: l,
                    comment: {
                      id: b.id,
                      text: i,
                      visibleToSubmitter: s,
                      date: new Date(),
                      files: await Promise.all(
                        o.map(async (e, t) => ({
                          filename: e,
                          fileUrl: await a(r[t]),
                        }))
                      ),
                      userName: c,
                    },
                  });
                }
                return (
                  m ||
                    null == l ||
                    e.commit("_addComment", {
                      elementData: l,
                      comment: {
                        text: "Changed status to " + f,
                        date: new Date(),
                      },
                    }),
                  b
                );
              }
            } else
              alert(
                "You must supply a visible comment if returning a submission."
              );
          },
        },
      };
      var rt = i(81217),
        ot = i(624);
      const ut = {
        computed: {
          status() {
            return this.data.status;
          },
        },
        mixins: [ot.Z],
        components: { LoadingWheel: rt.Z },
      };
      var ct = i(83262);
      const dt = (0, ct.Z)(
        ut,
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "Saving" == e.status,
                    expression: "status == 'Saving'",
                  },
                ],
              },
              [i("LoadingWheel", { attrs: { width: 100 } })],
              1
            ),
            e._v(" "),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "Saving" != e.status,
                    expression: "status != 'Saving'",
                  },
                ],
              },
              [
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
              ],
              1
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
      var mt = i(35447);
      const ht = {
          data: () => ({ verifyData: {}, verifyFailureMessages: [] }),
          computed: {
            ...(0, a.Se)("page", [
              "segments",
              "availableSegments",
              "activeSegments",
              "adminReview",
              "mustLogin",
            ]),
            mustLoginAndNotLoggedIn() {
              return (
                this.activeSegment.definition.settings.mustLogin &&
                !this.$root.isLoggedIn
              );
            },
            activeSegment() {
              return this.availableSegments[0];
            },
            verifyItems() {
              return this.activeSegment.definition.settings.verifyItems;
            },
          },
          inject: ["forceLogin"],
          methods: {
            async selfAssignSegmentAuto() {
              const e = this.availableSegments;
              1 == e.length && (await this.selfAssignSegment(e[0]));
            },
            async selfAssignSegment(e) {
              this.verifyFailureMessages = await this.$store.dispatch(
                "page/selfAssignSegment",
                { segment: e.id, verifyData: this.verifyData }
              );
            },
          },
        },
        ft = (0, ct.Z)(
          ht,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", [
              1 != e.availableSegments.length
                ? i("div", [
                    i("h1", [e._v("Select a form")]),
                    e._v(" "),
                    i(
                      "div",
                      e._l(e.availableSegments, function (t) {
                        return i(
                          "button",
                          {
                            staticClass:
                              "btn btn-outline-secondary cancel dfNavButton mx-auto",
                            attrs: { type: "button" },
                            on: {
                              click: function (i) {
                                return (
                                  i.preventDefault(), e.selfAssignSegment(t)
                                );
                              },
                            },
                          },
                          [
                            e._v(
                              "\n                " +
                                e._s(t.definition.settings.adminDisplayLabel) +
                                "\n                "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ])
                : i(
                    "div",
                    [
                      e.mustLoginAndNotLoggedIn
                        ? [
                            i("p", [
                              e._v("This cannot be started until you log in."),
                            ]),
                            e._v(" "),
                            i(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary cancel dfNavButton mx-auto",
                                on: { click: e.forceLogin },
                              },
                              [e._v("Log In")]
                            ),
                          ]
                        : i(
                            "form",
                            {
                              on: {
                                submit: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.selfAssignSegmentAuto.apply(
                                      null,
                                      arguments
                                    )
                                  );
                                },
                              },
                            },
                            [
                              e.adminReview
                                ? [
                                    e.activeSegment.isAssignedToOtherUser
                                      ? i("p", [
                                          e._v(
                                            "This is currently assigned to another user. You must steal it by reassigning it to yourself if you wish to complete it."
                                          ),
                                        ])
                                      : i("p", [
                                          e._v(
                                            "This cannot be started until it is assigned to yourself."
                                          ),
                                        ]),
                                  ]
                                : e.verifyItems.length > 0
                                ? i("p", [
                                    e._v(
                                      "This cannot be started until you verify your identity."
                                    ),
                                  ])
                                : i("p", [
                                    e._v(
                                      "You must start this before you can continue."
                                    ),
                                  ]),
                              e._v(" "),
                              e.verifyFailureMessages.length > 0
                                ? i("div", [
                                    i(
                                      "ul",
                                      e._l(
                                        e.verifyFailureMessages,
                                        function (t) {
                                          return i("li", [e._v(e._s(t))]);
                                        }
                                      ),
                                      0
                                    ),
                                  ])
                                : e._e(),
                              e._v(" "),
                              e._l(e.verifyItems, function (t, s) {
                                return i("div", { staticClass: "form-group" }, [
                                  i("label", { attrs: { for: "verify" + s } }, [
                                    e._v(e._s(t.prompt)),
                                  ]),
                                  e._v(" "),
                                  i("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: e.verifyData[t.prompt],
                                        expression:
                                          "verifyData[verifyItem.prompt]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", id: "verify" + s },
                                    domProps: { value: e.verifyData[t.prompt] },
                                    on: {
                                      input: function (i) {
                                        i.target.composing ||
                                          e.$set(
                                            e.verifyData,
                                            t.prompt,
                                            i.target.value
                                          );
                                      },
                                    },
                                  }),
                                ]);
                              }),
                              e._v(" "),
                              e._l(e.availableSegments, function (t) {
                                return i(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-primary cancel dfNavButton mx-auto",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function (i) {
                                        return (
                                          i.preventDefault(),
                                          e.selfAssignSegment(t)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    e.adminReview
                                      ? [
                                          e._v(
                                            e._s(
                                              e.activeSegment
                                                .isAssignedToOtherUser
                                                ? "Reassign"
                                                : "Assign"
                                            ) + " to myself"
                                          ),
                                        ]
                                      : [e._v("Continue")],
                                  ],
                                  2
                                );
                              }),
                            ],
                            2
                          ),
                    ],
                    2
                  ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      var pt = i(46518);
      const gt = {
          components: { DatePicker: i(36161).Z },
          data: () => ({
            textMaskInputElement: null,
            inputElement: null,
            tempValue: null,
          }),
          mixins: [ot.Z],
          mounted() {
            (this.inputElement = this.inputElement || this.$refs.inputElement),
              (this.focus = () => {
                this.inputElement?.focus();
              });
          },
          watch: {
            inputElement(e) {
              this.createTextMaskElement();
            },
            tempValue(e, t) {
              this.data.calculationContext.nonLiveTextboxes || this.setValue(e);
            },
          },
          subscriptions() {
            return {
              defaultValue: this.data
                .defaultValue$()
                .pipe((0, h.U)((e) => (e.length ? e[0] : null))),
              hasValue: this.data.hasValue$(),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
          created() {
            (this.tempValue = this.effectiveValue),
              this.$watch("defaultValue", (e, t) => {
                this.hasValue || (this.tempValue = e);
              });
          },
          computed: {
            datepickerConfig() {
              return {
                allowInput: !0,
                altInput: !0,
                dateFormat: "m-d-Y",
                altFormat: "m-d-Y",
                disableMobile: !0,
                defaultDate: "",
                wrap: !0,
                clickOpens: !1,
                onOpen: () => {
                  this.$store.commit("toggleFocusTrapActiveModals", !1);
                },
                onClose: () => {
                  this.$store.commit("toggleFocusTrapActiveModals", !0);
                },
              };
            },
            effectiveValue() {
              return this.hasValue ? this.value : this.defaultValue;
            },
            effectivePlaceholderText() {
              return this.settings.effectivePlaceholderText;
            },
          },
          methods: {
            markEdited() {
              this.setValue(this.tempValue), this.data.markEdited();
            },
            handleInput(e) {
              this.textMaskInputElement &&
                this.textMaskInputElement.update(e.target.value),
                (this.tempValue = e.target.value);
            },
            createTextMaskElement() {
              if (
                (null != this.settings.effectiveHtmlType &&
                  !["text", "tel", "url", "search", "password"].includes(
                    this.settings.effectiveHtmlType
                  )) ||
                null == this.settings.effectiveInputMask ||
                /^\s*$/.test(this.settings.effectiveInputMask) ||
                null == this.inputElement
              )
                this.textMaskInputElement = null;
              else {
                const e = {
                  inputElement: this.inputElement,
                  mask: this.maskArray.bind(this),
                  guide: !1,
                  placeholderChar: " ",
                };
                this.textMaskInputElement = (0, pt.createTextMaskInputElement)(
                  e
                );
              }
            },
            setValue(e) {
              e != this.effectiveValue && (this.value = e);
            },
            maskArray(e) {
              let t = this.settings.effectiveInputMask;
              if (null == t || /^\s*$/.test(t)) return null;
              e = e || "";
              const i = [],
                s = [],
                a = t.indexOf("#");
              if (a >= 0) {
                const i = t.substring(a);
                for (; t.length <= e.length && i.length > 0; ) t += i;
              }
              let n = !1;
              for (let a = t.length - 1; a >= 0; a--) {
                const l = t[a];
                let r;
                "A" == l
                  ? ((r = /[A-Za-z0-9]/), (n = !1))
                  : "S" == l
                  ? ((r = /[A-Za-z]/), (n = !1))
                  : "0" == l || "9" == l || "#" == l
                  ? ((r = /[0-9]/), (n = "0" != l && a >= e.length))
                  : ((r = l),
                    n &&
                      a < e.length &&
                      (i.unshift.apply(i, s), (r = l), (n = !1))),
                  n ? s.unshift(r) : i.unshift(r);
              }
              return this.settings.effectiveReverseMask ? i.reverse() : i;
            },
          },
        },
        vt = (0, ct.Z)(
          gt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group focus-form-group clearfix",
                class: [e.colClass],
              },
              [
                e.isViewOnly
                  ? i("p", { staticClass: "pdf-inline" }, [
                      i("strong", { staticClass: "display-label" }, [
                        e._v(
                          e._s(e.effectiveLabel || e.effectiveLabelText) + ":"
                        ),
                      ]),
                      e._v(" "),
                      i(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.settings.effectivePrefixAddon,
                              expression: "settings.effectivePrefixAddon",
                            },
                          ],
                          staticClass: "display-value",
                        },
                        [e._v(e._s(e.settings.effectivePrefixAddon))]
                      ),
                      e._v(" "),
                      i(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.effectiveValue,
                              expression: "effectiveValue",
                            },
                          ],
                          staticClass: "display-value",
                        },
                        [e._v(e._s(e.effectiveValue))]
                      ),
                      e._v(" "),
                      i(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.settings.suffixAddon,
                              expression: "settings.suffixAddon",
                            },
                          ],
                          staticClass: "display-value",
                        },
                        [e._v(e._s(e.settings.suffixAddon))]
                      ),
                      e._v(" "),
                      e.showAdminEditControls
                        ? i(
                            "button",
                            {
                              staticClass: "passthrough icon icon-edit mr-1",
                              attrs: { type: "button" },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.startAdminEdit.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Edit"),
                              ]),
                            ]
                          )
                        : e._e(),
                    ])
                  : [
                      i(
                        "label",
                        {
                          staticClass: "control-label",
                          class: {
                            dfRequired: e.settings.required,
                            dfOptional: !e.settings.required,
                            "sr-only": e.effectiveLabel != e.effectiveLabelText,
                          },
                          attrs: {
                            for: e.vmId,
                            "aria-label": e.effectiveLabelText,
                            id: e.vmId + "_Label",
                          },
                        },
                        [
                          e._v(
                            "\n                " +
                              e._s(e.effectiveLabelText) +
                              "\n                "
                          ),
                          i("HelpIcon", {
                            attrs: {
                              label: e.effectiveLabelText,
                              text: e.settings.helpText,
                            },
                          }),
                          e._v(" "),
                          e.isAdminEditing
                            ? i("button", {
                                staticClass: "passthrough icon icon-close mr-1",
                                attrs: {
                                  type: "button",
                                  "aria-label": "Stop Edit",
                                },
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      e.cancelAdminEdit.apply(null, arguments)
                                    );
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      i(
                        "div",
                        {
                          class: {
                            "input-group":
                              e.settings.effectivePrefixAddon ||
                              e.settings.suffixAddon,
                          },
                        },
                        [
                          e.settings.effectivePrefixAddon
                            ? i(
                                "span",
                                { staticClass: "input-group-prepend" },
                                [
                                  i(
                                    "span",
                                    { staticClass: "input-group-text" },
                                    [
                                      e._v(
                                        e._s(e.settings.effectivePrefixAddon)
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : e._e(),
                          e._v(" "),
                          1 == e.settings.layout
                            ? [
                                i("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.tempValue,
                                      expression: "tempValue",
                                    },
                                  ],
                                  ref: "inputElement",
                                  staticClass: "form-control",
                                  class: { dfRequired: e.settings.required },
                                  attrs: {
                                    placeholder: e.effectivePlaceholderText,
                                    id: e.vmId,
                                    "aria-required": e.settings.required
                                      ? "true"
                                      : "false",
                                    mask: e.settings.effectiveInputMask,
                                    "mask-reverse":
                                      e.settings.effectiveReverseMask,
                                    rows: e.settings.rows,
                                    maxlength: e.settings.maxLength || null,
                                  },
                                  domProps: { value: e.tempValue },
                                  on: {
                                    blur: e.markEdited,
                                    input: function (t) {
                                      t.target.composing ||
                                        (e.tempValue = t.target.value);
                                    },
                                  },
                                }),
                              ]
                            : [
                                e.settings.useDatePicker
                                  ? [
                                      i("DatePicker", {
                                        attrs: {
                                          config: e.datepickerConfig,
                                          placeholder:
                                            this.settings
                                              .effectivePlaceholderText,
                                          ariaLabelledBy: e.vmId + "_Label",
                                          ariaRequired: e.settings.required,
                                          id: e.vmId,
                                        },
                                        on: {
                                          "html-input": function (t) {
                                            e.handleInput(t), e.markEdited();
                                          },
                                          "created-input": function (t) {
                                            e.inputElement = t.inputElement;
                                          },
                                        },
                                        model: {
                                          value: e.tempValue,
                                          callback: function (t) {
                                            e.tempValue = t;
                                          },
                                          expression: "tempValue",
                                        },
                                      }),
                                    ]
                                  : [
                                      i("input", {
                                        ref: "inputElement",
                                        staticClass: "form-control",
                                        class: {
                                          dfRequired: e.settings.required,
                                        },
                                        attrs: {
                                          type:
                                            e.settings.effectiveHtmlType ||
                                            "text",
                                          placeholder:
                                            e.effectivePlaceholderText,
                                          id: e.vmId,
                                          "aria-required": e.settings.required
                                            ? "true"
                                            : "false",
                                          mask: e.settings.effectiveInputMask,
                                          "mask-reverse":
                                            e.settings.effectiveReverseMask,
                                          maxlength:
                                            e.settings.maxLength || null,
                                          step:
                                            e.settings.effectiveHtmlStep ||
                                            null,
                                          min:
                                            e.settings.effectiveHtmlMin || null,
                                        },
                                        domProps: { value: e.tempValue },
                                        on: {
                                          blur: e.markEdited,
                                          input: function (t) {
                                            return e.handleInput(t);
                                          },
                                        },
                                      }),
                                    ],
                              ],
                          e._v(" "),
                          e.settings.suffixAddon
                            ? i("span", { staticClass: "input-group-append" }, [
                                i("span", { staticClass: "input-group-text" }, [
                                  e._v(e._s(e.settings.suffixAddon)),
                                ]),
                              ])
                            : e._e(),
                        ],
                        2
                      ),
                    ],
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        bt = {
          mixins: [ot.Z],
          components: { LoadingWheel: rt.Z },
          computed: {
            hasValue() {
              return this.hasValue2 || this.data.valueId || this.data._hasValue;
            },
            filename() {
              return this.data.fileName;
            },
            url() {
              return this.data.fileUrl;
            },
            uploadStatus: {
              get() {
                return this.data.uploadStatus;
              },
              set(e) {
                this.data.uploadStatus = e;
              },
            },
            maxFileSize() {
              const e =
                  this.$store.state.globalConfigData.MaxUploadFileSizeInMb,
                t = this.settings.maxFileSize;
              if (null != e && e > 0) {
                const i = 1024 * e * 1024;
                return null != t && t > 0 ? Math.min(i, t) : i;
              }
              return null != t && t > 0 ? t : 1073741824;
            },
            maxFileSizeForDisplay() {
              const e = this.maxFileSize;
              return e >= 1048576
                ? Math.floor(e / 1024 / 102.4) / 10 + " MB"
                : e >= 1024
                ? `${Math.floor(e / 1024)} KB`
                : `${e} bytes`;
            },
          },
          watch: {
            uploadStatus(e) {
              null == e && this.removeFile();
            },
          },
          subscriptions() {
            return {
              hasValue2: this.data.hasValue$(),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
              valid: this.data.valid$(),
            };
          },
          created() {
            this.focus = () => {
              this.hasValue
                ? this.$refs.uploadedFile.focus()
                : this.$refs.file.focus();
            };
          },
          methods: {
            async removeFile() {
              (this.$refs.file.value = null),
                (this.uploadStatus = null),
                this.$store.commit("page/setFileInfoByVmId", {
                  id: this.vmId,
                  valueId: null,
                  contentType: null,
                  fileName: null,
                  fileUrl: null,
                  hasValue: !1,
                }),
                this.$refs.file.focus();
            },
            async uploadFile() {
              this.uploadStatus = "in-progress";
              const e = this.$refs.file.files;
              if (0 == e.length) return void this.removeFile();
              const t = e[0];
              t.size > this.maxFileSize
                ? setTimeout(() => {
                    this.uploadStatus = "too-large";
                  }, 100)
                : await this.$store.dispatch("page/uploadExternalFile", {
                    vmId: this.vmId,
                    newFile: t,
                  }),
                "ok" == this.uploadStatus
                  ? this.$refs.uploadedFile.focus()
                  : this.$refs.file.focus();
            },
          },
        },
        yt = (0, ct.Z)(
          bt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group focus-form-group clearfix",
                class: [
                  e.settings.isChild ? "form-group-child" : null,
                  e.colClass,
                ],
              },
              [
                e.isViewOnly
                  ? i("p", { staticClass: "pdf-inline" }, [
                      i("strong", { staticClass: "display-label" }, [
                        e._v(e._s(e.effectiveLabel) + ":"),
                      ]),
                      e._v(" "),
                      e.hasValue
                        ? i("span", { staticClass: "display-value" }, [
                            i(
                              "a",
                              {
                                attrs: {
                                  target: "_blank",
                                  href: e.data.fileUrl,
                                },
                              },
                              [
                                i("span", {
                                  staticClass: "icon icon-download",
                                }),
                                e._v(
                                  "\n                " +
                                    e._s(e.data.fileName) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.showAdminEditControls
                        ? i(
                            "button",
                            {
                              staticClass: "passthrough icon icon-edit mr-1",
                              attrs: { type: "button" },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.startAdminEdit.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Edit"),
                              ]),
                            ]
                          )
                        : e._e(),
                    ])
                  : [
                      i(
                        "label",
                        {
                          staticClass: "control-label",
                          class: {
                            dfRequired: e.settings.required,
                            dfOptional: !e.settings.required,
                            "sr-only": e.effectiveLabelText != e.effectiveLabel,
                          },
                          attrs: {
                            "aria-label": e.effectiveLabelText,
                            id: e.vmId + "_Label",
                            for: e.vmId,
                          },
                        },
                        [
                          e._v(
                            "\n            " +
                              e._s(e.effectiveLabelText) +
                              "\n            "
                          ),
                          i("HelpIcon", {
                            attrs: {
                              label: e.effectiveLabelText,
                              text: e.settings.helpText,
                            },
                          }),
                          e._v(" "),
                          e.isAdminEditing
                            ? i("button", {
                                staticClass: "passthrough icon icon-close mr-1",
                                attrs: {
                                  type: "button",
                                  "aria-label": "Stop Edit",
                                },
                                on: {
                                  click: function (t) {
                                    return (
                                      t.preventDefault(),
                                      e.cancelAdminEdit.apply(null, arguments)
                                    );
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.hasValue,
                              expression: "hasValue",
                            },
                          ],
                        },
                        [
                          i("div", { staticClass: "btn-group" }, [
                            i(
                              "a",
                              {
                                ref: "uploadedFile",
                                staticClass:
                                  "btn btn-outline-secondary input-group-prepend",
                                staticStyle: {
                                  flex: "auto",
                                  "border-right": "0",
                                },
                                attrs: {
                                  tabindex: "0",
                                  "aria-labelledby": e.vmId + "_Label",
                                  "aria-description":
                                    "You have selected the file:" + e.filename,
                                  target: "_blank",
                                  href: e.url,
                                },
                              },
                              [e._v(e._s(e.filename))]
                            ),
                            e._v(" "),
                            i(
                              "button",
                              {
                                staticClass: "btn btn-outline-danger",
                                attrs: {
                                  type: "button",
                                  tabindex: "0",
                                  role: "button",
                                  "aria-label": "Remove File",
                                },
                                on: { click: e.removeFile },
                              },
                              [e._v("×")]
                            ),
                          ]),
                        ]
                      ),
                      e._v(" "),
                      i("div", { class: { "sr-only": e.hasValue } }, [
                        i(
                          "div",
                          {
                            staticClass:
                              "btn dfNavButton btn-file d-flex flex-wrap justify-content-between align-items-center px-3 py-2",
                          },
                          [
                            i(
                              "div",
                              { staticClass: "d-flex py-2 flex-grow-1" },
                              [
                                i("input", {
                                  ref: "file",
                                  staticClass: "p-0",
                                  attrs: {
                                    type: "file",
                                    "data-test-id": "upload",
                                    id: e.vmId,
                                    "aria-required": e.settings.required
                                      ? "true"
                                      : "false",
                                    tabindex: e.hasValue ? -1 : 0,
                                  },
                                  on: {
                                    change: e.uploadFile,
                                    abort: e.uploadFile,
                                  },
                                }),
                                e._v(" "),
                                i("LoadingWheel", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "in-progress" == e.uploadStatus,
                                      expression:
                                        "uploadStatus == 'in-progress'",
                                    },
                                  ],
                                  attrs: { width: 30 },
                                }),
                              ],
                              1
                            ),
                            e._v(" "),
                            i(
                              "div",
                              {
                                staticClass: "upload-status",
                                attrs: { "aria-live": "polite" },
                              },
                              [
                                null != e.uploadStatus
                                  ? [
                                      "ok" == e.uploadStatus && e.valid
                                        ? i("span", [
                                            i("span", {
                                              staticClass:
                                                "icon icon-check success",
                                              attrs: { "aria-hidden": "true" },
                                            }),
                                            e._v(" "),
                                            i(
                                              "span",
                                              { staticClass: "sr-only" },
                                              [
                                                e._v(
                                                  "File uploaded successfully"
                                                ),
                                              ]
                                            ),
                                          ])
                                        : "too-large" == e.uploadStatus
                                        ? i("span", { staticClass: "error" }, [
                                            i("span", {
                                              staticClass:
                                                "icon icon-attention",
                                              attrs: {
                                                role: "img",
                                                "aria-label": "Error:",
                                              },
                                            }),
                                            e._v(
                                              "\n                            File must not be larger than " +
                                                e._s(e.maxFileSizeForDisplay) +
                                                "\n                        "
                                            ),
                                          ])
                                        : "avScanFail" == e.uploadStatus
                                        ? i("span", { staticClass: "error" }, [
                                            i("span", {
                                              staticClass:
                                                "icon icon-attention",
                                              attrs: {
                                                role: "img",
                                                "aria-label": "Error:",
                                              },
                                            }),
                                            e._v(
                                              "\n                            Potential virus or malware detected.\n                        "
                                            ),
                                          ])
                                        : "fail" == e.uploadStatus
                                        ? i("span", { staticClass: "error" }, [
                                            i("span", {
                                              staticClass:
                                                "icon icon-attention",
                                              attrs: {
                                                role: "img",
                                                "aria-label": "Error:",
                                              },
                                            }),
                                            e._v(
                                              "\n                            Unknown error\n                        "
                                            ),
                                          ])
                                        : e.valid
                                        ? e._e()
                                        : i("span", {
                                            staticClass: "sr-only",
                                            attrs: {
                                              "aria-labelledby":
                                                e.vmId + "_ErrorList",
                                            },
                                          }),
                                    ]
                                  : e._e(),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                    ],
                e._v(" "),
                i("ErrorList", {
                  attrs: { data: e.data, id: e.vmId + "_ErrorList" },
                }),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "2a6b30cb",
          null
        ).exports;
      var Ct = i(8149),
        wt = i(36431);
      const _t = {
          mixins: [ot.Z],
          data: () => ({ useIndeterminate: !1, tempValue: [] }),
          created() {
            this.$nextTick(() => {
              (this.tempValue = this.effectiveValueM()),
                this.$watch(
                  "defaultValue",
                  (e, t) => {
                    this.$nextTick(() => {
                      !this.hasValue &&
                        (0, Ct.Z)(t ?? [], this.tempValue ?? []) &&
                        (this.tempValue = e ?? []);
                    });
                  },
                  { deep: !0 }
                );
            }),
              (this.focus = () => {
                this.$refs.checkRef.length > 0 &&
                  this.$refs.checkRef[0].focus();
              });
          },
          watch: {
            useIndeterminate(e) {
              0 == this.value.length &&
                e &&
                (this.tempValue = this.effectiveValueM());
            },
            tempValue(e, t) {
              this.$nextTick(() => {
                if (!(0, Ct.Z)(e, this.effectiveValue))
                  if (
                    this.hasValue ||
                    (0 != e.length && !(0, Ct.Z)(e, this.defaultValue))
                  ) {
                    if (this.useIndeterminate) return;
                    this.value = this.tempValue ?? [];
                  } else if (
                    ((this.tempValue = this.defaultValue ?? []),
                    this.useIndeterminate)
                  )
                    return;
              });
            },
          },
          computed: {
            effectiveCheckboxValue: {
              get() {
                return this.useIndeterminate ? this.value : this.tempValue;
              },
              set(e) {
                this.useIndeterminate
                  ? ((this.value = e), (this.tempValue = e))
                  : (0 == this.value.length &&
                      0 == e.length &&
                      (this.value = []),
                    (this.tempValue = e));
              },
            },
            effectiveValue() {
              return this.effectiveValueM();
            },
          },
          subscriptions() {
            return {
              effectiveItems: this.data
                .effectiveItems$()
                .pipe((0, wt.b)(() => this.checkForInvalidValues())),
              defaultValue: this.data
                .defaultValue$()
                .pipe((0, h.U)((e) => e.filter((e) => null != e))),
              hasValue: this.data.hasValue$(),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
          methods: {
            effectiveValueM() {
              return (this.hasValue ? this.value : this.defaultValue) ?? [];
            },
            indeterminateValue(e) {
              return (
                !(!this.useIndeterminate || this.hasValue) &&
                (null == this.value || 0 == this.value.length) &&
                null != this.defaultValue &&
                this.defaultValue.includes(e)
              );
            },
            async saveAdminEdit() {
              await this.$store.dispatch("page/invokeForm", {
                type: "AdminEdit",
                target: this.data.id,
                data: this.value,
              }),
                (this.isAdminEditing = !1);
            },
            checkForInvalidValues() {
              this.$nextTick(() => {
                this.$nextTick(() => {
                  const e = this.data.clientValidateRules$?.getValue() || {},
                    t = (e) => this.effectiveItems.find((t) => t.value == e);
                  "data-val-serveronlyerror-values" in e &&
                    ((e["data-val-serveronlyerror-values"] = e[
                      "data-val-serveronlyerror-values"
                    ]
                      .split("`")
                      .filter((e) => !t(e))
                      .join("`")),
                    this.data.clientValidateRules$.next(e)),
                    (this.tempValue = this.tempValue.filter((e) => t(e)));
                });
              });
            },
          },
        },
        xt = (0, ct.Z)(
          _t,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group clearfix no-focus",
                class: [e.colClass],
              },
              [
                i(
                  "fieldset",
                  { attrs: { role: "group" } },
                  [
                    i(
                      "legend",
                      {
                        class: {
                          dfRequired: e.settings.required,
                          dfOptional: !e.settings.required,
                          "sr-only": e.effectiveLabelText != e.effectiveLabel,
                        },
                        attrs: { "aria-labelledby": e.vmId },
                      },
                      [
                        i("span", { attrs: { id: e.vmId } }, [
                          e._v(
                            "\n                    " +
                              e._s(e.effectiveLabelText) +
                              "\n                    "
                          ),
                          e.settings.required
                            ? i("span", { staticClass: "sr-only" }, [
                                e._v("Required"),
                              ])
                            : e._e(),
                        ]),
                        e._v(" "),
                        e.isViewOnly
                          ? e._e()
                          : i("HelpIcon", {
                              attrs: { text: e.settings.helpText },
                            }),
                        e._v(" "),
                        e.showAdminEditControls
                          ? i("button", {
                              staticClass: "passthrough icon mr-1",
                              class: e.isAdminEditing
                                ? ["icon-close"]
                                : ["icon-edit"],
                              attrs: {
                                type: "button",
                                "aria-label": e.isAdminEditing
                                  ? "Stop Edit"
                                  : "Edit",
                              },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.toggleAdminEdit.apply(null, arguments)
                                  );
                                },
                              },
                            })
                          : e._e(),
                      ],
                      1
                    ),
                    e._v(" "),
                    3 == e.settings.layout
                      ? i("div", [
                          i(
                            "div",
                            e._l(e.children, function (t) {
                              return i(
                                "div",
                                {
                                  staticClass: "col-sm-12 clearfix",
                                  style: e.childStyle(t),
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "checkbox-withchild" },
                                    [
                                      i(
                                        "label",
                                        { staticClass: "form-check-label" },
                                        [
                                          2 == t.definition.settings.layout
                                            ? [
                                                i("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        e.effectiveCheckboxValue,
                                                      expression:
                                                        "effectiveCheckboxValue",
                                                    },
                                                  ],
                                                  staticClass: "radio",
                                                  attrs: {
                                                    type: "radio",
                                                    disabled: e.isViewOnly,
                                                  },
                                                  domProps: {
                                                    value:
                                                      t.definition.settings
                                                        .effectiveValue,
                                                    indeterminate:
                                                      e.indeterminateValue(
                                                        t.definition.settings
                                                          .effectiveValue
                                                      ),
                                                    checked: e._q(
                                                      e.effectiveCheckboxValue,
                                                      t.definition.settings
                                                        .effectiveValue
                                                    ),
                                                  },
                                                  on: {
                                                    change: function (i) {
                                                      e.effectiveCheckboxValue =
                                                        t.definition.settings.effectiveValue;
                                                    },
                                                  },
                                                }),
                                              ]
                                            : [
                                                i("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        e.effectiveCheckboxValue,
                                                      expression:
                                                        "effectiveCheckboxValue",
                                                    },
                                                  ],
                                                  ref: "checkRef",
                                                  refInFor: !0,
                                                  staticClass: "checkbox",
                                                  attrs: {
                                                    type: "checkbox",
                                                    disabled: e.isViewOnly,
                                                  },
                                                  domProps: {
                                                    value:
                                                      t.definition.settings
                                                        .effectiveValue,
                                                    indeterminate:
                                                      e.indeterminateValue(
                                                        t.definition.settings
                                                          .effectiveValue
                                                      ),
                                                    checked: Array.isArray(
                                                      e.effectiveCheckboxValue
                                                    )
                                                      ? e._i(
                                                          e.effectiveCheckboxValue,
                                                          t.definition.settings
                                                            .effectiveValue
                                                        ) > -1
                                                      : e.effectiveCheckboxValue,
                                                  },
                                                  on: {
                                                    change: function (i) {
                                                      var s =
                                                          e.effectiveCheckboxValue,
                                                        a = i.target,
                                                        n = !!a.checked;
                                                      if (Array.isArray(s)) {
                                                        var l =
                                                            t.definition
                                                              .settings
                                                              .effectiveValue,
                                                          r = e._i(s, l);
                                                        a.checked
                                                          ? r < 0 &&
                                                            (e.effectiveCheckboxValue =
                                                              s.concat([l]))
                                                          : r > -1 &&
                                                            (e.effectiveCheckboxValue =
                                                              s
                                                                .slice(0, r)
                                                                .concat(
                                                                  s.slice(r + 1)
                                                                ));
                                                      } else
                                                        e.effectiveCheckboxValue =
                                                          n;
                                                    },
                                                  },
                                                }),
                                              ],
                                          e._v(
                                            "\n                                " +
                                              e._s(
                                                t.definition.settings.label
                                              ) +
                                              "\n                            "
                                          ),
                                        ],
                                        2
                                      ),
                                    ]
                                  ),
                                  e._v(" "),
                                  i(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            e.value.indexOf(
                                              t.definition.settings
                                                .effectiveValue
                                            ) >= 0,
                                          expression:
                                            "value.indexOf(item.definition.settings.effectiveValue) >= 0",
                                        },
                                      ],
                                      staticClass: "col-sm-11 col-sm-offset-1",
                                    },
                                    [
                                      i("ChildrenList", {
                                        attrs: {
                                          "children-ids": t.children,
                                          "view-only": e.isViewOnly,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ])
                      : e._e(),
                    e._v(" "),
                    3 != e.settings.layout
                      ? i("div", [
                          1 == e.settings.layout
                            ? i(
                                "div",
                                e._l(e.effectiveItems, function (t) {
                                  return i("div", { staticClass: "checkbox" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-check-label" },
                                      [
                                        i("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: e.effectiveCheckboxValue,
                                              expression:
                                                "effectiveCheckboxValue",
                                            },
                                          ],
                                          ref: "checkRef",
                                          refInFor: !0,
                                          attrs: {
                                            type: "checkbox",
                                            disabled: e.isViewOnly,
                                          },
                                          domProps: {
                                            value: t.value,
                                            indeterminate: e.indeterminateValue(
                                              t.value
                                            ),
                                            checked: Array.isArray(
                                              e.effectiveCheckboxValue
                                            )
                                              ? e._i(
                                                  e.effectiveCheckboxValue,
                                                  t.value
                                                ) > -1
                                              : e.effectiveCheckboxValue,
                                          },
                                          on: {
                                            change: function (i) {
                                              var s = e.effectiveCheckboxValue,
                                                a = i.target,
                                                n = !!a.checked;
                                              if (Array.isArray(s)) {
                                                var l = t.value,
                                                  r = e._i(s, l);
                                                a.checked
                                                  ? r < 0 &&
                                                    (e.effectiveCheckboxValue =
                                                      s.concat([l]))
                                                  : r > -1 &&
                                                    (e.effectiveCheckboxValue =
                                                      s
                                                        .slice(0, r)
                                                        .concat(
                                                          s.slice(r + 1)
                                                        ));
                                              } else
                                                e.effectiveCheckboxValue = n;
                                            },
                                          },
                                        }),
                                        e._v(
                                          "\n                            " +
                                            e._s(t.label) +
                                            "\n                        "
                                        ),
                                      ]
                                    ),
                                  ]);
                                }),
                                0
                              )
                            : e._e(),
                          e._v(" "),
                          1 != e.settings.layout
                            ? i(
                                "div",
                                e._l(e.effectiveItems, function (t) {
                                  return i(
                                    "label",
                                    {
                                      staticClass:
                                        "checkbox-inline form-check-label",
                                    },
                                    [
                                      i("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.effectiveCheckboxValue,
                                            expression:
                                              "effectiveCheckboxValue",
                                          },
                                        ],
                                        ref: "checkRef",
                                        refInFor: !0,
                                        attrs: {
                                          type: "checkbox",
                                          disabled: e.isViewOnly,
                                        },
                                        domProps: {
                                          value: t.value,
                                          indeterminate: e.indeterminateValue(
                                            t.value
                                          ),
                                          checked: Array.isArray(
                                            e.effectiveCheckboxValue
                                          )
                                            ? e._i(
                                                e.effectiveCheckboxValue,
                                                t.value
                                              ) > -1
                                            : e.effectiveCheckboxValue,
                                        },
                                        on: {
                                          change: function (i) {
                                            var s = e.effectiveCheckboxValue,
                                              a = i.target,
                                              n = !!a.checked;
                                            if (Array.isArray(s)) {
                                              var l = t.value,
                                                r = e._i(s, l);
                                              a.checked
                                                ? r < 0 &&
                                                  (e.effectiveCheckboxValue =
                                                    s.concat([l]))
                                                : r > -1 &&
                                                  (e.effectiveCheckboxValue = s
                                                    .slice(0, r)
                                                    .concat(s.slice(r + 1)));
                                            } else e.effectiveCheckboxValue = n;
                                          },
                                        },
                                      }),
                                      e._v(
                                        "\n                        " +
                                          e._s(t.label) +
                                          "\n                    "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              )
                            : e._e(),
                        ])
                      : e._e(),
                    e._v(" "),
                    i("ErrorList", { attrs: { data: e.data } }),
                    e._v(" "),
                    i("Comments", { attrs: { data: e.data } }),
                    e._v(" "),
                    i("AdminSettingsDifferences", { attrs: { data: e.data } }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        St = {
          mixins: [ot.Z],
          subscriptions() {
            return {
              effectiveItems: this.data.effectiveItems$(),
              defaultValue: this.data
                .defaultValue$()
                .pipe((0, h.U)((e) => (e.length ? e[0] : void 0))),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
          computed: {
            effectiveValue: {
              get() {
                return this.value ?? this.defaultValue;
              },
              set(e) {
                this.value = e;
              },
            },
          },
          created() {
            this.focus = () => {
              this.$refs.radioRef.length > 0 && this.$refs.radioRef[0].focus();
            };
          },
          methods: {
            async saveAdminEdit() {
              await this.$store.dispatch("page/invokeForm", {
                type: "AdminEdit",
                target: this.data.id,
                data: [this.value],
              }),
                (this.isAdminEditing = !1);
            },
          },
        },
        Dt = (0, ct.Z)(
          St,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group clearfix no-focus",
                class: [e.colClass],
              },
              [
                i(
                  "fieldset",
                  {
                    attrs: {
                      role: "radiogroup",
                      "aria-required": e.settings.required ? "true" : "false",
                    },
                  },
                  [
                    i(
                      "legend",
                      {
                        class: {
                          dfRequired: e.settings.required,
                          dfOptional: !e.settings.required,
                          "sr-only": e.effectiveLabelText != e.effectiveLabel,
                        },
                        attrs: { "aria-label": e.effectiveLabelText },
                      },
                      [
                        e._v(
                          "\n            " +
                            e._s(e.effectiveLabelText) +
                            "\n            "
                        ),
                        e.isViewOnly
                          ? e._e()
                          : i("HelpIcon", {
                              attrs: { text: e.settings.helpText },
                            }),
                        e._v(" "),
                        e.showAdminEditControls
                          ? i("button", {
                              staticClass: "passthrough icon mr-1",
                              class: e.isAdminEditing
                                ? ["icon-close"]
                                : ["icon-edit"],
                              attrs: {
                                type: "button",
                                "aria-label": e.isAdminEditing
                                  ? "Stop Edit"
                                  : "Edit",
                              },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.toggleAdminEdit.apply(null, arguments)
                                  );
                                },
                              },
                            })
                          : e._e(),
                      ],
                      1
                    ),
                    e._v(" "),
                    1 == e.settings.layout
                      ? i(
                          "div",
                          e._l(e.effectiveItems, function (t) {
                            return i("div", { staticClass: "radio" }, [
                              i("label", { staticClass: "form-check-label" }, [
                                i("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.effectiveValue,
                                      expression: "effectiveValue",
                                    },
                                  ],
                                  ref: "radioRef",
                                  refInFor: !0,
                                  attrs: {
                                    type: "radio",
                                    name: e.vmId,
                                    disabled: e.isViewOnly,
                                  },
                                  domProps: {
                                    value: t.value,
                                    checked: e._q(e.effectiveValue, t.value),
                                  },
                                  on: {
                                    change: function (i) {
                                      e.effectiveValue = t.value;
                                    },
                                  },
                                }),
                                e._v(
                                  "\n                    " +
                                    e._s(t.label) +
                                    "\n                "
                                ),
                              ]),
                            ]);
                          }),
                          0
                        )
                      : e._e(),
                    e._v(" "),
                    1 != e.settings.layout
                      ? i(
                          "div",
                          e._l(e.effectiveItems, function (t) {
                            return i("label", { staticClass: "radio-inline" }, [
                              i("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.effectiveValue,
                                    expression: "effectiveValue",
                                  },
                                ],
                                ref: "radioRef",
                                refInFor: !0,
                                attrs: {
                                  type: "radio",
                                  name: e.vmId,
                                  disabled: e.isViewOnly,
                                },
                                domProps: {
                                  value: t.value,
                                  checked: e._q(e.effectiveValue, t.value),
                                },
                                on: {
                                  change: function (i) {
                                    e.effectiveValue = t.value;
                                  },
                                },
                              }),
                              e._v(
                                "\n                " +
                                  e._s(t.label) +
                                  "\n            "
                              ),
                            ]);
                          }),
                          0
                        )
                      : e._e(),
                    e._v(" "),
                    i("ErrorList", { attrs: { data: e.data } }),
                    e._v(" "),
                    i("Comments", { attrs: { data: e.data } }),
                    e._v(" "),
                    i("AdminSettingsDifferences", { attrs: { data: e.data } }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Pt = {
          mixins: [ot.Z],
          subscriptions() {
            return {
              lines: this.data
                .effectiveValueList$()
                .pipe(
                  (0, h.U)((e) =>
                    e
                      ? e.reduce((e, t) => e.concat((t || "").split("\n")), [])
                      : [""]
                  )
                ),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
        },
        It = (0, ct.Z)(
          Pt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group clearfix no-focus",
                class: [
                  e.settings.isChild ? "form-group-child" : null,
                  e.colClass,
                ],
                style: 2 == e.settings.layout ? "margin:0" : "",
              },
              [
                2 != e.settings.layout
                  ? i("div", [
                      e.effectiveLabel == e.effectiveLabelText
                        ? i("div", [
                            i(
                              "strong",
                              { staticClass: "control-label" },
                              [
                                e._v(
                                  "\n                " +
                                    e._s(e.effectiveLabelText) +
                                    "\n                "
                                ),
                                i("HelpIcon", {
                                  attrs: {
                                    label: e.effectiveLabelText,
                                    text: e.settings.helpText,
                                  },
                                }),
                              ],
                              1
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      i(
                        "output",
                        { attrs: { "data-df-type": "calculated" } },
                        e._l(e.lines, function (t) {
                          return i(
                            "p",
                            { staticClass: "form-control-static" },
                            [
                              3 == e.settings.layout
                                ? i("span", {
                                    domProps: { innerHTML: e._s(t) },
                                  })
                                : i("span", [e._v(e._s(t))]),
                            ]
                          );
                        }),
                        0
                      ),
                    ])
                  : e._e(),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                2 != e.settings.layout
                  ? i("Comments", { attrs: { data: e.data } })
                  : e._e(),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      var kt = i(4480);
      const $t = {
          mixins: [ot.Z],
          components: { HelpIcon: kt.Z },
          computed: { ...(0, a.Se)("page", ["adminPreview"]) },
          subscriptions() {
            return { valid: this.data.valid$() };
          },
        },
        Vt = (0, ct.Z)(
          $t,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "form-group clearfix no-focus",
                class: [
                  e.settings.isChild ? "form-group-child" : null,
                  e.colClass,
                ],
                style:
                  e.adminPreview && e.settings.serverSide ? "display:flex" : "",
              },
              [
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
                e._v(" "),
                e.adminPreview && e.settings.serverSide && !e.valid
                  ? i("HelpIcon", {
                      staticClass: "d-inline-flex ml-1",
                      attrs: {
                        iconClass: "icon-warning",
                        text: "Validation on Section Change or Submit setting is ignored in Preview.",
                      },
                    })
                  : e._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "1dd73f90",
          null
        ).exports,
        Et = {
          mixins: [ot.Z],
          subscriptions() {
            return { visible: this.data.visible$() };
          },
        },
        Tt = (0, ct.Z)(
          Et,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible",
                  },
                ],
                class: [e.colClass],
              },
              [
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Ft = {
          data: () => ({
            loading: !1,
            computedSubscription: null,
            oldIds: null,
            calculatedIds: [],
          }),
          mixins: [ot.Z],
          created() {
            const e = this.computedItems;
            null != e && this.subscribeToComputedItems(e);
          },
          subscriptions() {
            return { effectiveLabel: this.data.effectiveLabel$() };
          },
          computed: {
            isComputed() {
              return null != this.data.definition.settings.calculationId;
            },
            canAddRemoveItems() {
              return this.data.definition.settings.addRemoveItems;
            },
            childrenObj: function () {
              return this.data.children
                .filter((e) => null == e.removedChild || 0 == e.removedChild)
                .map((e) => this.$store.getters["page/getElementByVmId"](e))
                .map((e) => ({
                  child: e,
                  childChildren: this.$store.getters["page/getChildrenByVmId"](
                    e.vmId
                  ).filter((e) => this.elementFilter(e)),
                }));
            },
            computedItems: function () {
              return this.isComputed
                ? this.data.resolveCalculation(
                    this.data.definition.settings.calculationId
                  )
                : null;
            },
          },
          components: { LoadingWheel: rt.Z },
          destroyed() {
            null != this.computedSubscription &&
              this.computedSubscription.unsubscribe();
          },
          watch: {
            computedItems: function (e, t) {
              this.subscribeToComputedItems(e);
            },
          },
          methods: {
            subscribeToComputedItems(e) {
              null != this.computedSubscription &&
                this.computedSubscription.unsubscribe(),
                (this.computedSubscription = e.subscribe((e) => {
                  (this.calculatedIds = e), this.setCalculatedItems(e);
                }));
            },
            addItem() {
              this.$store.commit("page/addForEachItem", this.vmId);
            },
            removeItem(e) {
              this.$store.commit("page/removeForEachItem", {
                forEachVmId: this.vmId,
                item: e,
                calculatedItems: this.calculatedIds,
              });
            },
            async setCalculatedItems(e) {
              if (null != e && !(0, Ct.Z)(e, this.oldIds)) {
                if (
                  (null != this.oldIds &&
                    ((this.loading = !0),
                    setTimeout(() => {
                      this.loading = !1;
                    }, 400)),
                  (this.oldIds = e),
                  null == this.$store.getters["page/getValueByVmId"])
                )
                  return null;
                this.$store.commit("page/setForEachChildren", {
                  forEachVmId: this.vmId,
                  ids: e,
                });
              }
            },
          },
        },
        Lt = (0, ct.Z)(
          Ft,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { class: [e.colClass] },
              [
                e.effectiveLabel
                  ? i("div", { staticClass: "DFRRegionHeading" }, [
                      i(
                        "h2",
                        { staticClass: "df-section-title" },
                        [
                          e._v(
                            "\n            " +
                              e._s(e.effectiveLabel) +
                              "\n            "
                          ),
                          e.loading
                            ? i("LoadingWheel", {
                                staticClass: "d-inline-block",
                                attrs: { width: 20 },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ])
                  : e._e(),
                e._v(" "),
                i(
                  "div",
                  {
                    staticClass: "clearfix",
                    staticStyle: { "margin-bottom": "10px" },
                  },
                  [
                    i(
                      "div",
                      e._l(e.childrenObj, function (t) {
                        return i(
                          "div",
                          {
                            key: t.child.vmId,
                            staticClass: "dfForEachItem clearfix",
                          },
                          [
                            i(
                              "div",
                              { staticClass: "form-group col-md-12" },
                              [
                                i("ChildrenList", {
                                  attrs: {
                                    "children-ids": t.childChildren,
                                    "view-only": e.isViewOnly,
                                  },
                                }),
                                e._v(" "),
                                (e.isComputed && !e.canAddRemoveItems) ||
                                e.isViewOnly
                                  ? e._e()
                                  : i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-link dfNavButton dfNavRemoveButton",
                                        attrs: {
                                          type: "button",
                                          disabled:
                                            null != e.settings.min &&
                                            e.settings.min >=
                                              e.childrenObj.length,
                                        },
                                        on: {
                                          click: function (i) {
                                            return e.removeItem(t.child);
                                          },
                                        },
                                      },
                                      [
                                        i("span", [e._v("×")]),
                                        e._v(" "),
                                        i("span", { staticClass: "sr-only" }, [
                                          e._v(e._s(e.settings.removeText)),
                                        ]),
                                      ]
                                    ),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    e._v(" "),
                    (e.isComputed && !e.canAddRemoveItems) || e.isViewOnly
                      ? e._e()
                      : i("div", { staticClass: "form-group" }, [
                          i(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-secondary dfNavButton",
                              attrs: {
                                type: "button",
                                disabled:
                                  null != e.settings.max &&
                                  e.settings.max <= e.childrenObj.length,
                              },
                              on: { click: e.addItem },
                            },
                            [
                              i("span", { staticClass: "plus-sign" }, [
                                e._v("+"),
                              ]),
                              e._v(
                                "\n                " +
                                  e._s(e.settings.addText) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ]),
                  ]
                ),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        At = { mixins: [ot.Z], props: ["childId"] },
        Rt = (0, ct.Z)(
          At,
          function () {
            var e = this;
            e.$createElement;
            return e._self._c, e._e();
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Mt = { mixins: [ot.Z] },
        Nt = (0, ct.Z)(
          Mt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "dfRegion clearfix",
                class: [e.settings.cssClass, e.colClass],
                style: {
                  "padding-left": e.settings.indent ? e.settings.indent : null,
                },
              },
              [
                i("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.settings.htmlContent,
                      expression: "settings.htmlContent",
                    },
                  ],
                  domProps: { innerHTML: e._s(e.settings.htmlContent) },
                }),
                e._v(" "),
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Ot = {
          mixins: [ot.Z],
          subscriptions() {
            return { effectiveLabel: this.data.effectiveLabel$() };
          },
        },
        Ut = (0, ct.Z)(
          Ot,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "DFSectionHeading", class: [e.colClass] },
              [
                i("h2", { staticClass: "df-section-title" }, [
                  e._v(e._s(e.effectiveLabel)),
                ]),
                e._v(" "),
                e.settings.description
                  ? i("div", [
                      i("p", { staticClass: "df-section-desc" }, [
                        e._v(e._s(e.settings.description)),
                      ]),
                    ])
                  : e._e(),
                e._v(" "),
                i(
                  "div",
                  { staticClass: "DFSectionContents clearfix" },
                  [
                    i("ChildrenList", {
                      attrs: {
                        "children-ids": e.children,
                        "view-only": e.isViewOnly,
                      },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "2b0f7cae",
          null
        ).exports,
        Bt = {
          mixins: [ot.Z],
          subscriptions() {
            return {
              inputsFields: this.data._children$.pipe(
                (0, m.w)((e) =>
                  (0, c.a)(
                    e.map((e) =>
                      e.visible$
                        ? e.visible$().pipe((0, h.U)((t) => (t ? e : null)))
                        : (0, u.D)([e])
                    )
                  )
                ),
                (0, h.U)((e) => e.filter((e) => null != e)),
                (0, m.w)((e) =>
                  (0, c.a)(e.map((e) => [(0, u.D)([[e]]), e._children$]).flat())
                ),
                (0, h.U)((e) => e.flat())
              ),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
          computed: {
            singleLabel() {
              return 1 == this.settings.layout;
            },
          },
        },
        Ht = (0, ct.Z)(
          Bt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "fieldset",
              {
                staticClass: "form-group address-form-group clearfix",
                class: [e.settings.cssClass, e.colClass],
              },
              [
                e.effectiveLabel == e.effectiveLabelText
                  ? i("div", [
                      i(
                        "legend",
                        {
                          staticClass:
                            "highlight-on-child-error address-block-label control-label",
                          class:
                            e.settings.required && e.singleLabel
                              ? "dfRequired"
                              : "",
                          style: e.singleLabel ? "margin-bottom:10px" : "",
                          attrs: { "aria-labelledby": e.vmId },
                        },
                        [
                          i("span", { attrs: { id: e.vmId } }, [
                            e._v(
                              "\n                " +
                                e._s(e.effectiveLabelText) +
                                "\n                "
                            ),
                            e.settings.required && e.singleLabel
                              ? i("span", { staticClass: "sr-only" }, [
                                  e._v("Required"),
                                ])
                              : e._e(),
                          ]),
                          e._v(" "),
                          e.isViewOnly
                            ? e._e()
                            : i("HelpIcon", {
                                attrs: {
                                  label: e.effectiveLabelText,
                                  text: e.settings.helpText,
                                },
                              }),
                        ],
                        1
                      ),
                    ])
                  : e._e(),
                e._v(" "),
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                e.settings.showErrorsLocally
                  ? i(
                      "div",
                      { staticClass: "dfCompositControlChildMargin" },
                      e._l(e.inputsFields, function (e) {
                        return i(
                          "div",
                          { key: e.vmId },
                          [
                            i("ErrorList", {
                              attrs: { data: e, "force-non-local": !0 },
                            }),
                          ],
                          1
                        );
                      }),
                      0
                    )
                  : e._e(),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "2e45f65a",
          null
        ).exports,
        Wt = {
          mixins: [ot.Z],
          computed: {
            singleLabel() {
              return 2 == this.settings.layout || 0 == this.settings.datePeriod;
            },
          },
          subscriptions() {
            return {
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
        },
        Zt = (0, ct.Z)(
          Wt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "fieldset",
              { staticClass: "form-group clearfix", class: [e.colClass] },
              [
                e.effectiveLabelText == e.effectiveLabel
                  ? i(
                      "legend",
                      {
                        staticClass:
                          "highlight-on-child-error address-block-label control-label",
                        class:
                          e.settings.required && e.singleLabel
                            ? "dfRequired"
                            : "",
                        style: e.singleLabel ? "margin-bottom:10px" : "",
                        attrs: { "aria-label": e.effectiveLabelText },
                      },
                      [
                        e._v(
                          "\n        " +
                            e._s(e.effectiveLabelText) +
                            "\n        "
                        ),
                        e.isViewOnly
                          ? e._e()
                          : i("HelpIcon", {
                              attrs: {
                                label: e.effectiveLabelText,
                                text: e.settings.helpText,
                              },
                            }),
                      ],
                      1
                    )
                  : e._e(),
                e._v(" "),
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                i(
                  "div",
                  {
                    staticClass: "dfCompositControlChildMargin",
                    attrs: { "data-ng-bind": "settings.showErrorsLocally" },
                  },
                  e._l(e.children, function (e) {
                    return i(
                      "div",
                      [
                        i("ErrorList", {
                          attrs: { data: e, "force-non-local": !0 },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "d089e2bc",
          null
        ).exports,
        Gt = {
          mixins: [ot.Z],
          subscriptions() {
            return { effectiveHtmlContent: this.data.effectiveHtmlContent$() };
          },
        },
        qt = (0, ct.Z)(
          Gt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass: "clearfix",
                class: [e.settings.cssClass, e.colClass],
                style: {
                  "padding-left": e.settings.indent ? e.settings.indent : null,
                },
              },
              [
                i("span", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.effectiveHtmlContent,
                      expression: "effectiveHtmlContent",
                    },
                  ],
                  domProps: { innerHTML: e._s(e.effectiveHtmlContent) },
                }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      var jt = i(27204),
        Kt = i.n(jt);
      const zt = {
          mixins: [ot.Z],
          components: { "v-select": Kt() },
          data: () => ({ searchableItems: [] }),
          subscriptions() {
            return {
              defaultValue: this.data
                .defaultValue$()
                .pipe((0, h.U)((e) => (e.length > 0 ? e[0] : null))),
              hasValue: this.data.hasValue$(),
              groupedItems: this.data.groupedItems$(),
              ungroupedItems: this.data.ungroupedItems$(),
              effectiveLabel: this.data.effectiveLabel$(),
              effectiveLabelText: this.data.effectiveLabelText$(),
            };
          },
          created() {
            this.$watch(
              () => this.getAllItems,
              (e) => {
                this.arraysEqual(e, this.searchableItems) ||
                  (this.searchableItems = e);
              },
              { immediate: !0 }
            ),
              (this.focus = async () => {
                const e = async () => {
                  null == this.isDropdownSearchable
                    ? setTimeout(e, 100)
                    : this.isDropdownSearchable
                    ? ((this.$refs.dropdown.open = !0),
                      this.$refs.dropdown.searchEl.focus())
                    : this.$refs.dropdown.focus();
                };
                e();
              });
          },
          computed: {
            hasDefaultValue() {
              return !(0, b.hr)(this.defaultValue);
            },
            effectiveValue: {
              get() {
                return this.hasValue ? this.value : this.defaultValue;
              },
              set(e) {
                this.value = e;
              },
            },
            effectivePlaceholderText() {
              return (0, b.w5)(
                this.defaultValue,
                this.settings.effectivePlaceholderText
              );
            },
            getAllItems() {
              const e = (this.groupedItems || []).reduce(
                (e, t) => (
                  e.push({ groupName: t.key, text: null, isGroupLabel: !0 }),
                  e.push(...t.items),
                  e
                ),
                []
              );
              return [...(this.ungroupedItems || []), ...e].map((e, t) => ({
                ...e,
                id: t,
              }));
            },
            searchableDropdownValue: {
              get() {
                return this.searchableItems.find(
                  (e) => e.effectiveValue == this.effectiveValue
                );
              },
              set(e) {
                this.effectiveValue = e.effectiveValue;
              },
            },
          },
          asyncComputed: {
            isDropdownSearchable: {
              get() {
                return this.$store.getters.isFeatureFlagActiveAsync(
                  "SearchableDropdown"
                );
              },
              default: null,
            },
          },
          methods: {
            async openDropdown() {
              this.$refs.dropdown.searchEl
                .closest("[role='combobox']")
                .setAttribute("aria-label", this.effectiveLabelText),
                this.$refs.dropdown.searchEl.setAttribute(
                  "required",
                  this.settings.required
                ),
                await this.$nextTick(),
                this.$refs.dropdown.$el.querySelectorAll("ul").forEach((e) => {
                  e.setAttribute("aria-label", this.effectiveLabelText),
                    e.setAttribute("aria-required", this.settings.required);
                });
            },
            keydownHandlers: (e, t) => ({
              ...e,
              9: () => {
                (t.open = !1), e[9]();
              },
            }),
            arraysEqual: (e, t) =>
              Array.isArray(e) &&
              Array.isArray(t) &&
              e.length === t.length &&
              e.every((e, i) => JSON.stringify(e) === JSON.stringify(t[i])),
          },
        },
        Jt = (0, ct.Z)(
          zt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass:
                  "form-group focus-form-group dropdown-form-group clearfix",
                class: [
                  e.settings.isChild ? "form-group-child" : null,
                  e.colClass,
                ],
              },
              [
                e.isViewOnly
                  ? i("p", { staticClass: "pdf-inline" }, [
                      i("strong", { staticClass: "display-label" }, [
                        e._v(
                          e._s(e.effectiveLabel || e.effectiveLabelText) + ":"
                        ),
                      ]),
                      e._v(" "),
                      i(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.effectiveValue,
                              expression: "effectiveValue",
                            },
                          ],
                          staticClass: "display-value",
                        },
                        [e._v(e._s(e.effectiveValue))]
                      ),
                      e._v(" "),
                      e.showAdminEditControls
                        ? i(
                            "button",
                            {
                              staticClass: "passthrough icon icon-edit mr-1",
                              attrs: { type: "button" },
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.startAdminEdit.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Edit"),
                              ]),
                            ]
                          )
                        : e._e(),
                    ])
                  : [
                      i(
                        "div",
                        {
                          class: [
                            e.settings.isChild ? "form-group-child" : null,
                          ],
                        },
                        [
                          i(
                            "label",
                            {
                              staticClass: "control-label",
                              class: {
                                dfRequired: e.settings.required,
                                dfOptional: !e.settings.required,
                                "sr-only":
                                  e.effectiveLabelText != e.effectiveLabel,
                              },
                              attrs: {
                                "aria-label": e.effectiveLabelText,
                                for: e.vmId,
                              },
                            },
                            [
                              e._v(
                                "\n                " +
                                  e._s(e.effectiveLabelText) +
                                  "\n                "
                              ),
                              i("HelpIcon", {
                                attrs: {
                                  label: e.effectiveLabelText,
                                  text: e.settings.helpText,
                                },
                              }),
                              e._v(" "),
                              e.isAdminEditing
                                ? i("button", {
                                    staticClass:
                                      "passthrough icon icon-close mr-1",
                                    attrs: {
                                      type: "button",
                                      "aria-label": "Stop Edit",
                                    },
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(),
                                          e.cancelAdminEdit.apply(
                                            null,
                                            arguments
                                          )
                                        );
                                      },
                                    },
                                  })
                                : e._e(),
                            ],
                            1
                          ),
                          e._v(" "),
                          e.isDropdownSearchable
                            ? i(
                                "div",
                                [
                                  i("v-select", {
                                    ref: "dropdown",
                                    class: [
                                      e.settings.required ? "dfRequired" : null,
                                      e.settings.placeholderText
                                        ? "dfHasPlaceholder dfGhosted"
                                        : null,
                                    ],
                                    attrs: {
                                      "map-keydown": e.keydownHandlers,
                                      options: e.searchableItems,
                                      "get-option-key": function (e) {
                                        return e.id;
                                      },
                                      inputId: e.vmId,
                                      selectable: function (e) {
                                        return !e.hasOwnProperty(
                                          "isGroupLabel"
                                        );
                                      },
                                      label: "text",
                                      clearable: !1,
                                    },
                                    on: { "search:focus": e.openDropdown },
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "option",
                                          fn: function (t) {
                                            var s = t.text,
                                              a = t.groupName;
                                            return [
                                              t.isGroupLabel
                                                ? i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold",
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                            " +
                                                          e._s(a) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  )
                                                : i("span", [
                                                    e._v(
                                                      "\n                            " +
                                                        e._s(s) +
                                                        "\n                        "
                                                    ),
                                                  ]),
                                            ];
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      688950376
                                    ),
                                    model: {
                                      value: e.searchableDropdownValue,
                                      callback: function (t) {
                                        e.searchableDropdownValue = t;
                                      },
                                      expression: "searchableDropdownValue",
                                    },
                                  }),
                                ],
                                1
                              )
                            : i("div", [
                                i(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: e.effectiveValue,
                                        expression: "effectiveValue",
                                      },
                                    ],
                                    ref: "dropdown",
                                    staticClass: "form-control",
                                    class: [
                                      e.settings.required ? "dfRequired" : null,
                                      e.settings.placeholderText
                                        ? "dfHasPlaceholder dfGhosted"
                                        : null,
                                    ],
                                    attrs: {
                                      id: e.vmId,
                                      "aria-required": e.settings.required
                                        ? "true"
                                        : "false",
                                    },
                                    on: {
                                      change: function (t) {
                                        var i = Array.prototype.filter
                                          .call(t.target.options, function (e) {
                                            return e.selected;
                                          })
                                          .map(function (e) {
                                            return "_value" in e
                                              ? e._value
                                              : e.value;
                                          });
                                        e.effectiveValue = t.target.multiple
                                          ? i
                                          : i[0];
                                      },
                                    },
                                  },
                                  [
                                    e._l(e.ungroupedItems, function (t) {
                                      return i(
                                        "option",
                                        {
                                          domProps: { value: t.effectiveValue },
                                        },
                                        [e._v(e._s(t.text))]
                                      );
                                    }),
                                    e._v(" "),
                                    e._l(e.groupedItems, function (t) {
                                      return i(
                                        "optgroup",
                                        { attrs: { label: t.key } },
                                        e._l(t.items, function (t) {
                                          return i(
                                            "option",
                                            {
                                              domProps: {
                                                value: t.effectiveValue,
                                              },
                                            },
                                            [e._v(e._s(t.text))]
                                          );
                                        }),
                                        0
                                      );
                                    }),
                                  ],
                                  2
                                ),
                              ]),
                        ]
                      ),
                    ],
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          "3777435d",
          null
        ).exports;
      var Xt = i(97633);
      let Yt;
      !(function (e) {
        (e[(e.Text = 0)] = "Text"), (e[(e.Html = 1)] = "Html");
      })(Yt || (Yt = {}));
      const Qt = {
          components: { LoadingWheel: rt.Z },
          data: () => ({
            ColumnDisplayType: Yt,
            stringCoalesce: b.w5,
            sortIcon: {
              null: "icon-sortable",
              "asc primary": "icon-ascend",
              "desc primary": "icon-descend",
              "asc secondary": "icon-ascend secondary",
              "desc secondary": "icon-descend secondary",
            },
            skip: 0,
            top: 5,
            sort: [],
            inited: !1,
            updating: !1,
          }),
          mixins: [ot.Z],
          subscriptions() {
            return {
              rowsData: Je(() => this.inited).pipe(
                (0, m.w)((e) =>
                  e
                    ? this.data.rows$(
                        Je(() => this.skip),
                        Je(() => this.top),
                        Je(() => this.sort)
                      )
                    : (0, u.D)([[]])
                ),
                (0, h.U)(
                  (e) => (
                    e.dataCount > 0 && !(e.data?.length > 0) && (this.skip = 0),
                    { ...e, skip: this.skip, top: this.top, sort: this.sort }
                  )
                )
              ),
            };
          },
          created() {
            (0, b.hr)(this.settings.defaultSort) ||
              (this.sort = [[this.settings.defaultSort, "asc"]]),
              (0, b.hr)(this.settings.defaultPageSize) ||
                (this.top = this.settings.defaultPageSize),
              (this.inited = !0);
          },
          watch: {
            sort(e, t) {
              this.skip = 0;
            },
            top(e, t) {
              this.skip -= this.skip % e;
            },
          },
          computed: {
            selected: {
              get() {
                const e = [],
                  t = this.definition.settings.tableColumns.map(
                    (e) => e.datasourceColumn
                  ),
                  i = this.rows,
                  s = this.data.selectedRows;
                for (const a of s)
                  for (let s = 0; s < i.length; s++)
                    t.every((e, t) => a[t] == i[s][e]) &&
                      e.push(this.effectiveSkip + s);
                const a = e
                  .filter(
                    (e) =>
                      e < this.effectiveSkip + this.effectiveTop &&
                      e >= this.effectiveSkip
                  )
                  .map((e) => e - this.effectiveSkip);
                return this.selectMultiple ? a : a.length ? a[0] : null;
              },
              set(e) {
                if (this.updating) return;
                const t = this.definition.settings.tableColumns.map(
                    (e) => e.datasourceColumn
                  ),
                  i = this.rows;
                if (this.selectMultiple) {
                  const s = this.data.selectedRows,
                    a = e.map((e) => i[e]),
                    n = i.filter((e) => !a.some((t) => e == t)),
                    l = (e, i) => t.every((t, s) => e[t] == i[s]),
                    r = s.slice(),
                    o = a
                      .filter((e) => s.every((t) => !l(e, t)))
                      .map((e) => t.map((t) => e[t])),
                    u = r.filter((e) => !n.some((t) => l(t, e))).concat(o);
                  this.data.setSelectedRows(u);
                } else this.data.setSelectedRows([t.map((t) => i[e][t])]);
                this.$nextTick(() => {
                  this.updating = !1;
                });
              },
            },
            showSelectColumn() {
              return (
                null != this.settings.selectable &&
                this.settings.selectable != Xt.R.No
              );
            },
            selectMultiple() {
              return (
                null != this.settings.selectable &&
                this.settings.selectable == Xt.R.Multiple
              );
            },
            showIndexColumn() {
              return this.settings.showIndexColumn ?? !0;
            },
            rows() {
              return this.rowsData?.data;
            },
            rowsCount() {
              return this.rowsData?.dataCount;
            },
            effectiveSkip() {
              return this.rowsData?.skip;
            },
            effectiveTop() {
              return this.rowsData?.top;
            },
            effectiveSort() {
              return this.rowsData?.sort;
            },
            inputEffectiveDiffer() {
              return (
                this.skip != this.effectiveSkip ||
                this.top != this.effectiveTop ||
                this.sort != this.effectiveSort
              );
            },
            pages() {
              return Math.ceil(this.rowsCount / this.top);
            },
            pageOptions() {
              const e = [];
              for (let t = 0; t < this.rowsCount; t += this.top)
                e.push({ value: t, label: t / this.top + 1 });
              return e;
            },
          },
          methods: {
            next() {
              this.skip += this.top;
            },
            back() {
              this.skip = this.skip > this.top ? this.skip - this.top : 0;
            },
            toggleSort(e) {
              let t = this.sort.find((t) => t[0] == e);
              null == t
                ? (t = [e, "asc"])
                : (t[1] = "asc" == t[1] ? "desc" : "asc"),
                (this.sort = [t]);
            },
            sortDirDisplay(e) {
              const t = this.sortDir(e);
              return null == t ? "" : `<${t}>`;
            },
            sortDir(e) {
              let t = this.sort.find((t) => t[0] == e);
              if (null == t) return null;
              {
                const e = t == this.sort[0] ? "primary" : "secondary";
                return `${t[1]} ${e}`;
              }
            },
          },
        },
        ei = (0, ct.Z)(
          Qt,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                staticClass:
                  "form-group focus-form-group dropdown-form-group clearfix",
                class: [
                  e.settings.isChild ? "form-group-child" : null,
                  e.colClass,
                ],
              },
              [
                !e.isViewOnly || e.showSelectColumn
                  ? i("table", { staticClass: "table table-responsive-md" }, [
                      i("thead", [
                        i(
                          "tr",
                          [
                            e.showSelectColumn
                              ? i("th", [
                                  i("span", { staticClass: "sr-only" }, [
                                    e._v("Select"),
                                  ]),
                                ])
                              : e._e(),
                            e._v(" "),
                            e.showIndexColumn && !e.isViewOnly
                              ? i("th", [
                                  i(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [e._v("#")]
                                  ),
                                  i("span", { staticClass: "sr-only" }, [
                                    e._v("Column Index"),
                                  ]),
                                ])
                              : e._e(),
                            e._v(" "),
                            e._l(e.settings.tableColumns, function (t, s) {
                              return i(
                                "th",
                                { attrs: { id: e.vmId + "S" + s } },
                                [
                                  i(
                                    "button",
                                    {
                                      staticClass: "btn btn-bare p-0",
                                      attrs: { type: "button", role: "button" },
                                      on: {
                                        click: function (i) {
                                          return (
                                            i.preventDefault(),
                                            e.toggleSort(t.datasourceColumn)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      e._v(
                                        "\n                        " +
                                          e._s(
                                            e.stringCoalesce(
                                              t.displayLabel,
                                              t.datasourceColumn
                                            )
                                          ) +
                                          "\n                        "
                                      ),
                                      i("span", {
                                        staticClass: "icon",
                                        class:
                                          e.sortIcon[
                                            e.sortDir(t.datasourceColumn)
                                          ],
                                      }),
                                    ]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                      ]),
                      e._v(" "),
                      i(
                        "tbody",
                        [
                          e.isViewOnly
                            ? e._l(e.data.selectedRows, function (t) {
                                return i(
                                  "tr",
                                  [
                                    i("td", [
                                      i("input", {
                                        attrs: {
                                          type: e.selectMultiple
                                            ? "checkbox"
                                            : "radio",
                                          checked: "",
                                          disabled: "",
                                        },
                                      }),
                                    ]),
                                    e._v(" "),
                                    e._l(t, function (t, s) {
                                      return i(
                                        "td",
                                        [
                                          e.settings.tableColumns[s]
                                            .displayType ==
                                          e.ColumnDisplayType.Html
                                            ? [
                                                i("div", {
                                                  domProps: {
                                                    innerHTML: e._s(t),
                                                  },
                                                }),
                                              ]
                                            : [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(t) +
                                                    "\n                        "
                                                ),
                                              ],
                                        ],
                                        2
                                      );
                                    }),
                                  ],
                                  2
                                );
                              })
                            : null == e.rows ||
                              (0 == e.rows.length && e.inputEffectiveDiffer)
                            ? i("tr", [
                                i(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    attrs: {
                                      colspan:
                                        (e.showSelectColumn ? 1 : 0) +
                                        (e.showIndexColumn ? 1 : 0) +
                                        e.settings.tableColumns.length,
                                    },
                                  },
                                  [
                                    i("LoadingWheel", {
                                      attrs: { width: "64" },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : e._l(e.rows, function (t, s) {
                                return i(
                                  "tr",
                                  {
                                    class: {
                                      "table-active": e.selectMultiple
                                        ? e.selected.includes(s)
                                        : e.selected == s,
                                    },
                                  },
                                  [
                                    e.inputEffectiveDiffer
                                      ? i(
                                          "td",
                                          {
                                            staticClass: "text-center",
                                            attrs: {
                                              colspan:
                                                (e.showSelectColumn ? 1 : 0) +
                                                (e.showIndexColumn ? 1 : 0) +
                                                e.settings.tableColumns.length,
                                            },
                                          },
                                          [
                                            i("LoadingWheel", {
                                              staticClass: "d-inline-block",
                                              attrs: { width: "16" },
                                            }),
                                            e._v(" Loading..."),
                                          ],
                                          1
                                        )
                                      : [
                                          e.showSelectColumn
                                            ? i("td", [
                                                i(
                                                  "label",
                                                  {
                                                    staticClass: "sr-only",
                                                    attrs: {
                                                      for:
                                                        e.vmId + "selector" + s,
                                                    },
                                                  },
                                                  [e._v("Select Row")]
                                                ),
                                                e._v(" "),
                                                "checkbox" ==
                                                (e.selectMultiple
                                                  ? "checkbox"
                                                  : "radio")
                                                  ? i("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: e.selected,
                                                          expression:
                                                            "selected",
                                                        },
                                                      ],
                                                      attrs: {
                                                        id:
                                                          e.vmId +
                                                          "selector" +
                                                          s,
                                                        name:
                                                          e.vmId + "selector",
                                                        type: "checkbox",
                                                      },
                                                      domProps: {
                                                        value: s,
                                                        checked: Array.isArray(
                                                          e.selected
                                                        )
                                                          ? e._i(
                                                              e.selected,
                                                              s
                                                            ) > -1
                                                          : e.selected,
                                                      },
                                                      on: {
                                                        change: function (t) {
                                                          var i = e.selected,
                                                            a = t.target,
                                                            n = !!a.checked;
                                                          if (
                                                            Array.isArray(i)
                                                          ) {
                                                            var l = s,
                                                              r = e._i(i, l);
                                                            a.checked
                                                              ? r < 0 &&
                                                                (e.selected =
                                                                  i.concat([l]))
                                                              : r > -1 &&
                                                                (e.selected = i
                                                                  .slice(0, r)
                                                                  .concat(
                                                                    i.slice(
                                                                      r + 1
                                                                    )
                                                                  ));
                                                          } else e.selected = n;
                                                        },
                                                      },
                                                    })
                                                  : "radio" ==
                                                    (e.selectMultiple
                                                      ? "checkbox"
                                                      : "radio")
                                                  ? i("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: e.selected,
                                                          expression:
                                                            "selected",
                                                        },
                                                      ],
                                                      attrs: {
                                                        id:
                                                          e.vmId +
                                                          "selector" +
                                                          s,
                                                        name:
                                                          e.vmId + "selector",
                                                        type: "radio",
                                                      },
                                                      domProps: {
                                                        value: s,
                                                        checked: e._q(
                                                          e.selected,
                                                          s
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (t) {
                                                          e.selected = s;
                                                        },
                                                      },
                                                    })
                                                  : i("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: e.selected,
                                                          expression:
                                                            "selected",
                                                        },
                                                      ],
                                                      attrs: {
                                                        id:
                                                          e.vmId +
                                                          "selector" +
                                                          s,
                                                        name:
                                                          e.vmId + "selector",
                                                        type: e.selectMultiple
                                                          ? "checkbox"
                                                          : "radio",
                                                      },
                                                      domProps: {
                                                        value: s,
                                                        value: e.selected,
                                                      },
                                                      on: {
                                                        input: function (t) {
                                                          t.target.composing ||
                                                            (e.selected =
                                                              t.target.value);
                                                        },
                                                      },
                                                    }),
                                              ])
                                            : e._e(),
                                          e._v(" "),
                                          e.showIndexColumn
                                            ? i("td", [
                                                e._v(
                                                  e._s(e.effectiveSkip + s + 1)
                                                ),
                                              ])
                                            : e._e(),
                                          e._v(" "),
                                          e._l(
                                            e.settings.tableColumns,
                                            function (s) {
                                              return i(
                                                "td",
                                                [
                                                  s.displayType ==
                                                  e.ColumnDisplayType.Html
                                                    ? [
                                                        i("div", {
                                                          domProps: {
                                                            innerHTML: e._s(
                                                              t[
                                                                s
                                                                  .datasourceColumn
                                                              ]
                                                            ),
                                                          },
                                                        }),
                                                      ]
                                                    : [
                                                        e._v(
                                                          "\n                                " +
                                                            e._s(
                                                              t[
                                                                s
                                                                  .datasourceColumn
                                                              ]
                                                            ) +
                                                            "\n                            "
                                                        ),
                                                      ],
                                                ],
                                                2
                                              );
                                            }
                                          ),
                                        ],
                                  ],
                                  2
                                );
                              }),
                        ],
                        2
                      ),
                      e._v(" "),
                      e.isViewOnly || null == e.rows
                        ? e._e()
                        : i("tfoot", [
                            e.rowsCount > (e.settings.defaultPageSize || 5)
                              ? i("tr", [
                                  i(
                                    "td",
                                    {
                                      attrs: {
                                        colspan:
                                          (e.showSelectColumn ? 1 : 0) +
                                          (e.showIndexColumn ? 1 : 0) +
                                          e.settings.tableColumns.length,
                                      },
                                    },
                                    [
                                      i("div", { staticClass: "d-flex" }, [
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex align-items-center",
                                          },
                                          [
                                            i(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-outline-secondary",
                                                attrs: {
                                                  type: "button",
                                                  id: e.vmId + "B",
                                                  disabled: e.skip <= 0,
                                                },
                                                on: {
                                                  click: function (t) {
                                                    return (
                                                      t.preventDefault(),
                                                      e.back.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [e._v("Back")]
                                            ),
                                            e._v(
                                              "\n                             \n                            "
                                            ),
                                            i(
                                              "label",
                                              {
                                                staticClass: "mb-0 ml-1",
                                                attrs: { for: e.vmId + "P" },
                                              },
                                              [e._v("Page:")]
                                            ),
                                            e._v(
                                              "\n                             \n                            "
                                            ),
                                            i(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.skip,
                                                    expression: "skip",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm w-auto d-inline px-0 mx-1 text-center",
                                                attrs: { id: e.vmId + "P" },
                                                on: {
                                                  change: function (t) {
                                                    var i =
                                                      Array.prototype.filter
                                                        .call(
                                                          t.target.options,
                                                          function (e) {
                                                            return e.selected;
                                                          }
                                                        )
                                                        .map(function (e) {
                                                          return "_value" in e
                                                            ? e._value
                                                            : e.value;
                                                        });
                                                    e.skip = t.target.multiple
                                                      ? i
                                                      : i[0];
                                                  },
                                                },
                                              },
                                              e._l(e.pageOptions, function (t) {
                                                return i(
                                                  "option",
                                                  {
                                                    domProps: {
                                                      value: t.value,
                                                    },
                                                  },
                                                  [e._v(e._s(t.label))]
                                                );
                                              }),
                                              0
                                            ),
                                            e._v(
                                              "\n                            / " +
                                                e._s(e.pages) +
                                                "\n                             \n                            "
                                            ),
                                            i(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-outline-secondary",
                                                attrs: {
                                                  type: "button",
                                                  id: e.vmId + "N",
                                                  disabled:
                                                    e.skip + e.top >=
                                                    e.rowsCount,
                                                },
                                                on: {
                                                  click: function (t) {
                                                    return (
                                                      t.preventDefault(),
                                                      e.next.apply(
                                                        null,
                                                        arguments
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [e._v("Next")]
                                            ),
                                          ]
                                        ),
                                        e._v(" "),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex align-items-center ml-auto pl-5",
                                          },
                                          [
                                            i(
                                              "label",
                                              {
                                                staticClass: "mb-0",
                                                attrs: { for: e.vmId + "PS" },
                                              },
                                              [e._v("Page Size:")]
                                            ),
                                            e._v(" "),
                                            i(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.top,
                                                    expression: "top",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm w-auto d-inline px-0 ml-2 text-center",
                                                attrs: { id: e.vmId + "PS" },
                                                on: {
                                                  change: function (t) {
                                                    var i =
                                                      Array.prototype.filter
                                                        .call(
                                                          t.target.options,
                                                          function (e) {
                                                            return e.selected;
                                                          }
                                                        )
                                                        .map(function (e) {
                                                          return "_value" in e
                                                            ? e._value
                                                            : e.value;
                                                        });
                                                    e.top = t.target.multiple
                                                      ? i
                                                      : i[0];
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "option",
                                                  { domProps: { value: 5 } },
                                                  [e._v("5")]
                                                ),
                                                e._v(" "),
                                                i(
                                                  "option",
                                                  { domProps: { value: 25 } },
                                                  [e._v("25")]
                                                ),
                                                e._v(" "),
                                                i(
                                                  "option",
                                                  { domProps: { value: 50 } },
                                                  [e._v("50")]
                                                ),
                                                e._v(" "),
                                                i(
                                                  "option",
                                                  { domProps: { value: 100 } },
                                                  [e._v("100")]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ])
                              : e._e(),
                          ]),
                    ])
                  : e._e(),
                e._v(" "),
                i("ErrorList", { attrs: { data: e.data } }),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "1ff2c8b8",
          null
        ).exports;
      var ti = i(47138);
      const ii = {
        mixins: [ot.Z],
        components: { LoadingContainer: ti.Z },
        asyncComputed: {
          async hasRelatedPages() {
            return (await this.relatedPages).length > 0;
          },
          async hasOtherVersions() {
            return (await this.otherVersions).length > 0;
          },
        },
        computed: {
          directoryData() {
            return this.$root
              .getUrl("getDirectoryData")
              .then((e) => fetch(e))
              .then((e) => e.json());
          },
          async otherVersions() {
            const e = await this.directoryData,
              { formName: t, formVersion: i } = this.$store.state.page.formData,
              s = (e, t) =>
                null == t
                  ? null == e
                    ? 0
                    : -1
                  : null == e || e < t
                  ? 1
                  : e > t
                  ? -1
                  : 0,
              a = e.Pages.filter(
                (e) => e.FormName == t && e.FormVersion != i
              ).sort((e, t) =>
                null != e.FormVersionOrder || null != t.FormVersionOrder
                  ? -1 * s(e.FormVersionOrder, t.FormVersionOrder)
                  : null != e.FormVersionLabel || null != t.FormVersionLabel
                  ? -1 * s(e.FormVersionLabel, t.FormVersionLabel)
                  : -1 * s(e.FormVersion, t.FormVersion)
              );
            return await Promise.all(
              a.map(async (e) => ({
                displayLabel: e.FormVersionLabel || e.FormTitle,
                url: await this.$root.getUrl("formGoto", {
                  areaCode: e.Tenant,
                  formName: e.FormName,
                  formVersion: e.FormVersion,
                  formHash: e.FormHash,
                  page: 0,
                }),
                formName: e.FormName,
                formVersion: e.FormVersion,
                formHash: e.FormHash,
                areaCode: e.Tenant,
              }))
            );
          },
          async relatedPages() {
            const e = await this.directoryData,
              t = (this.$store.getters["page/formSettings"].relatedPages || [])
                .map((t) => {
                  let i = null;
                  return (
                    e.Pages.some(
                      (e) => (
                        e.FormName != t.formName ||
                          e.FormVersion != t.formVersion ||
                          (e.Tenant != t.formTenant && null != t.FormTenant) ||
                          (i = e),
                        !!i
                      )
                    ),
                    i ? { pageData: i, relatedData: t } : null
                  );
                })
                .filter((e) => null != e);
            return await Promise.all(
              t.map(async (e) => {
                let { pageData: t, relatedData: i } = e;
                return {
                  displayLabel: t.FormTitle,
                  url: await this.$root.getUrl("formGoto", {
                    areaCode: t.Tenant,
                    formName: t.FormName,
                    formVersion: t.FormVersion,
                    formHash: t.FormHash,
                    page: 0,
                  }),
                  formName: i.formName,
                  formVersion: i.formVersion,
                  areaCode: i.formTenant,
                  formHash: t.FormHash,
                };
              })
            );
          },
        },
        methods: {
          async gotoOtherPage(e) {
            this.$root.changePage({
              page: "Page",
              settings: {
                areaCode: e.areaCode,
                formName: e.formName,
                formVersion: e.formVersion,
                formHash: await e.formHash,
                page: 0,
              },
            });
          },
        },
      };
      var si = (0, ct.Z)(
        ii,
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "LoadingContainer",
            { attrs: { promise: e.directoryData } },
            [
              i(
                "div",
                { class: [e.settings.cssClass, e.colClass] },
                [
                  i("div", { staticClass: "row" }, [
                    i(
                      "div",
                      {
                        class:
                          e.hasRelatedPages || e.hasOtherVersions
                            ? "col-md-8"
                            : "col-12",
                      },
                      [
                        i("ChildrenList", {
                          attrs: {
                            "children-ids": e.children,
                            "view-only": e.isViewOnly,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    e.hasRelatedPages || e.hasOtherVersions
                      ? i(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            e.hasOtherVersions
                              ? i("LoadingContainer", {
                                  attrs: { promise: e.otherVersions },
                                  scopedSlots: e._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (t) {
                                          return [
                                            i(
                                              "strong",
                                              { staticClass: "d-block mb-1" },
                                              [e._v("Other Versions")]
                                            ),
                                            e._v(" "),
                                            i(
                                              "ul",
                                              { staticClass: "text-smaller" },
                                              e._l(t, function (t) {
                                                return i("li", [
                                                  i(
                                                    "a",
                                                    {
                                                      attrs: { href: t.url },
                                                      on: {
                                                        click: function (i) {
                                                          return (
                                                            i.preventDefault(),
                                                            e.gotoOtherPage(t)
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v(e._s(t.displayLabel))]
                                                  ),
                                                ]);
                                              }),
                                              0
                                            ),
                                          ];
                                        },
                                      },
                                    ],
                                    null,
                                    !1,
                                    590810153
                                  ),
                                })
                              : e._e(),
                            e._v(" "),
                            e.hasRelatedPages
                              ? i("LoadingContainer", {
                                  attrs: { promise: e.relatedPages },
                                  scopedSlots: e._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (t) {
                                          return [
                                            i(
                                              "strong",
                                              { staticClass: "d-block mb-1" },
                                              [e._v("Related")]
                                            ),
                                            e._v(" "),
                                            i(
                                              "ul",
                                              { staticClass: "text-smaller" },
                                              e._l(t, function (t) {
                                                return i("li", [
                                                  i(
                                                    "a",
                                                    {
                                                      attrs: { href: t.url },
                                                      on: {
                                                        click: function (i) {
                                                          return (
                                                            i.preventDefault(),
                                                            e.gotoOtherPage(t)
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v(e._s(t.displayLabel))]
                                                  ),
                                                ]);
                                              }),
                                              0
                                            ),
                                          ];
                                        },
                                      },
                                    ],
                                    null,
                                    !1,
                                    752010859
                                  ),
                                })
                              : e._e(),
                          ],
                          1
                        )
                      : e._e(),
                  ]),
                  e._v(" "),
                  i("AdminSettingsDifferences", { attrs: { data: e.data } }),
                ],
                1
              ),
            ]
          );
        },
        [],
        !1,
        null,
        null,
        null
      );
      const ai = si.exports,
        ni = { mixins: [ot.Z] },
        li = (0, ct.Z)(
          ni,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { class: [e.settings.cssClass, e.colClass] },
              [
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        ri = { mixins: [ot.Z] },
        oi = (0, ct.Z)(
          ri,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { class: [e.colClass] },
              [
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.children,
                    "view-only": e.isViewOnly,
                  },
                }),
                e._v(" "),
                i("Comments", { attrs: { data: e.data } }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        ui = {
          mixins: [ot.Z],
          inject: ["advanceForm"],
          computed: {
            buttonText() {
              return this.$store.getters["page/mustLogin"] &&
                !this.$root.isLoggedIn
                ? this.settings.buttonTextWhenLoginRequired ||
                    "Log in to Start Form"
                : this.settings.buttonText || "Start Form";
            },
          },
        },
        ci = (0, ct.Z)(
          ui,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return e.isViewOnly
              ? e._e()
              : i(
                  "div",
                  { staticClass: "df-inline-btn" },
                  [
                    i(
                      "button",
                      {
                        staticClass:
                          "btn btn-primary dfNavButton cancel df-save-and-continue-btn",
                        attrs: {
                          name: "saveType",
                          type: "button",
                          value: "ConfirmSubmitForm",
                        },
                        on: {
                          click: function (t) {
                            return (
                              t.preventDefault(),
                              e.advanceForm.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [e._v(e._s(e.buttonText) + " >")]
                    ),
                    e._v(" "),
                    i("AdminSettingsDifferences", { attrs: { data: e.data } }),
                  ],
                  1
                );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        di = { mixins: [ot.Z] },
        mi = (0, ct.Z)(
          di,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "df-inline-btn" },
              [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: {
                      href: e.settings.linkUrl,
                      target: "_blank",
                      rel: "noopener",
                    },
                  },
                  [e._v(e._s(e.settings.linkText || "Goto"))]
                ),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        hi = {
          mixins: [ot.Z],
          computed: {
            url() {
              return this.data.fileUrl;
            },
          },
        },
        fi = (0, ct.Z)(
          hi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { staticClass: "df-inline-btn" },
              [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary dfNavButton",
                    attrs: { target: "_blank", href: e.url },
                  },
                  [e._v(e._s(e.settings.linkText || "Download form as a PDF"))]
                ),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        pi = {
          subscriptions() {
            return {
              displayElementVmId:
                this.settings.elementId == this.data.id
                  ? (0, u.D)([[]])
                  : this.$store.getters["page/getElementsById$"](
                      this.settings.elementId,
                      this.vmId
                    ).pipe(
                      (0, h.U)(function (e) {
                        return e.map((e) => e.vmId);
                      })
                    ),
            };
          },
          mixins: [ot.Z],
          inject: {
            elementFilter: { from: "elementFilter", default: () => (e) => !0 },
          },
          provide() {
            return {
              elementFilter: (e) =>
                e.id != this.data.id && this.elementFilter(e),
            };
          },
        },
        gi = (0, ct.Z)(
          pi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { class: [e.colClass] },
              [
                i("ChildrenList", {
                  attrs: {
                    "children-ids": e.displayElementVmId,
                    "view-only": !0,
                  },
                }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        vi = {
          mixins: [ot.Z],
          methods: {
            page(e) {
              return this.data.calculationContext.rootElement.getElementsByFilter(
                (t) => t.definition.id == e.definition.settings.elementId
              )[0];
            },
            pageTitle(e) {
              return this.page(e).definition.settings.title;
            },
          },
          provide() {
            return {
              elementFilter: (e) =>
                !(this.settings.hiddenElements || []).includes(e.id),
            };
          },
          subscriptions() {
            return {
              visible: (0, c.a)(
                this.children.map((e) =>
                  this.page(e)
                    .isEnabled$()
                    .pipe((0, h.U)((t) => ({ id: e.vmId, enabled: t })))
                )
              ).pipe(
                (0, h.U)((e) => {
                  const t = {};
                  for (var i of e) t[i.id] = i.enabled;
                  return t;
                })
              ),
            };
          },
        },
        bi = (0, ct.Z)(
          vi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              { class: [e.settings.cssClass, e.colClass] },
              [
                e._l(e.children, function (t) {
                  return i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.visible[t.vmId],
                          expression: "visible[page.vmId]",
                        },
                      ],
                    },
                    [
                      i("h2", { staticClass: "df-section-title" }, [
                        e._v(
                          "\n            " + e._s(e.pageTitle(t)) + "\n        "
                        ),
                      ]),
                      e._v(" "),
                      i(
                        "div",
                        { staticStyle: { padding: "0 15px" } },
                        [
                          i("ChildrenList", {
                            attrs: { "children-ids": [t], "view-only": !0 },
                          }),
                        ],
                        1
                      ),
                    ]
                  );
                }),
                e._v(" "),
                i("AdminSettingsDifferences", { attrs: { data: e.data } }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        yi = "Submit",
        Ci = {
          data: () => ({
            pageNavCollapsed: !1,
            page: null,
            formData$: new o.X(),
            segment: null,
            condensed: !1,
            buttonCondensed: !1,
            mustToggle: !1,
            togglePageHeader: {},
          }),
          subscriptions() {
            return {
              submitButtons: this.submitButtons$,
              segment: this.segment$,
              visiblePages: this.visiblePages$,
              enabledPages: this.enabledPages$,
              currentPage: this.currentPage$,
              currentSegment: this.currentSegment$,
              isSubmittable: this.isSubmittable$,
              isCurrentPageViewOnly: this.isCurrentPageViewOnly$,
              isCurrentPageControlsViewOnly:
                this.isCurrentPageControlsViewOnly$,
              currentSegmentLabel: this.currentSegmentLabel$,
            };
          },
          props: ["pageGroups", "pageI", "eventBus"],
          components: {
            PageDef: dt,
            AdminSettingsDifferences: mt.Z,
            SegmentSelector: ft,
          },
          watch: {
            formData: {
              handler() {
                this.formData$.next(this.formData);
              },
              immediate: !0,
            },
          },
          async created() {
            await this.gotoAvailablePage(this.$props.pageI),
              this.$watch("segment", async () => {
                this.adminPreview || (await this.gotoAvailablePage());
              }),
              this.$watch(
                "page",
                async (e) => {
                  this.$emit("set-page", e);
                },
                { immediate: !0 }
              ),
              this.$watch(
                "currentPage",
                () => {
                  this.adminPreview &&
                    this.currentPage.definition.settings.segment &&
                    this.$store.commit(
                      "page/setSegment",
                      this.currentPage.definition.settings.segment
                    ),
                    !this.mustLogin ||
                      null == this.currentPage ||
                      this.currentPage.children.every(
                        (e) => e.allowAnonymous
                      ) ||
                      this.$root.isLoggedIn ||
                      this.forceLogin(),
                    this.$refs.FormTitle &&
                      this.$refs.FormTitle.scrollIntoView(!1),
                    this.initPageHeaderToggler(),
                    this.$emit("update-page", { title: this.segmentTitle }, !0);
                },
                { immediate: !0 }
              );
          },
          mounted() {
            new ResizeObserver((e) => {
              for (let t of e)
                if (t.contentBoxSize) {
                  const e = Array.isArray(t.contentBoxSize)
                    ? t.contentBoxSize[0]
                    : t.contentBoxSize;
                  (this.condensed = e.inlineSize < 737),
                    (this.buttonCondensed = e.inlineSize < 576);
                }
            }).observe(this.$refs.Form.parentElement);
          },
          computed: {
            ...(0, a.rn)("page", {
              formData: (e) => e.formData,
              formDataLoading: (e) => e.formDataLoading,
              showAdminDiff: (e) => e.showAdminDiff,
              adminEditElementIds: (e) => e.adminEditElementIds,
            }),
            ...(0, a.Se)("page", [
              "segments",
              "availableSegments",
              "activeSegments",
              "comments",
              "formId",
              "formTenantCode",
              "status",
              "title",
              "formSettings",
              "isPageObjViewOnly",
              "isPageObjViewOnly$",
              "isPageObjControlsViewOnly$",
              "adminPreview",
              "adminReview",
              "hasChanges",
              "isWorkflow",
              "canChangeStatus",
              "formChanges",
              "mustLogin",
              "pages",
              "pendingActionPromise",
              "endUserStatuses",
              "status$",
              "segment$",
              "isOffline",
              "offlineContent",
            ]),
            hasPendingAdminEdits() {
              return this.adminEditElementIds.length > 0;
            },
            isSubmittable$() {
              const e = Je(() => this.isPendingAssignment);
              return (0, c.a)([
                this.$store.getters["page/isSubmittable$"],
                e,
              ]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return t && !i;
                })
              );
            },
            isViewOnly() {
              return (
                this.$store.getters["page/isViewOnly"] ||
                this.isPendingAssignment
              );
            },
            visiblePages$() {
              const e = Je(() => this.pageGroups);
              return (0, c.a)([
                this.$store.getters["page/visiblePages$"],
                e,
              ]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return t.filter((e) => i.some((t) => t.pages.includes(e)));
                })
              );
            },
            enabledPages$() {
              const e = Je(() => this.pageGroups);
              return (0, c.a)([
                this.$store.getters["page/enabledPages$"],
                e,
              ]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return t.filter((e) => i.some((t) => t.pages.includes(e)));
                })
              );
            },
            submitablePages() {
              return this.pageGroups
                .filter((e) => e.pages.some((e) => !this.isPageObjViewOnly(e)))
                .map((e) => e.pages[e.pages.length - 1]);
            },
            currentPage$() {
              const e = Je(() => this.page),
                t = Je(() => this.$store.getters["page/pages"]);
              return (0, c.a)([t, e]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return null == i ? null : t[i - 1];
                })
              );
            },
            currentSegment$() {
              return this.currentPage$.pipe(
                (0, h.U)((e) =>
                  null == e
                    ? null
                    : this.segments.find(
                        (t) => t.id == e.definition.settings.segment
                      )
                )
              );
            },
            currentSegmentLabel$() {
              return this.currentSegment$.pipe(
                (0, h.U)((e) =>
                  null == e ? null : e.definition.settings.displayLabel
                )
              );
            },
            submitButtons$() {
              return (0, c.a)([this.formData$, this.segment$]).pipe(
                (0, m.w)((e) => {
                  let [t, i] = e;
                  if (null == t) return (0, u.D)([]);
                  const s = t.getSegmentView(i),
                    a = this.formSettings.submitButtonTextCalculationId,
                    n = (
                      null == a ? (0, u.D)([null]) : s.resolveCalculation(a)
                    ).pipe(
                      (0, h.U)((e) =>
                        e
                          ? e.join("")
                          : this.formSettings.effectiveSubmitButtonText
                      )
                    ),
                    l = s.getElementsByFilter(
                      (e) => e.submitButtons || e.submitButtons$
                    );
                  let r, o;
                  r =
                    l.length > 0
                      ? (0, c.a)(
                          l.map((e) =>
                            e.submitButtons$
                              ? e.submitButtons$()
                              : (0, u.D)([e.submitButtons()])
                          )
                        ).pipe((0, h.U)((e) => e.flat()))
                      : (0, u.D)([[]]);
                  const d = s.getElementsByFilter(
                    (e) => e.submitText || e.submitText$
                  );
                  return (
                    (o =
                      d.length > 0
                        ? (0, c.a)(
                            n,
                            (0, c.a)(
                              d.map((e) =>
                                (0, c.a)([
                                  e.hasCustomSubmitText$
                                    ? e.hasCustomSubmitText$()
                                    : e.hasCustomSubmitText
                                    ? (0, u.D)([e.hasCustomSubmitText()])
                                    : (0, u.D)([!1]),
                                  e.submitText$
                                    ? e.submitText$()
                                    : (0, u.D)([e.submitText()]),
                                ])
                              )
                            )
                          ).pipe(
                            (0, h.U)((e) => {
                              let [t, i] = e;
                              return (
                                t != yi && (i = i.filter((e) => e[0])),
                                (i = i.filter((e) => e[1])),
                                i.length > 0 ? i[0][1] : t
                              );
                            })
                          )
                        : n),
                    (0, c.a)([r, o]).pipe(
                      (0, h.U)((e) => {
                        let [t, i] = e;
                        return t.length > 0
                          ? [
                              ...t.map((e) => ({ ...e, text: e.text || yi })),
                            ].sort((e, t) => (e.order || 0) - (t.order || 0))
                          : [{ trigger: null, text: i || yi }];
                      })
                    )
                  );
                })
              );
            },
            isCurrentPageViewOnly$() {
              return this.currentPage$.pipe(
                (0, m.w)(
                  (e) => this.isPageObjViewOnly$(e) || this.isPendingAssignment
                )
              );
            },
            isCurrentPageControlsViewOnly$() {
              return this.currentPage$.pipe(
                (0, m.w)(
                  (e) =>
                    this.isPageObjControlsViewOnly$(e) ||
                    this.isPendingAssignment
                )
              );
            },
            showPageNav() {
              return (
                null == this.currentPage ||
                !(
                  this.mustLogin &&
                  !this.$root.isLoggedIn &&
                  this.currentPage.children.every((e) => e.allowAnonymous)
                )
              );
            },
            canRetreatForm() {
              const e = this.pageGroups.map((e) => e.pages).flat();
              return null == e || this.currentPage != e[0];
            },
            canAdvanceForm() {
              if (this.isCurrentPageViewOnly) {
                const e = this.pageGroups.map((e) => e.pages).flat();
                if (null == e) return !0;
                if (this.currentPage == e[e.length - 1]) return !1;
              }
              return !0;
            },
            isDeletable() {
              return (
                !this.adminPreview && !this.adminReview && null != this.formId
              );
            },
            isWorkflowManualOverrideVisible() {
              return (
                !this.adminPreview &&
                this.adminReview &&
                this.isWorkflow &&
                this.canChangeStatus
              );
            },
            isWorkflowManualOverrideEnabled() {
              return this.isWorkflowManualOverrideVisible;
            },
            isWorkflowReturnVisible() {
              return (
                !this.adminPreview &&
                this.adminReview &&
                this.isWorkflow &&
                null != this.formId
              );
            },
            isWorkflowReturnEnabled() {
              return (
                this.isWorkflowReturnVisible &&
                (!this.anonymousUser ||
                  (null != this.currentSegment &&
                    null !=
                      this.currentSegment.definition.settings
                        .returnEmailAddressCalculationId &&
                    !0))
              );
            },
            hasMultiplePages: function () {
              return null != this.visiblePages && this.visiblePages.length > 1;
            },
            isPendingAssignment() {
              return (
                (this.availableSegments || [])
                  .filter((e) => this.pageGroups.some((t) => t.id == e.id))
                  .some((e) => e.id == this.segment) &&
                !(this.activeSegments || [])
                  .filter((e) => this.pageGroups.some((t) => t.id == e.id))
                  .some((e) => e.id == this.segment)
              );
            },
            formId() {
              return this.$store.getters["page/formId"];
            },
            showChanges() {
              return this.$store.getters["page/showChanges"];
            },
            segmentTitle() {
              return this.isWorkflow ? this.currentSegmentLabel : this.title;
            },
          },
          provide() {
            return {
              getElementComponent: (e, t) =>
                (function (e, t) {
                  const i = e.definition.type;
                  switch (i) {
                    case "TextboxDef":
                      return vt;
                    case "FileDef":
                      return yt;
                    case "CheckGroupDef":
                      return xt;
                    case "RadioGroupDef":
                      return Dt;
                    case "CalculatedDef":
                      return It;
                    case "ValidationDef":
                      return Vt;
                    case "DisplayIfOtherHasValueDef":
                      return Tt;
                    case "ForEachDef":
                      return Lt;
                    case "ForEachChildIdDef":
                      return Rt;
                    case "RegionDef":
                      return Nt;
                    case "SectionDef":
                      return Ut;
                    case "AddressDef":
                      return Ht;
                    case "DatePickerDef":
                      return Zt;
                    case "ContentDef":
                      return qt;
                    case "DropDownListDef":
                      return Jt;
                    case "DataTableDef":
                      return ei;
                    case "LandingPageTemplateDef":
                      return ai;
                    case "ContentTemplatePageDef":
                      return li;
                    case "ContactPageTemplateDef":
                      return oi;
                    case "FormAlternativeDef":
                      return ci;
                    case "LinkAlternativeDef":
                      return mi;
                    case "PdfAlternativeDef":
                      return fi;
                    case "DisplayElementDef":
                      return gi;
                    case "ReviewPageTemplatePageDef":
                      return bi;
                    case "PageDef":
                      return dt;
                    case "CaptchaControlDef":
                      return null;
                  }
                  throw `Unknown element type: ${i}`;
                })(e),
              advanceForm: (e) => this.advanceForm(e),
              retreatForm: () => this.retreatForm(),
              gotoSubPage: () => this.gotoSubPage(),
              pageEventBus: () => this.eventBus,
            };
          },
          inject: [
            "forceLogin",
            "gotoIndex",
            "deleteDraft",
            "returnSubmission",
            "startWorkflowManualOverride",
            "submit",
            "pageStatusFetcher",
          ],
          methods: {
            saveAllAdminEdits() {
              setTimeout(
                () => this.$store.dispatch("page/saveAllAdminEdits"),
                0
              );
            },
            async adjustPage(e) {
              const t = this.page;
              let i = null;
              t &&
                !this.$store.state.page.formDataLoading &&
                (this.$store.getters["page/adminPreview"] ||
                this.$store.state.page.isSaveDisabledOnSectionChange ||
                this.$store.getters["page/isClientValidationOnly"]
                  ? await this.$store.dispatch("page/_setPageStatus", {
                      page: t,
                      status: null,
                    })
                  : this.$store.getters["page/isViewOnly"] ||
                    this.$store.getters["page/isPageViewOnly"](t) ||
                    (i = this.$store.dispatch("page/saveFormPage", {
                      page: t,
                    }))),
                (this.page = this.page + e),
                await i;
            },
            async gotoPage(e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = null;
              const s = this.page;
              s &&
                !this.$store.state.page.formDataLoading &&
                (this.$store.getters["page/adminPreview"] ||
                this.$store.state.page.isSaveDisabledOnSectionChange ||
                this.$store.getters["page/isClientValidationOnly"]
                  ? await this.$store.dispatch("page/_setPageStatus", {
                      page: s,
                      status: null,
                    })
                  : this.$store.getters["page/isViewOnly"] ||
                    this.$store.getters["page/isPageViewOnly"](s) ||
                    (i = this.$store.dispatch("page/saveFormPage", {
                      page: s,
                    }))),
                this.togglePage(e);
              const a = this.pages;
              (this.page = a.indexOf(e) + 1),
                await i,
                this.focusFirstElement(t);
            },
            async gotoSubPage(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const i = this.currentPage;
              !(
                null != i &&
                this.pages.indexOf(i) < this.pages.indexOf(e) &&
                i.permitLaterPages$
              ) ||
              (await i
                .permitLaterPages$()
                .pipe((0, f.P)())
                .toPromise()) ||
              this.isViewOnly ||
              this.isPageObjViewOnly(i) ||
              (await this.adjustPage(0),
              !i.permitLaterPages$ ||
                (await i
                  .permitLaterPages$()
                  .pipe((0, f.P)())
                  .toPromise()) ||
                this.isViewOnly ||
                this.isPageObjViewOnly(i))
                ? ((this.mustToggle = t), this.gotoPage(e))
                : alert("You cannot advance until you correct the issues");
            },
            gotoAvailablePage(e) {
              return new Promise((t) => {
                const i = async () => {
                  const s = this.enabledPages,
                    a = this.pages;
                  if (null == s || null == a) return void setTimeout(i, 100);
                  (null == e || e <= 0 || e > a.length) &&
                    (e =
                      Math.max(
                        a.findIndex(
                          (e) =>
                            !this.isPageObjViewOnly(e) &&
                            this.enabledPages.includes(e)
                        ),
                        0
                      ) + 1);
                  let n = a[e - 1];
                  for (; !s.includes(n) && e - 2 < a.length; )
                    e++, (n = a[e - 1]);
                  for (; !s.includes(n) && e > 1; ) e--, (n = a[e - 1]);
                  if (this.adminReview) {
                    const e = a.find((e) => e == this.pageGroups[0].pages[0]);
                    n = null != e && s.includes(e) ? e : n;
                  }
                  if (this.enabledPages.includes(n))
                    await this.gotoSubPage(n), t();
                  else {
                    if (!this.enabledPages.some((e) => e.id == n.id))
                      throw new Error("No possible pages");
                    this.$nextTick(i);
                  }
                };
                i();
              });
            },
            openNav(e) {
              window.matchMedia("(max-width: 767px)").matches &&
                ((this.pageNavCollapsed = !this.pageNavCollapsed),
                this.pageNavCollapsed ||
                  (e.stopPropagation(), e.preventDefault()));
            },
            pageStatus: function (e) {
              return "Complete" == e
                ? "Page is completed."
                : "Invalid" == e
                ? "Page has errors."
                : null;
            },
            pageStatusClass: function (e) {
              return null == e
                ? null
                : "Complete" == e
                ? "dfPageLink_Complete"
                : "Invalid" == e
                ? "dfPageLink_Invalid"
                : "InProcess" == e
                ? "dfPageLink_InProcess"
                : "NotStarted" == e
                ? "dfPageLink_NotStarted"
                : "Saving" == e
                ? "dfPageLink_Saving"
                : "dfPageLink_Disabled";
            },
            async advanceForm(e) {
              const t = this.pageGroups.map((e) => e.pages).flat();
              if (null != t) {
                if (this.currentPage == t[t.length - 1])
                  return this.submit(null, e);
                {
                  const i = this.currentPage;
                  if (
                    i.permitLaterPages$ &&
                    !(await i
                      .permitLaterPages$()
                      .pipe((0, f.P)())
                      .toPromise()) &&
                    !this.isViewOnly &&
                    !this.isPageObjViewOnly(i) &&
                    (await this.adjustPage(0),
                    i.permitLaterPages$ &&
                      !(await i
                        .permitLaterPages$()
                        .pipe((0, f.P)())
                        .toPromise()) &&
                      !this.$store.getters["page/isViewOnly"] &&
                      !this.$store.getters["page/isPageViewOnly"](i))
                  )
                    return void alert(
                      "You cannot advance until you correct the issues"
                    );
                  let s = t.indexOf(this.currentPage),
                    a = t[++s];
                  for (; !this.enabledPages.includes(a) && null != a; )
                    a = t[++s];
                  null == a
                    ? await this.submit(null, e)
                    : await this.gotoPage(a);
                }
              }
            },
            async retreatForm() {
              const e = this.pageGroups.map((e) => e.pages).flat();
              if (null == e) return;
              let t = e.indexOf(this.currentPage),
                i = e[--t];
              for (; !this.enabledPages.includes(i) && null != i; ) i = e[--t];
              null == i || (await this.gotoPage(i));
            },
            saveAndExit: async function () {
              this.throwIfViewOnly(),
                await this.$store.dispatch("page/saveFormPage", {
                  page: this.page,
                  isSaveAndExit: !0,
                }),
                await this.gotoIndex();
            },
            throwIfViewOnly() {
              if (this.isViewOnly)
                throw new Error("Should not be called for view only pages");
            },
            truncateLongText: (e) =>
              e.length <= 40 ? e : e.slice(0, 40) + "...",
            async focusFirstElement(e) {
              const t = e
                ? await this.currentPage.firstInvalidElement(!1)
                : this.currentPage.firstFocusableElement();
              this.eventBus.emit("focus", t?.vmId);
            },
            pageGroupStatus(e) {
              let t = "dfPageLink_Disabled";
              const i = (e) =>
                (this.segments || []).find(
                  (t) => e.definition.settings.segment == t.id
                )?.status;
              for (const s of e) {
                const e = this.pageStatusFetcher()[s.vmId];
                if (e) {
                  if (
                    "Invalid" == e ||
                    ["InProgress", "Returned"].includes(i(s))
                  ) {
                    t = this.pageStatusClass("Invalid");
                    break;
                  }
                  t = this.pageStatusClass(e);
                }
              }
              return t;
            },
            togglePage(e) {
              if (!this.currentPage) return;
              const t = this.getPageGroup(e),
                i = this.getPageGroup(this.currentPage);
              (this.mustToggle || t.id != i.id) &&
                ((this.togglePageHeader[t.id] = !this.togglePageHeader[t.id]),
                t.id != i.id && (this.togglePageHeader[i.id] = !1)),
                (this.mustToggle = !1);
            },
            getPageGroup(e) {
              return this.pageGroups.find((t) => t.pages.some((t) => t == e));
            },
            initPageHeaderToggler() {
              0 == Object.keys(this.togglePageHeader).length &&
                (this.togglePageHeader = this.pageGroups.reduce(
                  (e, t) => (
                    (e[t.id] =
                      !(Object.keys(this.pageGroups).length > 1) ||
                      t.pages.some((e) => e == this.currentPage)),
                    e
                  ),
                  {}
                ));
            },
          },
        },
        wi = (0, ct.Z)(
          Ci,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "form",
              {
                ref: "Form",
                staticClass: "row overlayContainer",
                class: {
                  "condensed-side": e.condensed,
                  "button-condensed": e.buttonCondensed,
                },
                on: {
                  submit: function (t) {
                    return (
                      t.preventDefault(), e.advanceForm.apply(null, arguments)
                    );
                  },
                },
              },
              [
                i("input", {
                  staticClass: "d-none",
                  attrs: { type: "submit", value: "Advance Form" },
                }),
                e._v(" "),
                i("div", { staticClass: "save-all-container" }, [
                  e.hasPendingAdminEdits
                    ? i(
                        "button",
                        {
                          staticClass: "btn btn-secondary save-all-button",
                          attrs: { type: "button" },
                          on: {
                            click: function (t) {
                              return (
                                t.preventDefault(),
                                e.saveAllAdminEdits.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [e._v("Save All Revisions")]
                      )
                    : e._e(),
                ]),
                e._v(" "),
                i("div", { staticClass: "col-12" }, [
                  i("div", [
                    i(
                      "h1",
                      { ref: "FormTitle", staticClass: "df-form-title" },
                      [
                        i("span", { staticClass: "df-segment-title" }, [
                          e._v(e._s(e.segmentTitle)),
                        ]),
                        e._v(" "),
                        e.isWorkflow && e.adminReview
                          ? i("span", { staticClass: "df-workflow-title" }, [
                              e._v(e._s(e.title)),
                            ])
                          : e._e(),
                      ]
                    ),
                    e._v(" "),
                    e.hasMultiplePages && e.currentPage
                      ? i("h2", { staticClass: "df-page-title" }, [
                          e._v(
                            e._s(
                              e.currentPage.definition.settings
                                .effectiveLinkText
                            )
                          ),
                        ])
                      : e._e(),
                    e._v(" "),
                    e.currentPage &&
                    e.currentPage.definition.settings.description
                      ? i("p", { staticClass: "df-page-sub" }, [
                          e._v(
                            e._s(e.currentPage.definition.settings.description)
                          ),
                        ])
                      : e._e(),
                  ]),
                ]),
                e._v(" "),
                e.isPendingAssignment
                  ? i("div", { staticClass: "overlay" }, [
                      i(
                        "div",
                        { staticClass: "overlayCenter" },
                        [i("SegmentSelector")],
                        1
                      ),
                    ])
                  : e._e(),
                e._v(" "),
                e.hasMultiplePages && e.showPageNav && !e.isPendingAssignment
                  ? i(
                      "div",
                      {
                        staticClass: "col-md-4 col-lg-3 df-public-nav",
                        class: e.pageNavCollapsed ? ["df-collapsed"] : [],
                        on: {
                          "!click": function (t) {
                            return e.openNav.apply(null, arguments);
                          },
                        },
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "df-public-nav-pages",
                            attrs: { id: "PageNavigation" },
                          },
                          [
                            i(
                              "div",
                              {
                                staticClass: "list-group",
                                attrs: {
                                  role: "navigation",
                                  "aria-label": "Sections",
                                },
                              },
                              [
                                e._l(e.pageGroups, function (t) {
                                  return [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "list-group-container mb-3",
                                      },
                                      [
                                        Object.keys(e.pageGroups).length > 1 &&
                                        t.pages.length >= 1
                                          ? i(
                                              "button",
                                              {
                                                staticClass:
                                                  "list-group-item page-header-btn",
                                                class: [
                                                  {
                                                    active: t.pages.some(
                                                      function (t) {
                                                        return (
                                                          t == e.currentPage
                                                        );
                                                      }
                                                    ),
                                                  },
                                                  e.pageGroupStatus(t.pages),
                                                ],
                                                attrs: {
                                                  type: "submit",
                                                  "aria-description":
                                                    t.pages
                                                      .map(function (t) {
                                                        return e.pageStatus(
                                                          e.pageStatusFetcher()[
                                                            t.vmId
                                                          ]
                                                        );
                                                      })
                                                      .reduce(function (e, t) {
                                                        return e == t
                                                          ? e
                                                          : null;
                                                      }) || "Page has errors.",
                                                  disabled: t.pages.every(
                                                    function (t) {
                                                      return !(
                                                        e.enabledPages || []
                                                      ).includes(t);
                                                    }
                                                  ),
                                                },
                                                on: {
                                                  click: function (i) {
                                                    return (
                                                      i.preventDefault(),
                                                      e.gotoSubPage(
                                                        t.pages[0],
                                                        !0
                                                      )
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "btn-wrapper d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    i("i", {
                                                      staticClass:
                                                        "page-header-status page-status-icon d-flex",
                                                    }),
                                                    e._v(" "),
                                                    i(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "flex-grow-1",
                                                      },
                                                      [e._v(e._s(t.label))]
                                                    ),
                                                    e._v(" "),
                                                    i("i", {
                                                      staticClass: "icon ml-2",
                                                      class: e.togglePageHeader[
                                                        t.id
                                                      ]
                                                        ? "icon-caret-down"
                                                        : "icon-caret-right",
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : e._e(),
                                        e._v(" "),
                                        (null == e.currentPage ||
                                          t.pages.some(function (t) {
                                            return t == e.currentPage;
                                          }) ||
                                          t.pages.length <= 1) &&
                                        e.togglePageHeader[t.id]
                                          ? [
                                              e._l(t.pages, function (t) {
                                                return [
                                                  i(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "list-group-item",
                                                      class: [
                                                        {
                                                          active:
                                                            e.currentPage == t,
                                                        },
                                                        e.pageStatusClass(
                                                          e.pageStatusFetcher()[
                                                            t.vmId
                                                          ]
                                                        ),
                                                        e.showChanges &&
                                                        null !=
                                                          t.baseChangeRecursive()
                                                          ? t.baseChangeRecursive()
                                                          : {},
                                                      ],
                                                      attrs: {
                                                        name: "editPage",
                                                        type: "submit",
                                                        disabled:
                                                          !e.enabledPages.includes(
                                                            t
                                                          ),
                                                        "aria-description":
                                                          e.pageStatus(
                                                            e.pageStatusFetcher()[
                                                              t.vmId
                                                            ]
                                                          ),
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return (
                                                            i.preventDefault(),
                                                            e.gotoSubPage(t)
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      i(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "btn-wrapper d-flex align-items-center",
                                                        },
                                                        [
                                                          i("i", {
                                                            staticClass:
                                                              "page-status-icon d-flex",
                                                          }),
                                                          e._v(" "),
                                                          i(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "flex-grow-1",
                                                            },
                                                            [
                                                              e._v(
                                                                e._s(
                                                                  t.definition
                                                                    .settings
                                                                    .effectiveLinkText
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ];
                                              }),
                                            ]
                                          : e._e(),
                                      ],
                                      2
                                    ),
                                  ];
                                }),
                              ],
                              2
                            ),
                          ]
                        ),
                        e._v(" "),
                        i("div", { staticClass: "mb-3" }, [
                          e.isCurrentPageViewOnly
                            ? e._e()
                            : i(
                                "div",
                                { staticClass: "d-none d-md-block" },
                                [
                                  e.submitButtons && e.submitButtons.length <= 1
                                    ? e._l(e.submitButtons, function (t) {
                                        return i(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary dfNavButton cancel mb-1",
                                            attrs: {
                                              name: "saveType",
                                              disabled: !e.isSubmittable,
                                              type: "submit",
                                              value: "ConfirmSubmitForm",
                                              title: t.text,
                                            },
                                            on: {
                                              click: function (i) {
                                                return (
                                                  i.preventDefault(),
                                                  e.submit(t.trigger, i)
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                        " +
                                                e._s(t.text) +
                                                "\n                    "
                                            ),
                                          ]
                                        );
                                      })
                                    : e._e(),
                                  e._v(" "),
                                  e.isDeletable
                                    ? i(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-secondary cancel df-delete dfNavButton mb-1",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.deleteDraft(!1, t)
                                              );
                                            },
                                          },
                                        },
                                        [e._v("Delete")]
                                      )
                                    : e._e(),
                                ],
                                2
                              ),
                        ]),
                      ]
                    )
                  : e._e(),
                e._v(" "),
                e.isPendingAssignment
                  ? e._e()
                  : i(
                      "div",
                      {
                        class:
                          e.hasMultiplePages && e.showPageNav
                            ? ["col-md-8", "col-lg-9"]
                            : ["col-md-12"],
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "clearfix",
                            attrs: { id: "jsPageEditor" },
                          },
                          [
                            e.currentPage
                              ? i(
                                  "div",
                                  {
                                    staticClass: "clearfix",
                                    attrs: {
                                      role: "main",
                                      "aria-label": "Current Section",
                                    },
                                  },
                                  [
                                    i("AdminSettingsDifferences", {
                                      attrs: {
                                        data: e.currentPage,
                                        pageMode: !0,
                                      },
                                    }),
                                    e._v(" "),
                                    i(e.currentPage.definition.type, {
                                      tag: "component",
                                      attrs: {
                                        data: e.currentPage,
                                        "view-only":
                                          this.isCurrentPageControlsViewOnly,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : e._e(),
                            e._v(" "),
                            i(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      null != e.currentPage &&
                                      !e.currentPage.hasCustomPageNav(),
                                    expression:
                                      "currentPage != null && !currentPage.hasCustomPageNav()",
                                  },
                                ],
                                staticClass:
                                  "text-center df-navigation-btn-container",
                                staticStyle: { "margin-top": "30px" },
                              },
                              [
                                e.hasMultiplePages
                                  ? i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-secondary dfNavButton cancel df-previous-btn",
                                        attrs: {
                                          name: "editPage",
                                          type: "submit",
                                          value: "1",
                                          disabled: !e.canRetreatForm,
                                          "aria-label": "Previous",
                                        },
                                        on: {
                                          click: function (t) {
                                            return (
                                              t.preventDefault(),
                                              e.retreatForm.apply(
                                                null,
                                                arguments
                                              )
                                            );
                                          },
                                        },
                                      },
                                      [e._v("< Previous")]
                                    )
                                  : e._e(),
                                e._v(" "),
                                e.isViewOnly
                                  ? i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-secondary cancel dfNavButton mx-auto",
                                        attrs: {
                                          type: "button",
                                          disabled: e.adminPreview,
                                        },
                                        on: {
                                          click: function (t) {
                                            return (
                                              t.preventDefault(),
                                              e.gotoIndex.apply(null, arguments)
                                            );
                                          },
                                        },
                                      },
                                      [e._v("Home")]
                                    )
                                  : e._e(),
                                e._v(" "),
                                i(
                                  "a",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isDeletable,
                                        expression: "isDeletable",
                                      },
                                    ],
                                    staticClass:
                                      "btn btn-outline-secondary cancel df-delete dfNavButton",
                                    class: {
                                      "visible-xs-inline-block":
                                        e.hasMultiplePages,
                                    },
                                    attrs: {
                                      href: "#",
                                      disabled: e.adminPreview,
                                    },
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(),
                                          e.deleteDraft(!1, t)
                                        );
                                      },
                                    },
                                  },
                                  [e._v(" Delete ")]
                                ),
                                e._v(" "),
                                e.isViewOnly || e.isCurrentPageViewOnly
                                  ? e._e()
                                  : i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-secondary dfNavButton cancel df-save-and-exit-btn",
                                        attrs: {
                                          name: "saveType",
                                          type: "submit",
                                          value: "SaveAndExit",
                                          disabled: e.adminPreview,
                                        },
                                        on: {
                                          click: function (t) {
                                            return (
                                              t.preventDefault(),
                                              e.saveAndExit.apply(
                                                null,
                                                arguments
                                              )
                                            );
                                          },
                                        },
                                      },
                                      [e._v("Save and Exit")]
                                    ),
                                e._v(" "),
                                !e.isCurrentPageViewOnly &&
                                e.submitablePages.includes(e.currentPage)
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "df-submit-btn-container",
                                      },
                                      [
                                        !e.isCurrentPageViewOnly &&
                                        e.submitablePages.includes(
                                          e.currentPage
                                        )
                                          ? e._l(e.submitButtons, function (t) {
                                              return i(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn dfNavButton cancel df-save-and-continue-btn",
                                                  class: {
                                                    "btn-primary":
                                                      !e.isCurrentPageViewOnly,
                                                    "btn-outline-secondary":
                                                      e.isCurrentPageViewOnly,
                                                  },
                                                  style: {
                                                    float: e.hasMultiplePages
                                                      ? null
                                                      : "none",
                                                  },
                                                  attrs: {
                                                    name: "saveType",
                                                    type: "submit",
                                                    value: "ConfirmSubmitForm",
                                                    disabled: !e.canAdvanceForm,
                                                    title: t.text,
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return (
                                                        i.preventDefault(),
                                                        e.submit(t.trigger, i)
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    "\n                            " +
                                                      e._s(
                                                        e.truncateLongText(
                                                          t.text
                                                        )
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              );
                                            })
                                          : e._e(),
                                      ],
                                      2
                                    )
                                  : e._e(),
                                e._v(" "),
                                (!e.hasMultiplePages &&
                                  e.isCurrentPageViewOnly) ||
                                e.submitablePages.includes(e.currentPage)
                                  ? e._e()
                                  : i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn dfNavButton cancel df-save-and-continue-btn",
                                        class: {
                                          "btn-primary":
                                            !e.isCurrentPageViewOnly,
                                          "btn-outline-secondary":
                                            e.isCurrentPageViewOnly,
                                        },
                                        style: e.hasMultiplePages
                                          ? {}
                                          : { float: "none" },
                                        attrs: {
                                          name: "saveType",
                                          type: "submit",
                                          value: "ConfirmSubmitForm",
                                          disabled: !e.canAdvanceForm,
                                          "aria-label": "Next",
                                        },
                                        on: {
                                          click: function (t) {
                                            return (
                                              t.preventDefault(),
                                              e.advanceForm.apply(
                                                null,
                                                arguments
                                              )
                                            );
                                          },
                                        },
                                      },
                                      [e._v("Next >")]
                                    ),
                              ]
                            ),
                            e._v(" "),
                            i(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      null != e.currentPage &&
                                      e.currentPage.hasCustomPageNav(),
                                    expression:
                                      "currentPage != null && currentPage.hasCustomPageNav()",
                                  },
                                ],
                                staticClass: "text-center",
                                staticStyle: { "margin-top": "30px" },
                              },
                              [
                                i(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-secondary cancel",
                                    attrs: {
                                      type: "button",
                                      disabled: e.adminPreview,
                                    },
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(),
                                          e.gotoIndex.apply(null, arguments)
                                        );
                                      },
                                    },
                                  },
                                  [e._v("Home")]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
              ]
            );
          },
          [],
          !1,
          null,
          "a4379702",
          null
        ).exports,
        _i = {
          data: () => ({ showLoginSlidedown: !1 }),
          created() {
            this.$root.userDataPromise.then((e) => {
              this.showLoginSlidedown =
                !this.$root.isLoggedIn && !this.$root.isUserLoginDisabled;
            });
          },
          computed: { ...(0, a.Se)("page", ["isOffline", "offlineContent"]) },
        },
        xi = (0, ct.Z)(
          _i,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.showLoginSlidedown,
                    expression: "showLoginSlidedown",
                  },
                ],
                staticClass: "notificationBarTop",
                staticStyle: { display: "none" },
                attrs: { "aria-hidden": !e.showLoginSlidedown, role: "alert" },
              },
              [
                i("a", { attrs: { href: e.$root.loginUrl } }, [e._v("Log in")]),
                e._v(" to store your form.\n    "),
                i(
                  "button",
                  {
                    staticClass: "close icon icon-close",
                    attrs: { type: "button" },
                    on: {
                      click: function (t) {
                        t.preventDefault(), (e.showLoginSlidedown = !1);
                      },
                    },
                  },
                  [i("span", { staticClass: "sr-only" }, [e._v("Close")])]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Si = {
          computed: { ...(0, a.Se)("page", ["isOffline", "offlineContent"]) },
        },
        Di = (0, ct.Z)(
          Si,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "container tile" }, [
              e.offlineContent
                ? i("div", { domProps: { innerHTML: e._s(e.offlineContent) } })
                : i(
                    "div",
                    {
                      staticClass:
                        "col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 p-4",
                    },
                    [
                      i(
                        "div",
                        { staticClass: "alert alert-secondary text-center" },
                        [e._v("This page is unavailable at this time.")]
                      ),
                    ]
                  ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Pi = {
          components: { AdminSettingsDifferences: mt.Z },
          props: ["inlineAdminPreview"],
          computed: {
            ...(0, a.rn)("page", {
              formData: (e) => e.formData,
              showAdminDiff: (e) => e.showAdminDiff,
            }),
            ...(0, a.Se)("page", ["adminPreview", "hasChanges"]),
          },
          methods: {
            toggleAdminDiff() {
              this.$store.commit("page/toggleAdminDiff");
            },
            closeWindow() {
              window.close();
            },
          },
        },
        Ii = (0, ct.Z)(
          Pi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return !e.adminPreview || (e.inlineAdminPreview && !e.hasChanges)
              ? e._e()
              : i(
                  "div",
                  { staticClass: "alert alert-dark adminDiffControlContainer" },
                  [
                    e.inlineAdminPreview
                      ? e._e()
                      : [
                          i(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-outline-secondary float-right mt-1",
                              attrs: { type: "button" },
                              on: { click: e.closeWindow },
                            },
                            [e._v("Close Preview")]
                          ),
                          e._v(" "),
                          i(
                            "h1",
                            {
                              staticClass: "mb-2",
                              staticStyle: { "font-size": "20px" },
                            },
                            [e._v("Admin Preview")]
                          ),
                        ],
                    e._v(" "),
                    e.hasChanges
                      ? i("div", { staticClass: "left" }, [
                          i(
                            "div",
                            {
                              staticClass: "form-check form-check-inline mr-2",
                            },
                            [
                              i("input", {
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "ChangesCheckbox",
                                },
                                domProps: { checked: e.showAdminDiff },
                                on: { change: e.toggleAdminDiff },
                              }),
                              e._v(" "),
                              i(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "ChangesCheckbox" },
                                },
                                [e._v("Show changes")]
                              ),
                            ]
                          ),
                          e._v(" "),
                          i(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.showAdminDiff,
                                  expression: "showAdminDiff",
                                },
                              ],
                              staticStyle: { "vertical-align": "top" },
                            },
                            [
                              i("span", { staticClass: "addedKey badge" }, [
                                e._v("Added"),
                              ]),
                              e._v(" "),
                              i("span", { staticClass: "changedKey badge" }, [
                                e._v("Changed"),
                              ]),
                              e._v(" "),
                              i("span", { staticClass: "deletedKey badge" }, [
                                e._v("Deleted"),
                              ]),
                            ]
                          ),
                        ])
                      : e._e(),
                    e._v(" "),
                    i("AdminSettingsDifferences", {
                      attrs: { data: e.formData },
                    }),
                  ],
                  2
                );
          },
          [],
          !1,
          null,
          "2437ade8",
          null
        ).exports;
      var ki = i(57564);
      const $i = {
        components: { Promised: ki.o },
        computed: {
          ...(0, a.Se)("page", ["allElementsWithHistory", "status"]),
        },
        inject: ["resendEmail"],
        methods: {
          mostRecentEvents(e) {
            const t = [];
            return (
              "CompletionEmailerDef" == e.definition.type
                ? t.push(
                    this.orderByDateDesc(e.history)
                      .slice(0, 1)
                      .map((e) => ({
                        date: e.date,
                        commentRequired: !1,
                        eventType: "Notification",
                        type: e.text.toUpperCase().includes("SMS")
                          ? "sms"
                          : "email",
                      }))
                  )
                : "StateFormDef" == e.definition.type &&
                  e.definition.settings.preStatus == this.status &&
                  (t.push(
                    this.orderByDateDesc(
                      e.history.filter((e) =>
                        null != e.historyEmailType
                          ? 2 == e.historyEmailType
                          : e.text.toUpperCase().includes("INVITE")
                      )
                    )
                      .slice(0, 1)
                      .map((e) => ({
                        date: e.date,
                        commentRequired: !1,
                        eventType: "Invite",
                        type: e.text.toUpperCase().includes("SMS")
                          ? "sms"
                          : "email",
                      }))
                  ),
                  t.push(
                    this.orderByDateDesc(
                      e.history.filter((e) =>
                        null != e.historyEmailType
                          ? 1 == e.historyEmailType
                          : e.text.toUpperCase().includes("RETURNED")
                      )
                    )
                      .slice(0, 1)
                      .map((e) => ({
                        date: e.date,
                        commentRequired: !0,
                        eventType: "Return",
                        type: e.text.toUpperCase().includes("SMS")
                          ? "sms"
                          : "email",
                      }))
                  )),
              t.flatMap((e) => e)
            );
          },
          orderByDateDesc: (e) =>
            (function (e, t) {
              return e
                .slice()
                .sort((e, t) =>
                  e.date < t.date ? 1 : e.date > t.date ? -1 : 0
                );
            })(e),
          async getSchemaLabel(e) {
            return (
              (await this.$store.dispatch("page/getSchemaLabelMapping"))[
                e.definition.type
              ] || e.definition.type
            );
          },
        },
      };
      var Vi = (0, ct.Z)(
        $i,
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", [
            i(
              "ul",
              { staticClass: "comment-list" },
              e._l(e.allElementsWithHistory, function (t) {
                return i(
                  "li",
                  { staticClass: "history-group" },
                  [
                    i(
                      "h3",
                      { staticClass: "d-block commentHeader" },
                      [
                        i("div", { staticClass: "fw-600" }, [
                          e._v(e._s(t.getLabel() || "Unlabeled")),
                        ]),
                        e._v(" "),
                        i("Promised", {
                          attrs: { promise: e.getSchemaLabel(t) },
                          scopedSlots: e._u(
                            [
                              {
                                key: "default",
                                fn: function (t) {
                                  return [
                                    i(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: "Page Set" != t,
                                            expression: "data != 'Page Set'",
                                          },
                                        ],
                                        staticClass:
                                          "elementSchemaLabel editor-help-text",
                                      },
                                      [
                                        e._v(
                                          "\n                        " +
                                            e._s(t) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                  ];
                                },
                              },
                            ],
                            null,
                            !0
                          ),
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    e._l([e.mostRecentEvents(t)], function (s) {
                      return i(
                        "ol",
                        {
                          staticClass: "comment-list",
                          attrs: { reversed: "" },
                        },
                        e._l(e.orderByDateDesc(t.history), function (a) {
                          return i(
                            "li",
                            { staticClass: "submissions-comment" },
                            [
                              i("strong", { staticClass: "fw-600" }, [
                                e._v(e._s(a.userName || "Anonymous")),
                              ]),
                              e._v(" "),
                              i("span", { staticClass: "help-block p-0" }, [
                                e._v(e._s(new Date(a.date).toLocaleString())),
                              ]),
                              e._v(" "),
                              i("div", { staticClass: "historyentry-text" }, [
                                e._v(e._s(a.text)),
                              ]),
                              e._v(" "),
                              e._l(
                                s.filter(function (e) {
                                  return e.date == a.date;
                                }),
                                function (s) {
                                  return i("div", [
                                    i(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-secondary cancel dfNavButton mb-1",
                                        attrs: {
                                          type: "button",
                                          value: s.eventType,
                                        },
                                        on: {
                                          click: function (i) {
                                            return (
                                              i.preventDefault(),
                                              e.resendEmail(
                                                t.id,
                                                s.commentRequired,
                                                s.eventType,
                                                s.type
                                              )
                                            );
                                          },
                                        },
                                      },
                                      [e._v("Resend " + e._s(s.eventType))]
                                    ),
                                  ]);
                                }
                              ),
                            ],
                            2
                          );
                        }),
                        0
                      );
                    }),
                  ],
                  2
                );
              }),
              0
            ),
          ]);
        },
        [],
        !1,
        null,
        "d11c0c68",
        null
      );
      const Ei = Vi.exports;
      var Ti = i(73741);
      const Fi = {
          components: { Promised: ki.o, AsyncOperationStatus: Ti.Z },
          data: () => ({ uploadPromise: null, uploadStatus: null }),
          computed: {
            ...(0, a.Se)("page", [
              "allFileElements",
              "allElementsWithFileComments",
              "viewTypes",
              "formId",
              "formTenantCode",
              "adminReview",
            ]),
            elementData() {
              return this.$store.state.page.formData;
            },
          },
          subscriptions() {
            return {
              allFileElementsWithFile: Je(() => this.allFileElements).pipe(
                (0, m.w)((e) =>
                  (0, c.a)(
                    e.map((e) => e.hasValue$().pipe((0, h.U)((t) => [e, t])))
                  )
                ),
                (0, h.U)((e) => e.filter((e) => e[1]).map((e) => e[0]))
              ),
            };
          },
          methods: {
            getViewTypeUrl(e) {
              return this.$root.getUrl(
                this.adminReview
                  ? "adminSearchReviewDocument"
                  : "downloadDocument",
                {
                  tenantCode: this.formTenantCode,
                  areaCode: this.formTenantCode,
                  formId: this.formId,
                  document: e,
                }
              );
            },
            uploadFiles() {
              (this.uploadStatus = "uploading"),
                this.$set(this.elementData, "isThreat", !1),
                (this.uploadPromise = (async () => {
                  const e = this.$store.getters["page/getElementPathString"](
                    this.elementData
                  );
                  try {
                    const t = Array.from(this.$refs.file.files),
                      i = t.map((e) =>
                        this.$store.dispatch("page/uploadExternalFile", {
                          vmId: this.elementData.vmId,
                          newFile: e,
                          isComment: !0,
                        })
                      ),
                      s = await Promise.all(i),
                      a = t.map((e) => e.name),
                      n = t.map((e) => e.type);
                    if (
                      "isThreat" in this.elementData &&
                      this.elementData.isThreat
                    )
                      throw new Error("Potential virus or malware detected.");
                    return (
                      await this.$store.dispatch(
                        "page/addCommentAndChangeStatus",
                        {
                          elementId: e,
                          elementData: this.elementData,
                          fileIds: s,
                          fileNames: a,
                          fileContentTypes: n,
                        }
                      ),
                      (this.$refs.file.value = null),
                      (this.uploadStatus = "ok"),
                      !0
                    );
                  } catch (e) {
                    throw (
                      ((this.uploadStatus = "failed"),
                      alert("Saving comment failed"),
                      e)
                    );
                  }
                })());
            },
          },
        },
        Li = (0, ct.Z)(
          Fi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              [
                e.viewTypes.length > 0
                  ? [
                      i("h3", { staticClass: "file-header" }, [
                        e._v("Generated Files"),
                      ]),
                      e._v(" "),
                      i(
                        "ul",
                        [
                          e._l(e.viewTypes, function (t) {
                            return [
                              i("Promised", {
                                attrs: { promise: e.getViewTypeUrl(t) },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (s) {
                                        return [
                                          i("li", [
                                            i(
                                              "a",
                                              {
                                                staticClass:
                                                  "icon icon-download",
                                                attrs: {
                                                  href: s,
                                                  target: "_blank",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    "Builtin" == t ||
                                                      "Default" == t
                                                      ? "Submission"
                                                      : t
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ];
                                      },
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              }),
                            ];
                          }),
                        ],
                        2
                      ),
                    ]
                  : e._e(),
                e._v(" "),
                null != e.allFileElementsWithFile &&
                e.allFileElementsWithFile.length > 0
                  ? [
                      i("h3", { staticClass: "file-header" }, [
                        e._v("Form Attachments"),
                      ]),
                      e._v(" "),
                      i(
                        "ul",
                        e._l(e.allFileElementsWithFile, function (t) {
                          return i("li", [
                            i(
                              "a",
                              {
                                staticClass: "icon icon-download",
                                attrs: { target: "_blank", href: t.fileUrl },
                              },
                              [e._v(e._s(t.fileName))]
                            ),
                            e._v(" "),
                            i("span", { staticClass: "editor-help-text" }, [
                              e._v(
                                e._s(
                                  t.definition.settings.label ||
                                    t.definition.settings.shortLabel
                                )
                              ),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]
                  : e._e(),
                e._v(" "),
                i("h3", { staticClass: "file-header" }, [
                  e._v("Reviewer Uploads"),
                ]),
                e._v(" "),
                e.allElementsWithFileComments.length > 0
                  ? [
                      i(
                        "ul",
                        [
                          e._l(e.allElementsWithFileComments, function (t) {
                            return [
                              e._l(
                                t.comments.filter(function (e) {
                                  return null != e.files && e.files.length > 0;
                                }),
                                function (s) {
                                  return [
                                    e._l(s.files, function (s) {
                                      return [
                                        i("li", [
                                          i(
                                            "a",
                                            {
                                              staticClass: "icon icon-download",
                                              attrs: {
                                                target: "_blank",
                                                href: s.fileUrl,
                                              },
                                            },
                                            [e._v(e._s(s.filename))]
                                          ),
                                          e._v(" "),
                                          i(
                                            "span",
                                            { staticClass: "editor-help-text" },
                                            [
                                              e._v(
                                                e._s(
                                                  t.definition.settings.label ||
                                                    t.definition.settings
                                                      .shortLabel ||
                                                    "Unnamed Element"
                                                )
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ];
                                    }),
                                  ];
                                }
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                    ]
                  : e._e(),
                e._v(" "),
                i("div", { staticClass: "btn btn-file form-group p-0 m-0" }, [
                  i(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "FilesUpload" } },
                    [e._v("Attach Files")]
                  ),
                  e._v(" "),
                  i("input", {
                    ref: "file",
                    attrs: { type: "file", id: "FilesUpload", multiple: "" },
                    on: { change: e.uploadFiles },
                  }),
                  e._v(" "),
                  i(
                    "div",
                    { staticClass: "status-icon" },
                    [
                      i("AsyncOperationStatus", {
                        attrs: { promise: e.uploadPromise },
                      }),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                e.elementData.isThreat ? i("div", [e._m(0)]) : e._e(),
                e._v(" "),
                i(
                  "div",
                  { staticClass: "sr-only", attrs: { "aria-live": "polite" } },
                  [
                    e.uploadStatus && "uploading" != e.uploadStatus
                      ? [
                          e.elementData.isThreat
                            ? i("span", [
                                e._v(
                                  "Error: Potential virus or malware detected."
                                ),
                              ])
                            : i("span", [e._v("File uploaded successfully")]),
                        ]
                      : e._e(),
                  ],
                  2
                ),
              ],
              2
            );
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("span", { staticClass: "field-validation-error" }, [
                i("i", {
                  staticClass: "icon icon-attention align-middle mr-1",
                  attrs: { title: "Error", role: "img" },
                }),
                e._v("Potential virus or malware detected."),
              ]);
            },
          ],
          !1,
          null,
          "7743ccc2",
          null
        ).exports;
      var Ai = i(7202);
      const Ri = {
          computed: {
            ...(0, a.rn)("page", { formData: (e) => e.formData }),
            ...(0, a.Se)("page", ["adminReview"]),
          },
          components: { Comments: Ai.Z },
        },
        Mi = (0, ct.Z)(
          Ri,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              [
                i("Comments", {
                  attrs: {
                    data: e.formData,
                    showAdminFormLevelControls: e.adminReview,
                    hideHistory: !0,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      var Ni = i(75),
        Oi = i(29187),
        Ui = i(1950);
      const Bi = {
          mixins: [Ui.Z],
          data: () => ({
            returningSegment: null,
            submitting: !1,
            comment: null,
            messages: [],
          }),
          props: ["defaultReturningSegment", "returnFunction", "isWorkflow"],
          created() {
            this.returningSegment = this.defaultReturningSegment;
          },
          computed: { ...(0, a.Se)("page", ["completedSegments"]) },
          components: { LoadingWheel: rt.Z },
          methods: {
            async submit() {
              if (
                !this.isWorkflow &&
                (null == this.comment || 0 == this.comment.trim().length)
              )
                return void (this.messages = ["Comment is required"]);
              this.submitting = !0;
              const e = await this.returnFunction(
                this.returningSegment,
                this.comment
              );
              (this.submitting = !1),
                e.success ? this.$emit("close") : (this.messages = e.messages);
            },
          },
        },
        Hi = (0, ct.Z)(
          Bi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Confirm Return"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    disabled: e.submitting,
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  e.submitting
                    ? i(
                        "div",
                        [i("LoadingWheel", { attrs: { width: 100 } })],
                        1
                      )
                    : [
                        e.messages.length > 0
                          ? i("div", { staticClass: "alert alert-danger" }, [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Validation:"),
                              ]),
                              e._v(" "),
                              i(
                                "ul",
                                e._l(e.messages, function (t) {
                                  return i("li", [e._v(e._s(t))]);
                                }),
                                0
                              ),
                            ])
                          : e._e(),
                        e._v(" "),
                        i("p", { attrs: { "describedby-text": "" } }, [
                          e._v(
                            "Are you sure you want to return this submission?"
                          ),
                        ]),
                        e._v(" "),
                        e.isWorkflow
                          ? i("div", { staticClass: "form-group" }, [
                              i(
                                "label",
                                { attrs: { for: "ReturnConfirmSegment" } },
                                [e._v("Returning to stage:")]
                              ),
                              e._v(" "),
                              i(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.returningSegment,
                                      expression: "returningSegment",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "ReturnConfirmSegment" },
                                  on: {
                                    change: function (t) {
                                      var i = Array.prototype.filter
                                        .call(t.target.options, function (e) {
                                          return e.selected;
                                        })
                                        .map(function (e) {
                                          return "_value" in e
                                            ? e._value
                                            : e.value;
                                        });
                                      e.returningSegment = t.target.multiple
                                        ? i
                                        : i[0];
                                    },
                                  },
                                },
                                e._l(e.completedSegments, function (t) {
                                  return i(
                                    "option",
                                    { domProps: { value: t.id } },
                                    [e._v(e._s(t.getLabel()))]
                                  );
                                }),
                                0
                              ),
                            ])
                          : e._e(),
                        e._v(" "),
                        e.isWorkflow
                          ? e._e()
                          : i("div", { staticClass: "form-group" }, [
                              i("p", { attrs: { "describedby-text": "" } }, [
                                e._v(
                                  "This will prompt the submitter to correct and resubmit this submission."
                                ),
                              ]),
                            ]),
                        e._v(" "),
                        i("div", { staticClass: "form-group" }, [
                          i("label", { attrs: { for: "ReturnComment" } }, [
                            e._v("Returning with comment:"),
                          ]),
                          e._v(" "),
                          i("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.comment,
                                expression: "comment",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              row: "3",
                              id: "ReturnComment",
                              placeholder: "A comment is required",
                            },
                            domProps: { value: e.comment },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.comment = t.target.value);
                              },
                            },
                          }),
                        ]),
                      ],
                ],
                2
              ),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "returnBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.submit();
                      },
                    },
                  },
                  [e._v("Return")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { id: "cancelBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      var Wi = i(39801);
      const Zi = {
          mixins: [Wi.Z],
          data: () => ({
            resendingSegment: null,
            submitting: !1,
            messages: [],
            comment: null,
          }),
          props: [
            "defaultResendingSegment",
            "resendFunction",
            "commentRequired",
            "eventType",
            "type",
          ],
          created() {
            this.resendingSegment = this.defaultResendingSegment;
          },
          computed: { ...(0, a.Se)("page", ["completedSegments"]) },
          components: { LoadingWheel: rt.Z },
          methods: {
            async submit() {
              this.submitting = !0;
              const e = await this.resendFunction(
                this.resendingSegment,
                this.comment,
                this.eventType,
                this.type
              );
              (this.submitting = !1),
                e.success ? this.$emit("close") : (this.messages = e.messages);
            },
          },
        },
        Gi = (0, ct.Z)(
          Zi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Confirm Resend"),
                ]),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "close icon icon-close",
                    attrs: {
                      type: "button",
                      "aria-hidden": "true",
                      autofocus: "",
                      disabled: e.submitting,
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [i("span", { staticClass: "sr-only" }, [e._v("Close")])]
                ),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  e.submitting
                    ? i(
                        "div",
                        [i("LoadingWheel", { attrs: { width: 100 } })],
                        1
                      )
                    : [
                        e.messages.length > 0
                          ? i("div", { staticClass: "alert alert-danger" }, [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Validation:"),
                              ]),
                              e._v(" "),
                              i(
                                "ul",
                                e._l(e.messages, function (t) {
                                  return i("li", [e._v(e._s(t))]);
                                }),
                                0
                              ),
                            ])
                          : e._e(),
                        e._v(" "),
                        "email" == e.type
                          ? i("p", [
                              e._v(
                                "Are you sure you want to resend this email?"
                              ),
                            ])
                          : e._e(),
                        e._v(" "),
                        "sms" == e.type
                          ? i("p", [
                              e._v("Are you sure you want to resend this SMS?"),
                            ])
                          : e._e(),
                        e._v(" "),
                        e.commentRequired
                          ? i("div", { staticClass: "form-group" }, [
                              i("label", { attrs: { for: "ReturnComment" } }, [
                                e._v("Returning with comment:"),
                              ]),
                              e._v(" "),
                              i("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.comment,
                                    expression: "comment",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  row: "3",
                                  id: "returnComment",
                                  placeholder: "A comment is required",
                                },
                                domProps: { value: e.comment },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      (e.comment = t.target.value);
                                  },
                                },
                              }),
                            ])
                          : e._e(),
                      ],
                ],
                2
              ),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "resendBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.submit();
                      },
                    },
                  },
                  [e._v("Resend")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { id: "cancelBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        qi = { mixins: [Wi.Z], data: () => ({}), props: ["type"] },
        ji = (0, ct.Z)(
          qi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Notification sent"),
                ]),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "close icon icon-close",
                    attrs: {
                      type: "button",
                      "aria-hidden": "true",
                      autofocus: "",
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [i("span", { staticClass: "sr-only" }, [e._v("Close")])]
                ),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-body" }, [
                i("span", {
                  staticClass: "action-success-icon icon icon-check",
                }),
                e._v(" "),
                "email" == e.type
                  ? i("p", { staticClass: "action-success-text" }, [
                      e._v("Email sent successfully."),
                    ])
                  : e._e(),
                e._v(" "),
                "sms" == e.type
                  ? i("p", { staticClass: "action-success-text" }, [
                      e._v("SMS sent successfully."),
                    ])
                  : e._e(),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.$emit("close");
                      },
                    },
                  },
                  [e._v("Close")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        Ki = { mixins: [Ui.Z], data: () => ({}) },
        zi = (0, ct.Z)(
          Ki,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [e._v("Returned")]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              e._m(0),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.$emit("close");
                      },
                    },
                  },
                  [e._v("Close")]
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("div", { staticClass: "modal-body" }, [
                i("span", {
                  staticClass: "action-success-icon icon icon-check",
                }),
                e._v(" "),
                i(
                  "p",
                  {
                    staticClass: "action-success-text",
                    attrs: { "describedby-text": "" },
                  },
                  [e._v("Submission returned successfully.")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Ji = {
          mixins: [Ui.Z],
          data: () => ({ submitting: !1 }),
          props: [
            "submitFunction",
            "confirmComponents",
            "submitButtons",
            "blockSubmit$",
          ],
          components: { LoadingWheel: rt.Z },
          subscriptions() {
            return { blockSubmit: this.blockSubmit$ };
          },
          methods: {
            async submit(e) {
              (this.submitting = !0),
                await this.submitFunction(e),
                (this.submitting = !1),
                this.$emit("close");
            },
            truncateLongText: (e) =>
              null == e || e.length <= 40 ? e : e.slice(0, 40) + "...",
          },
        },
        Xi = (0, ct.Z)(
          Ji,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Confirm Submission"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    disabled: e.submitting,
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  e.submitting
                    ? e._e()
                    : [
                        i("p", { attrs: { "describedby-text": "" } }, [
                          e._v("Are you sure you want to submit?"),
                        ]),
                        e._v(" "),
                        e.confirmComponents.length > 0
                          ? [
                              e._l(e.confirmComponents, function (e) {
                                return [
                                  i(e.component, {
                                    tag: "component",
                                    attrs: { data: e.data },
                                  }),
                                ];
                              }),
                            ]
                          : e._e(),
                      ],
                  e._v(" "),
                  e.submitting
                    ? i(
                        "div",
                        [i("LoadingWheel", { attrs: { width: 100 } })],
                        1
                      )
                    : e._e(),
                ],
                2
              ),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-footer" },
                [
                  e._l(e.submitButtons, function (t) {
                    return i(
                      "button",
                      {
                        staticClass: "btn btn-primary my-2",
                        attrs: { disabled: e.submitting || e.blockSubmit },
                        on: {
                          click: function (i) {
                            return e.submit(t.trigger);
                          },
                        },
                      },
                      [e._v(e._s(e.truncateLongText(t.text)))]
                    );
                  }),
                  e._v(" "),
                  i(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary my-2",
                      attrs: { disabled: e.submitting },
                      on: {
                        click: function (t) {
                          return e.$emit("close");
                        },
                      },
                    },
                    [e._v("Cancel")]
                  ),
                ],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          "72ba9224",
          null
        ).exports,
        Yi = {
          mixins: [Ui.Z],
          data: () => ({}),
          props: [
            "adminPreview",
            "redirectUrl",
            "documents",
            "submissionUrl",
            "receiptContents",
          ],
          computed: {
            hasRedirect() {
              return !!this.redirectUrl;
            },
          },
          methods: {
            documentClick(e) {
              this.adminPreview &&
                (alert(
                  "Documents are not generated on preview mode submission"
                ),
                e.preventDefault());
            },
          },
        },
        Qi = (0, ct.Z)(
          Yi,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Form Submitted"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    autofocus: "",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  i("span", {
                    staticClass: "action-success-icon icon icon-check",
                  }),
                  e._v(" "),
                  i(
                    "p",
                    {
                      staticClass: "action-success-text",
                      attrs: { "describedby-text": "" },
                    },
                    [e._v("Form submitted successfully.")]
                  ),
                  e._v(" "),
                  e.receiptContents.length > 0
                    ? [
                        i("br"),
                        e._v(" "),
                        e._l(e.receiptContents, function (t) {
                          return [
                            i("div", { domProps: { innerHTML: e._s(t) } }),
                          ];
                        }),
                      ]
                    : e._e(),
                  e._v(" "),
                  i("hr", { staticClass: "clearfix" }),
                  e._v(" "),
                  e.documents.length > 0
                    ? [
                        i("h4", { staticClass: "h5" }, [
                          e._v(
                            "Produced File" +
                              e._s(1 != e.documents.length ? "s" : "")
                          ),
                        ]),
                        e._v(" "),
                        i(
                          "ul",
                          [
                            e._l(e.documents, function (t) {
                              return [
                                "All Documents" != t.text
                                  ? i("li", { staticClass: "mb-1" }, [
                                      i(
                                        "a",
                                        {
                                          staticClass: "icon icon-download",
                                          attrs: {
                                            href: e.adminPreview ? null : t.url,
                                            target: "_blank",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.documentClick(t);
                                            },
                                          },
                                        },
                                        [e._v(e._s(t.text))]
                                      ),
                                    ])
                                  : i("li", [
                                      i(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-outline-secondary mt-2",
                                          attrs: {
                                            href: e.adminPreview ? null : t.url,
                                            target: "_blank",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.documentClick(t);
                                            },
                                          },
                                        },
                                        [e._v("Download All")]
                                      ),
                                    ]),
                              ];
                            }),
                          ],
                          2
                        ),
                      ]
                    : e._e(),
                  e._v(" "),
                  i("small", [
                    i(
                      "a",
                      {
                        attrs: { href: e.submissionUrl, target: "_blank" },
                        on: {
                          click: function (t) {
                            return e.documentClick(t);
                          },
                        },
                      },
                      [e._v("Download Submission")]
                    ),
                  ]),
                ],
                2
              ),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                e.hasRedirect
                  ? i(
                      "a",
                      {
                        staticClass: "btn btn-outline-secondary",
                        attrs: { href: e.redirectUrl },
                      },
                      [e._v("Continue")]
                    )
                  : i(
                      "a",
                      {
                        staticClass: "btn btn-outline-secondary",
                        attrs: { tabindex: "0" },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.$emit("close");
                          },
                        },
                      },
                      [e._v("Close")]
                    ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "380f113a",
          null
        ).exports,
        es = {
          mixins: [Ui.Z],
          props: ["pageGroups", "goToPageFirstError"],
          computed: {
            invalidPages() {
              return (this.pageGroups[0].pages || []).filter(
                (e) => "Invalid" == e.status
              );
            },
          },
          methods: {
            goToPageFirstErrorFunc(e) {
              this.$emit("close"), this.goToPageFirstError(e);
            },
          },
        },
        ts = (0, ct.Z)(
          es,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Validation Issues"),
                ]),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      autofocus: "",
                      "aria-label": "Close",
                    },
                    on: {
                      click: function (t) {
                        return e.goToPageFirstErrorFunc();
                      },
                    },
                  },
                  [
                    i("span", {
                      staticClass: "icon icon-close",
                      attrs: { "aria-hidden": "true" },
                    }),
                  ]
                ),
              ]),
              e._v(" "),
              i(
                "div",
                {
                  staticClass: "modal-body",
                  attrs: { "describedby-text": "" },
                },
                [
                  i("p", [e._v("Form is not ready to submit.")]),
                  e._v(" "),
                  1 == e.pageGroups[0].pages.length
                    ? i("p", [
                        e._v("Please correct the "),
                        i(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function (t) {
                                return (
                                  t.preventDefault(), e.goToPageFirstErrorFunc()
                                );
                              },
                            },
                          },
                          [e._v("validation issues")]
                        ),
                        e._v(" on the form."),
                      ])
                    : [
                        i("p", [
                          e._v(
                            "Please select a page to navigate to its first invalid field:"
                          ),
                        ]),
                        e._v(" "),
                        e._l(e.invalidPages, function (t) {
                          return [
                            i(
                              "p",
                              {
                                staticClass: "sr-only",
                                attrs: { role: "link" },
                              },
                              [e._v(e._s(t.definition.settings.label) + ".")]
                            ),
                          ];
                        }),
                        e._v(" "),
                        i(
                          "ul",
                          e._l(e.invalidPages, function (t) {
                            return i(
                              "li",
                              { attrs: { "aria-hidden": "true" } },
                              [
                                i(
                                  "a",
                                  {
                                    attrs: {
                                      href: "#",
                                      "aria-label":
                                        t.definition.settings.label + ".",
                                    },
                                    on: {
                                      click: function (i) {
                                        return (
                                          i.preventDefault(),
                                          e.goToPageFirstErrorFunc(t)
                                        );
                                      },
                                    },
                                  },
                                  [e._v(e._s(t.definition.settings.label))]
                                ),
                              ]
                            );
                          }),
                          0
                        ),
                      ],
                ],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          "15fc93d9",
          null
        ).exports;
      var is = i(69887),
        ss = i(33430).Z,
        as = i(47803);
      if (
        "undefined" != typeof window &&
        "Worker" in window &&
        -1 === navigator.appVersion.indexOf("MSIE 10")
      ) {
        var ns = i(18693).Z;
        as.GlobalWorkerOptions.workerPort = new ns();
      }
      const ls = (function (e) {
          var t = e.createLoadingTask,
            i = e.PDFJSWrapper;
          return {
            createLoadingTask: t,
            render: function (e) {
              return e("span", { attrs: { class: "pdfOuterSpan" } }, [
                e("canvas", { attrs: { class: "pdfCanvas" }, ref: "canvas" }),
                e("span", {
                  class: "annotationLayer annotationLayerClass",
                  ref: "annotationLayer",
                }),
                e(is.Z, {
                  props: { initial: !0 },
                  on: { resize: this.resize },
                }),
              ]);
            },
            props: {
              src: { type: [String, Object, Uint8Array], default: "" },
              page: { type: Number, default: 1 },
              rotate: { type: Number },
            },
            watch: {
              src: function () {
                this.pdf.loadDocument(this.src);
              },
              page: function () {
                this.pdf.loadPage(this.page, this.rotate);
              },
              rotate: function () {
                this.pdf.renderPage(this.rotate);
              },
            },
            methods: {
              resize: function (e) {
                if (
                  null !== this.$el.parentNode &&
                  (0 !== e.width || 0 !== e.height)
                ) {
                  this.$refs.canvas.style.height =
                    this.$refs.canvas.offsetWidth *
                      (this.$refs.canvas.height / this.$refs.canvas.width) +
                    "px";
                  var t = this.pdf.getResolutionScale();
                  (t < 0.85 || t > 1.15) && this.pdf.renderPage(this.rotate);
                }
              },
              print: function (e, t) {
                this.pdf.printPage(e, t);
              },
            },
            mounted: function () {
              (this.pdf = new i(
                this.$refs.canvas,
                this.$refs.annotationLayer,
                this.$emit.bind(this)
              )),
                this.$on("loaded", function () {
                  this.pdf.loadPage(this.page, this.rotate);
                }),
                this.$on("page-size", function (e, t) {
                  this.$refs.canvas.style.height =
                    this.$refs.canvas.offsetWidth * (t / e) + "px";
                }),
                this.pdf.loadDocument(this.src);
            },
            destroyed: function () {
              this.pdf.destroy();
            },
          };
        })(ss(as)),
        rs = (0, ct.Z)(ls, void 0, void 0, !1, null, null, null).exports,
        os = {
          mixins: [Wi.Z],
          data: () => ({
            manuallyEnterSignDate: !1,
            submitting: !1,
            signName: null,
            signDate: null,
            verifyEmail: null,
            verifyPhone: null,
            sendVerifyPromiseEmail: null,
            sendVerifyPromisePhone: null,
            verifyCode: null,
            pdfDataTask: null,
            numPages: null,
            messages: [],
          }),
          props: [
            "requireUserVerification",
            "pdfData",
            "sendVerifyFunction",
            "signAndSubmitFunction",
          ],
          mounted() {
            if (
              (this.manuallyEnterSignDate ||
                (this.signDate = this.signDatePlaceholder),
              setTimeout(() => {
                (this.pdfDataTask = rs.createLoadingTask(this.pdfData)),
                  this.pdfDataTask.promise.then((e) => {
                    this.numPages = e.numPages;
                  });
              }, 0),
              this.requireUserVerification)
            ) {
              const e = {
                inputElement: this.$refs.verifyPhoneNumber,
                mask: [
                  "(",
                  /\d/,
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ],
                guide: !1,
                placeholderChar: " ",
              };
              this.phoneMask = (0, pt.createTextMaskInputElement)(e);
            }
          },
          components: {
            LoadingWheel: rt.Z,
            AsyncOperationStatus: Ti.Z,
            pdf: rs,
          },
          computed: {
            enableSmsMessages() {
              return this.$root.enableSmsMessages;
            },
            signDatePlaceholder() {
              const e = new Date();
              return `${(e.getMonth() + 1).toString().padStart(2, "0")}-${e
                .getDate()
                .toString()
                .padStart(2, "0")}-${e.getFullYear()}`;
            },
          },
          methods: {
            handlePhoneInput(e) {
              this.phoneMask && this.phoneMask.update(e.target.value),
                (this.verifyPhone = e.target.value);
            },
            sendVerify(e) {
              const t = "Email" == e,
                i = (async () => {
                  const e = await (t
                    ? this.sendVerifyFunction(this.verifyEmail, null)
                    : this.sendVerifyFunction(null, this.verifyPhone));
                  if (!e.success)
                    throw ((this.messages = e.messages), new Error("Failed"));
                  this.messages = [];
                })();
              t
                ? (this.sendVerifyPromiseEmail = i)
                : (this.sendVerifyPromisePhone = i);
            },
            async signAndSubmit() {
              this.submitting = !0;
              const e = await this.signAndSubmitFunction(
                this.signName,
                this.signDate,
                this.verifyCode
              );
              (this.submitting = !1),
                e.success ? this.$emit("close") : (this.messages = e.messages);
            },
          },
        },
        us = (0, ct.Z)(
          os,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Confirm Submission"),
                ]),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "close icon icon-close",
                    attrs: {
                      type: "button",
                      "aria-hidden": "true",
                      autofocus: "",
                      disabled: e.submitting,
                    },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [i("span", { staticClass: "sr-only" }, [e._v("Close")])]
                ),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-body" }, [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.submitting,
                        expression: "!submitting",
                      },
                    ],
                  },
                  [
                    i("p", [e._v("To finish this submission, you must sign.")]),
                    e._v(" "),
                    i(
                      "div",
                      { staticClass: "pdfPage" },
                      e._l(e.numPages, function (t) {
                        return i("pdf", {
                          key: t,
                          attrs: { src: e.pdfDataTask, page: t },
                        });
                      }),
                      1
                    ),
                    e._v(" "),
                    i("p", [
                      e._v("By submitting this signature, you agree that:"),
                    ]),
                    e._v(" "),
                    e._m(0),
                    e._v(" "),
                    i("div", { staticClass: "alert alert-dark" }, [
                      e._v(
                        "To receive a non-electronic version of this document, please contact us."
                      ),
                    ]),
                    e._v(" "),
                    e.messages.length > 0
                      ? i("div", { staticClass: "alert alert-danger" }, [
                          i("span", [e._v("Issues:")]),
                          e._v(" "),
                          i(
                            "ul",
                            e._l(e.messages, function (t) {
                              return i("li", [e._v(e._s(t))]);
                            }),
                            0
                          ),
                        ])
                      : e._e(),
                    e._v(" "),
                    e.requireUserVerification
                      ? i(
                          "div",
                          { staticClass: "row" },
                          [
                            e._m(1),
                            e._v(" "),
                            i("div", { staticClass: "form-group col-md-8" }, [
                              i("label", { staticClass: "control-label" }, [
                                e._v("Verify Email"),
                              ]),
                              e._v(" "),
                              i("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.verifyEmail,
                                    expression: "verifyEmail",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "example@example.com",
                                  id: "sendVerifyEmailControl",
                                },
                                domProps: { value: e.verifyEmail },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      (e.verifyEmail = t.target.value);
                                  },
                                },
                              }),
                            ]),
                            e._v(" "),
                            i(
                              "div",
                              { staticClass: "form-group col-md-4" },
                              [
                                i("br"),
                                e._v(" "),
                                i(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      id: "sendVerifyEmailBtn",
                                      disabled: e.submitting,
                                    },
                                    on: {
                                      click: function (t) {
                                        return e.sendVerify("Email");
                                      },
                                    },
                                  },
                                  [e._v("Send Verify Code by Email")]
                                ),
                                e._v(" "),
                                i("AsyncOperationStatus", {
                                  attrs: { promise: e.sendVerifyPromiseEmail },
                                }),
                              ],
                              1
                            ),
                            e._v(" "),
                            e.enableSmsMessages
                              ? [
                                  e._m(2),
                                  e._v(" "),
                                  i(
                                    "div",
                                    { staticClass: "form-group col-md-8" },
                                    [
                                      i(
                                        "label",
                                        { staticClass: "control-label" },
                                        [e._v("Verify Phone Number")]
                                      ),
                                      e._v(" "),
                                      i("input", {
                                        ref: "verifyPhoneNumber",
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "phone",
                                          placeholder: "(999) 999-9999",
                                          id: "sendVerifyPhoneControl",
                                        },
                                        domProps: { value: e.verifyPhone },
                                        on: { input: e.handlePhoneInput },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  i(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      i("br"),
                                      e._v(" "),
                                      i(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            id: "sendVerifyPhoneBtn",
                                            disabled: e.submitting,
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.sendVerify("Phone");
                                            },
                                          },
                                        },
                                        [e._v("Send Verify Code by SMS")]
                                      ),
                                      e._v(" "),
                                      i("AsyncOperationStatus", {
                                        attrs: {
                                          promise: e.sendVerifyPromisePhone,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              : e._e(),
                          ],
                          2
                        )
                      : e._e(),
                    e._v(" "),
                    i("div", { staticClass: "row" }, [
                      e.requireUserVerification
                        ? i(
                            "div",
                            {
                              staticClass:
                                "col-12 text-center mb-2 secondVerificationSection",
                            },
                            [i("strong", [e._v("Second")])]
                          )
                        : e._e(),
                      e._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "form-group",
                          class: [
                            e.requireUserVerification ? "col-md-4" : "col-md-6",
                          ],
                        },
                        [
                          i("label", { staticClass: "control-label" }, [
                            e._v("Sign Name"),
                          ]),
                          e._v(" "),
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.signName,
                                expression: "signName",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Signer's Full Name",
                              id: "signNameControl",
                            },
                            domProps: { value: e.signName },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.signName = t.target.value);
                              },
                            },
                          }),
                        ]
                      ),
                      e._v(" "),
                      i(
                        "div",
                        {
                          staticClass: "form-group",
                          class: [
                            e.requireUserVerification ? "col-md-4" : "col-md-6",
                          ],
                        },
                        [
                          i("label", { staticClass: "control-label" }, [
                            e._v("Sign Date"),
                          ]),
                          e._v(" "),
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.signDate,
                                expression: "signDate",
                              },
                            ],
                            class: e.manuallyEnterSignDate
                              ? ["form-control"]
                              : ["form-control-plaintext"],
                            attrs: {
                              type: "text",
                              readonly: !e.manuallyEnterSignDate,
                              placeholder: e.signDatePlaceholder,
                              id: "signDateControl",
                            },
                            domProps: { value: e.signDate },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.signDate = t.target.value);
                              },
                            },
                          }),
                        ]
                      ),
                      e._v(" "),
                      e.requireUserVerification
                        ? i("div", { staticClass: "form-group col-md-4" }, [
                            i("label", { staticClass: "control-label" }, [
                              e._v("Verify Code"),
                            ]),
                            e._v(" "),
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.verifyCode,
                                  expression: "verifyCode",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                inputmode: "numeric",
                                placeholder: "999999",
                                id: "verifyCodeControl",
                              },
                              domProps: { value: e.verifyCode },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.verifyCode = t.target.value);
                                },
                              },
                            }),
                          ])
                        : e._e(),
                    ]),
                  ]
                ),
                e._v(" "),
                e.submitting
                  ? i("div", [i("LoadingWheel", { attrs: { width: 100 } })], 1)
                  : e._e(),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "signSubmitBtn", disabled: e.submitting },
                    on: { click: e.signAndSubmit },
                  },
                  [e._v("Sign and Submit")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("ol", [
                i("li", [e._v("you accept doing business electronically")]),
                e._v(" "),
                i("li", [e._v("you intend to sign")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i(
                "div",
                {
                  staticClass:
                    "col-12 text-center mb-2 firstVerificationSection",
                },
                [i("strong", [e._v("First")])]
              );
            },
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i(
                "div",
                { staticClass: "col-12 text-center mb-2 verificationOr" },
                [i("strong", [e._v("OR")])]
              );
            },
          ],
          !1,
          null,
          "7712d43c",
          null
        ).exports;
      var cs = i(26695);
      const ds = {
          mixins: [Ui.Z],
          data: () => ({ strictConfirm: !1, confirmValue: null }),
          async created() {
            this.strictConfirm =
              await this.$store.getters.isFeatureFlagActiveAsync(
                "StrictWorkflowManualOverrideConfirm"
              );
          },
          computed: {
            executable() {
              return !this.strictConfirm || "unsafe" == this.confirmValue;
            },
          },
          props: ["returnFunction"],
          methods: {
            async confirmFunc() {
              this.strictConfirm && "unsafe" != this.confirmValue
                ? alert("Invalid confirm value")
                : (this.returnFunction(), this.$emit("close"));
            },
          },
        },
        ms = (0, ct.Z)(
          ds,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Workflow Manual Override Confirm"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-body" }, [
                i(
                  "div",
                  {
                    staticClass: "alert alert-danger",
                    attrs: { "describedby-text": "" },
                  },
                  [
                    e._v(
                      "This action allows you to bypass safety controls. This is inherently unsafe, and may cause unexpected issues."
                    ),
                  ]
                ),
                e._v(" "),
                e.strictConfirm
                  ? i("div", { staticClass: "form-group" }, [
                      i("label", { attrs: { for: "confirmInput" } }, [
                        e._v(
                          'To confirm, type "unsafe" in this box, and click Execute.'
                        ),
                      ]),
                      e._v(" "),
                      i("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.confirmValue,
                            expression: "confirmValue",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "confirmInput" },
                        domProps: { value: e.confirmValue },
                        on: {
                          input: function (t) {
                            t.target.composing ||
                              (e.confirmValue = t.target.value);
                          },
                        },
                      }),
                    ])
                  : e._e(),
              ]),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "returnBtn", disabled: !e.executable },
                    on: {
                      click: function (t) {
                        return e.confirmFunc();
                      },
                    },
                  },
                  [e._v("Execute")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { id: "cancelBtn" },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "92674e4a",
          null
        ).exports,
        hs = {
          mixins: [Wi.Z, cs.Z, Ui.Z],
          data: () => ({
            type: null,
            forceStatus: null,
            submitting: !1,
            messages: [],
            possibleUpgradeRevisions: null,
            manualOverrideRevision: null,
          }),
          props: ["returnFunction"],
          computed: {
            ...(0, a.Se)("page", [
              "possibleStatuses",
              "status",
              "canUpgradeDefinition",
            ]),
            possibleStatusesExcludingCurrent() {
              return this.possibleStatuses.filter(
                (e) => e.value != this.status
              );
            },
          },
          components: { LoadingWheel: rt.Z },
          watch: {
            type(e, t) {
              "ForceDefinitionUpdate" == e &&
                null == this.possibleUpgradeRevisions &&
                (async () => {
                  var t = await this.$store.dispatch(
                    "page/workflowManualOverrideGetPossibleUpgradeRevisions"
                  );
                  if (!t.success) throw new Error(e + "\n" + JSON.stringify(t));
                  this.possibleUpgradeRevisions = t.revisions;
                })();
            },
          },
          methods: {
            async submit() {
              null != this.type
                ? (this.focusTrapSetEnabled(!1),
                  this.$modal.show(
                    ms,
                    {
                      returnFunction: async () => {
                        this.submitting = !0;
                        const e =
                            "ForceWorkflowStatus" == this.type
                              ? this.forceStatus
                              : "ForceDefinitionUpdate" == this.type
                              ? this.manualOverrideRevision ||
                                (1 == this.possibleUpgradeRevisions.length
                                  ? this.possibleUpgradeRevisions[0].FormHash
                                  : null)
                              : null,
                          t = await this.returnFunction(this.type, e);
                        (this.submitting = !1),
                          t.success
                            ? this.$emit("close")
                            : (this.messages = t.messages);
                      },
                    },
                    {
                      height: "auto",
                      width: Math.min(0.9 * window.innerWidth, 600),
                      clickToClose: !1,
                    },
                    {
                      "before-closed": (e) => {
                        this.focusTrapSetEnabled(!0);
                      },
                    }
                  ))
                : (this.messages = ["Type is required"]);
            },
          },
        },
        fs = hs,
        ps = (0, ct.Z)(
          fs,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Workflow Manual Override"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    disabled: e.submitting,
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  e.submitting
                    ? i(
                        "div",
                        [i("LoadingWheel", { attrs: { width: 100 } })],
                        1
                      )
                    : [
                        e.messages.length > 0
                          ? i(
                              "div",
                              { staticClass: "invalid-feedback d-block" },
                              [
                                i("span", [e._v("Validation:")]),
                                e._v(" "),
                                i(
                                  "ul",
                                  e._l(e.messages, function (t) {
                                    return i("li", [e._v(e._s(t))]);
                                  }),
                                  0
                                ),
                              ]
                            )
                          : e._e(),
                        e._v(" "),
                        i(
                          "div",
                          {
                            staticClass: "alert alert-danger",
                            attrs: { "describedby-text": "" },
                          },
                          [
                            e._v(
                              "These actions allow you to bypass safety controls. This is inherently unsafe, and may cause unexpected issues."
                            ),
                          ]
                        ),
                        e._v(" "),
                        i("div", { staticClass: "form-group" }, [
                          i("label", { attrs: { for: "ManualOverrideType" } }, [
                            e._v("Action To Take:"),
                          ]),
                          e._v(" "),
                          i(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.type,
                                  expression: "type",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { id: "ManualOverrideType" },
                              on: {
                                change: function (t) {
                                  var i = Array.prototype.filter
                                    .call(t.target.options, function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      return "_value" in e ? e._value : e.value;
                                    });
                                  e.type = t.target.multiple ? i : i[0];
                                },
                              },
                            },
                            [
                              i(
                                "option",
                                {
                                  attrs: { selected: "" },
                                  domProps: { value: null },
                                },
                                [e._v("-- Select an action --")]
                              ),
                              e._v(" "),
                              i(
                                "option",
                                { attrs: { value: "ForceWorkflowStatus" } },
                                [e._v("Move To Step")]
                              ),
                              e._v(" "),
                              e.canUpgradeDefinition
                                ? i(
                                    "option",
                                    {
                                      attrs: { value: "ForceDefinitionUpdate" },
                                    },
                                    [e._v("Update To Definition")]
                                  )
                                : e._e(),
                              e._v(" "),
                              i("option", { attrs: { value: "EndWorkflow" } }, [
                                e._v("End Workflow"),
                              ]),
                              e._v(" "),
                              i(
                                "option",
                                { attrs: { value: "DeleteWorkflow" } },
                                [e._v("Delete Submission")]
                              ),
                            ]
                          ),
                        ]),
                        e._v(" "),
                        i(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "ForceDefinitionUpdate" == e.type,
                                expression: "type == 'ForceDefinitionUpdate'",
                              },
                            ],
                            staticClass: "form-group",
                          },
                          [
                            i(
                              "label",
                              { attrs: { for: "ManualOverrideRevision" } },
                              [e._v("Target Revision:")]
                            ),
                            e._v(" "),
                            null == e.possibleUpgradeRevisions
                              ? i("span", [e._v(" Loading... ")])
                              : 0 == e.possibleUpgradeRevisions.length
                              ? i("span", [e._v(" No possible upgrades ")])
                              : 1 == e.possibleUpgradeRevisions.length
                              ? i("span", [
                                  e._v(
                                    " " +
                                      e._s(
                                        e._f("localeDateTime")(
                                          e.possibleUpgradeRevisions[0].Updated
                                        )
                                      ) +
                                      " " +
                                      e._s(
                                        null !=
                                          e.possibleUpgradeRevisions[0]
                                            .UpdateMessage &&
                                          "" !=
                                            e.possibleUpgradeRevisions[0]
                                              .UpdateMessage
                                          ? " with comment: "
                                          : ""
                                      ) +
                                      " " +
                                      e._s(
                                        e.possibleUpgradeRevisions[0]
                                          .UpdateMessage
                                      ) +
                                      " "
                                  ),
                                ])
                              : i(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: e.manualOverrideRevision,
                                        expression: "manualOverrideRevision",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: { id: "ManualOverrideRevision" },
                                    on: {
                                      change: function (t) {
                                        var i = Array.prototype.filter
                                          .call(t.target.options, function (e) {
                                            return e.selected;
                                          })
                                          .map(function (e) {
                                            return "_value" in e
                                              ? e._value
                                              : e.value;
                                          });
                                        e.manualOverrideRevision = t.target
                                          .multiple
                                          ? i
                                          : i[0];
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "option",
                                      {
                                        attrs: { selected: "" },
                                        domProps: { value: null },
                                      },
                                      [e._v("-- Select an revision --")]
                                    ),
                                    e._v(" "),
                                    e._l(
                                      e.possibleUpgradeRevisions,
                                      function (t) {
                                        return i(
                                          "option",
                                          { domProps: { value: t.FormHash } },
                                          [
                                            e._v(
                                              e._s(
                                                e._f("localeDateTime")(
                                                  t.Updated
                                                )
                                              ) +
                                                " " +
                                                e._s(
                                                  null != t.UpdateMessage &&
                                                    "" != t.UpdateMessage
                                                    ? " with comment: "
                                                    : ""
                                                ) +
                                                " " +
                                                e._s(t.UpdateMessage)
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                  ],
                                  2
                                ),
                          ]
                        ),
                        e._v(" "),
                        i(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "ForceWorkflowStatus" == e.type,
                                expression: "type == 'ForceWorkflowStatus'",
                              },
                            ],
                            staticClass: "form-group",
                          },
                          [
                            i(
                              "label",
                              { attrs: { for: "ManualOverrideStep" } },
                              [e._v("Step:")]
                            ),
                            e._v(" "),
                            i(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.forceStatus,
                                    expression: "forceStatus",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { id: "ManualOverrideStep" },
                                on: {
                                  change: function (t) {
                                    var i = Array.prototype.filter
                                      .call(t.target.options, function (e) {
                                        return e.selected;
                                      })
                                      .map(function (e) {
                                        return "_value" in e
                                          ? e._value
                                          : e.value;
                                      });
                                    e.forceStatus = t.target.multiple
                                      ? i
                                      : i[0];
                                  },
                                },
                              },
                              [
                                i(
                                  "option",
                                  {
                                    attrs: { selected: "" },
                                    domProps: { value: null },
                                  },
                                  [e._v("-- Select an step --")]
                                ),
                                e._v(" "),
                                e._l(
                                  e.possibleStatusesExcludingCurrent,
                                  function (t) {
                                    return i(
                                      "option",
                                      { domProps: { value: t.value } },
                                      [
                                        e._v(
                                          e._s(t.text || t.adminText || t.value)
                                        ),
                                      ]
                                    );
                                  }
                                ),
                              ],
                              2
                            ),
                          ]
                        ),
                      ],
                ],
                2
              ),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "returnBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.submit();
                      },
                    },
                  },
                  [e._v("Execute")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { id: "cancelBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "3922a6f4",
          null
        ).exports,
        gs = {
          mixins: [Ui.Z],
          data: () => ({
            returningSegment: null,
            submitting: !1,
            newStatus: null,
            comment: null,
            messages: [],
          }),
          props: ["defaultReturningSegment", "returnFunction"],
          created() {
            this.returningSegment = this.defaultReturningSegment;
          },
          computed: {
            ...(0, a.Se)("page", [
              "possibleStatuses",
              "currentStatusLabel",
              "anonymousUser",
            ]),
            possibleStatusesExcludingIgnored() {
              return this.possibleStatuses.filter(
                (e) => !Ke.qv.some((t) => t == e.value) && e.value != Ke.O7
              );
            },
          },
          components: { LoadingWheel: rt.Z },
          methods: {
            async submit() {
              if (
                null == this.newStatus ||
                null == this.comment ||
                0 == this.comment.trim().length
              )
                return void (this.messages = [
                  "Status and Comment are required",
                ]);
              this.submitting = !0;
              const e = await this.returnFunction(this.newStatus, this.comment);
              (this.submitting = !1),
                e.success ? this.$emit("close") : (this.messages = e.messages);
            },
            isStatusDisabled(e) {
              return !(e.value != Ke.O7 || !this.anonymousUser);
            },
          },
        },
        vs = (0, ct.Z)(
          gs,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Confirm Status Change"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    disabled: e.submitting,
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "modal-body" },
                [
                  e.submitting
                    ? i(
                        "div",
                        [i("LoadingWheel", { attrs: { width: 100 } })],
                        1
                      )
                    : [
                        e.messages.length > 0
                          ? i("div", { staticClass: "alert alert-danger" }, [
                              i("span", { staticClass: "sr-only" }, [
                                e._v("Validation:"),
                              ]),
                              e._v(" "),
                              i(
                                "ul",
                                e._l(e.messages, function (t) {
                                  return i("li", [e._v(e._s(t))]);
                                }),
                                0
                              ),
                            ])
                          : e._e(),
                        e._v(" "),
                        i("div", { staticClass: "form-group" }, [
                          i(
                            "label",
                            {
                              attrs: {
                                for: "currentStatusLabel",
                                "describedby-text": "",
                              },
                            },
                            [
                              e._v("Current Status: "),
                              i("span", { staticClass: "p-1" }, [
                                e._v(e._s(e.currentStatusLabel)),
                              ]),
                            ]
                          ),
                          e._v(" "),
                          i("br"),
                          e._v(" "),
                          i("label", { attrs: { for: e.id + "_Status" } }, [
                            e._v("Change status to"),
                          ]),
                          e._v(" "),
                          i(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.newStatus,
                                  expression: "newStatus",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { name: "status", id: e.id + "_Status" },
                              on: {
                                change: function (t) {
                                  var i = Array.prototype.filter
                                    .call(t.target.options, function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      return "_value" in e ? e._value : e.value;
                                    });
                                  e.newStatus = t.target.multiple ? i : i[0];
                                },
                              },
                            },
                            e._l(
                              e.possibleStatusesExcludingIgnored,
                              function (t) {
                                return i(
                                  "option",
                                  { domProps: { value: t.value } },
                                  [
                                    e._v(
                                      e._s(t.text || t.value) +
                                        e._s(
                                          e.isStatusDisabled(t)
                                            ? " (Unavailable)"
                                            : ""
                                        )
                                    ),
                                  ]
                                );
                              }
                            ),
                            0
                          ),
                        ]),
                        e._v(" "),
                        i("div", { staticClass: "form-group" }, [
                          i("label", { attrs: { for: "ReturnComment" } }, [
                            e._v("Comment:"),
                          ]),
                          e._v(" "),
                          i("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.comment,
                                expression: "comment",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              row: "3",
                              id: "StatusChangeComment",
                              placeholder: "A comment is required",
                            },
                            domProps: { value: e.comment },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.comment = t.target.value);
                              },
                            },
                          }),
                        ]),
                      ],
                ],
                2
              ),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "statusChangeBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.submit();
                      },
                    },
                  },
                  [e._v("Change Status")]
                ),
                e._v(" "),
                i(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { id: "cancelBtn", disabled: e.submitting },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      },
                    },
                  },
                  [e._v("Cancel")]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        bs = { mixins: [Ui.Z], data: () => ({}) },
        ys = (0, ct.Z)(
          bs,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Status Updated"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              e._m(0),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.$emit("close");
                      },
                    },
                  },
                  [e._v("Close")]
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("div", { staticClass: "modal-body" }, [
                i("span", {
                  staticClass: "action-success-icon icon icon-check",
                }),
                e._v(" "),
                i(
                  "p",
                  {
                    staticClass: "action-success-text",
                    attrs: { "describedby-text": "" },
                  },
                  [e._v("Status updated successfully.")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Cs = { mixins: [Ui.Z], data: () => ({}) },
        ws = (0, ct.Z)(
          Cs,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "modal-content" }, [
              i("div", { staticClass: "modal-header" }, [
                i("h3", { staticClass: "modal-title" }, [
                  e._v("Submission Adjusted"),
                ]),
                e._v(" "),
                i("button", {
                  staticClass: "close icon icon-close",
                  attrs: {
                    type: "button",
                    "aria-hidden": "true",
                    autofocus: "",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function (t) {
                      return e.$emit("close");
                    },
                  },
                }),
              ]),
              e._v(" "),
              e._m(0),
              e._v(" "),
              i("div", { staticClass: "modal-footer" }, [
                i(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: {
                      click: function (t) {
                        return t.preventDefault(), e.$emit("close");
                      },
                    },
                  },
                  [e._v("Close")]
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("div", { staticClass: "modal-body" }, [
                i("span", {
                  staticClass: "action-success-icon icon icon-check",
                }),
                e._v(" "),
                i(
                  "p",
                  {
                    staticClass: "action-success-text",
                    attrs: { "describedby-text": "" },
                  },
                  [e._v("Submission adjusted successfully.")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports;
      var _s = i(57524),
        xs = i(23934);
      const Ss = "Submit";
      let Ds = !1,
        Ps = null;
      const Is = {
          setModuleRegister() {
            Ds = !0;
          },
          setTestPageGroups(e) {
            Ps = e;
          },
          data: () => ({
            leftPage: null,
            rightPage: null,
            verifyData: {},
            verifyFailureMessages: [],
            formData$: new o.X(),
            isInitialCreate: !0,
            forcingRedirect: !1,
            initialLoadFinished: !1,
            showLoginSlidedown: !1,
            isSubmitting: !1,
            pageStatus: {},
            pageStatusSubscriptions: [],
            reviewTab: "task",
            leftWidth: 50,
            tempLeftWidth: null,
            eventBus: (0, xs.Z)(),
          }),
          props: ["settings"],
          beforeCreate() {
            Ds || (this.$store.registerModule("page", lt), (Ds = !0));
          },
          provide() {
            return {
              submit: (e, t) => this.submit(e, t),
              deleteDraft: (e, t) => this.deleteDraft(e, t),
              returnSubmission: (e, t, i) => this.returnSubmission(e, t, i),
              resendEmail: (e, t, i, s) => this.resendEmail(e, t, i, s),
              startWorkflowManualOverride: (e) =>
                this.startWorkflowManualOverride(e),
              startSubmittableStatusChange: (e) =>
                this.startSubmittableStatusChange(e),
              pageStatusFetcher: () => this.pageStatus,
              gotoIndex: () => this.gotoIndex(),
              forceLogin: () => this.forceLogin(),
            };
          },
          async created() {
            this.$watch("enabledPages", () => {
              const e = {};
              Object.values(this.pageStatusSubscriptions).forEach((e) => {
                e.unsubscribe();
              }),
                (this.pageStatusSubscriptions = []),
                this.enabledPages.forEach((t) => {
                  this.pageStatusSubscriptions.push(
                    t.clientStatus$().subscribe((i) => {
                      s.ZP.set(e, t.vmId, i);
                    })
                  );
                }),
                (this.pageStatus = e);
            }),
              await this.init();
          },
          async activated() {
            this.isInitialCreate ? (this.isInitialCreate = !1) : this.init();
          },
          watch: {
            formData() {
              this.formData$.next(this.formData);
            },
            formTenantCode() {
              this.updateHistory();
            },
            formId() {
              this.updateHistory();
            },
            page() {
              this.updateHistory();
            },
          },
          subscriptions() {
            return {
              submitButtons: this.submitButtons$,
              segment: this.segment$,
              visiblePages: this.visiblePages$,
              enabledPages: this.enabledPages$,
              isSubmittable: this.isSubmittable$,
              currentSegment: this.currentSegment$,
              currentRightPage: this.currentRightPage$,
              currentLeftPage: this.currentLeftPage$,
            };
          },
          mounted() {
            document.addEventListener(
              "click",
              (e) => {
                const t = document.getElementById("dropdownBtn"),
                  i = document.getElementById("dropdownMenu");
                i &&
                  !i.contains(e.target) &&
                  t &&
                  !t.contains(e.target) &&
                  i.classList.remove("show");
              },
              { passive: !0 }
            );
          },
          computed: {
            ...(0, a.rn)("page", {
              formData: (e) => e.formData,
              formDataLoading: (e) => e.formDataLoading,
              showAdminDiff: (e) => e.showAdminDiff,
            }),
            ...(0, a.Se)("page", [
              "segments",
              "availableSegments",
              "activeSegments",
              "comments",
              "formId",
              "formTenantCode",
              "status",
              "title",
              "formSettings",
              "isViewOnly",
              "isPageObjViewOnly",
              "isPageObjViewOnly$",
              "directLinkTemplates",
              "adminPreview",
              "adminReview",
              "testMode",
              "hasChanges",
              "formChanges",
              "mustLogin",
              "pages",
              "visiblePages$",
              "pendingActionPromise",
              "endUserStatuses",
              "status$",
              "segment$",
              "isSubmittable$",
              "isOffline",
              "offlineContent",
              "isWorkflow",
              "canChangeStatus",
              "canDeleteSubmissions",
              "anonymousUser",
            ]),
            submitButtons$() {
              return (0, c.a)([this.formData$, this.segment$]).pipe(
                (0, m.w)((e) => {
                  let [t, i] = e;
                  if (null == t) return (0, u.D)([]);
                  const s = t.getSegmentView(i),
                    a = this.formSettings.submitButtonTextCalculationId,
                    n = (
                      null == a ? (0, u.D)([null]) : s.resolveCalculation(a)
                    ).pipe(
                      (0, h.U)((e) =>
                        e
                          ? e.join("")
                          : this.formSettings.effectiveSubmitButtonText
                      )
                    ),
                    l = s.getElementsByFilter(
                      (e) => e.submitButtons || e.submitButtons$
                    );
                  let r, o;
                  r =
                    l.length > 0
                      ? (0, c.a)(
                          l.map((e) =>
                            e.submitButtons$
                              ? e.submitButtons$()
                              : (0, u.D)([e.submitButtons()])
                          )
                        ).pipe((0, h.U)((e) => e.flat()))
                      : (0, u.D)([[]]);
                  const d = s.getElementsByFilter(
                    (e) => e.submitText || e.submitText$
                  );
                  return (
                    (o =
                      d.length > 0
                        ? (0, c.a)([
                            n,
                            (0, c.a)(
                              d.map((e) =>
                                (0, c.a)([
                                  e.hasCustomSubmitText$
                                    ? e.hasCustomSubmitText$()
                                    : e.hasCustomSubmitText
                                    ? (0, u.D)([e.hasCustomSubmitText()])
                                    : (0, u.D)([!1]),
                                  e.submitText$
                                    ? e.submitText$()
                                    : (0, u.D)([e.submitText()]),
                                ])
                              )
                            ),
                          ]).pipe(
                            (0, h.U)((e) => {
                              let [t, i] = e;
                              return (
                                t != Ss && (i = i.filter((e) => e[0])),
                                (i = i.filter((e) => e[1])),
                                i.length > 0 ? i[0][1] : t
                              );
                            })
                          )
                        : n),
                    (0, c.a)([r, o]).pipe(
                      (0, h.U)((e) => {
                        let [t, i] = e;
                        return t.length > 0
                          ? [
                              ...t.map((e) => ({ ...e, text: e.text || Ss })),
                            ].sort((e, t) => (e.order || 0) - (t.order || 0))
                          : [{ trigger: null, text: i || Ss }];
                      })
                    )
                  );
                })
              );
            },
            pageGroups() {
              const e = Ps || this.visiblePages || [],
                t = (this.segments || []).map((t) => ({
                  id: t.id,
                  label: t.definition.settings.displayLabel,
                  pages: e.filter((e) => e.definition.settings.segment == t.id),
                })),
                i = e.filter(
                  (e) => !t.some((t) => t.pages.some((t) => t == e))
                );
              return (
                i.length > 0 &&
                  t.push({ id: null, label: "Unknown", pages: i }),
                t.filter((e) => e.pages.length > 0)
              );
            },
            leftPageGroups() {
              return this.pageGroups.filter((e) =>
                e.pages.some((e) => !this.isPageObjViewOnly(e))
              );
            },
            rightPageGroups() {
              return this.pageGroups.filter(
                (e) => !e.pages.some((e) => !this.isPageObjViewOnly(e))
              );
            },
            page() {
              return this.leftPageGroups.length > 0
                ? this.leftPage
                : this.rightPage;
            },
            formId() {
              return this.$store.getters["page/formId"];
            },
            enabledPages$: function () {
              return this.$store.getters["page/enabledPages$"];
            },
            showPageNav() {
              return (
                null == this.currentRightPage ||
                !(
                  this.mustLogin &&
                  !this.$root.isLoggedIn &&
                  this.currentRightPage.children.every((e) => e.allowAnonymous)
                )
              );
            },
            hasMultiplePages: function () {
              return null != this.visiblePages && this.visiblePages.length > 1;
            },
            currentRightPage$() {
              const e = Je(() => this.rightPage),
                t = Je(() => this.$store.getters["page/pages"]);
              return (0, c.a)([t, e]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return t[i - 1];
                })
              );
            },
            currentLeftPage$() {
              const e = Je(() => this.leftPage),
                t = Je(() => this.$store.getters["page/pages"]);
              return (0, c.a)([t, e]).pipe(
                (0, h.U)((e) => {
                  let [t, i] = e;
                  return t[i - 1];
                })
              );
            },
            currentSegment$() {
              return this.currentRightPage$.pipe(
                (0, h.U)((e) =>
                  null == e
                    ? null
                    : this.segments.find(
                        (t) => t.id == e.definition.settings.segment
                      )
                )
              );
            },
            hasPartiallyCompletedForms() {
              return this.isWorkflow
                ? (this.segments || []).filter(
                    (e) =>
                      this.rightPageGroups.some((t) =>
                        t.pages.some(
                          (t) => t.definition.settings.segment == e.id
                        )
                      ) && ["InProgress", "Returned"].includes(e.status)
                  ).length > 0
                : ["InProgress", "Returned"].includes(this.status);
            },
            isWorkflowReturnVisible() {
              return (
                !this.adminPreview && this.adminReview && null != this.formId
              );
            },
            isWorkflowReturnEnabled() {
              return (
                this.isWorkflowReturnVisible &&
                (!this.anonymousUser ||
                  (null != this.currentSegment &&
                    null !=
                      this.currentSegment.definition.settings
                        .returnEmailAddressCalculationId &&
                    !0))
              );
            },
            isWorkflowManualOverrideVisible() {
              return (
                !this.adminPreview &&
                this.adminReview &&
                this.isWorkflow &&
                this.canChangeStatus
              );
            },
            isSubmittableStatusChangeVisible() {
              return (
                !this.adminPreview &&
                this.adminReview &&
                !this.isWorkflow &&
                this.canChangeStatus
              );
            },
            isSubmittableDeleteSubmissionVisible() {
              return (
                !this.adminPreview &&
                this.adminReview &&
                !this.isWorkflow &&
                this.canChangeStatus &&
                this.canDeleteSubmissions
              );
            },
            showComments: function () {
              return (
                this.adminReview ||
                (null != this.comments && this.comments.length > 1)
              );
            },
            hasCustomPageNav: function () {
              return (
                null != this.currentRightPage &&
                this.currentRightPage.hasCustomPageNav()
              );
            },
            resizableLeft() {
              return this.leftWidth > 30;
            },
            resizableRight() {
              return this.leftWidth < 70;
            },
            leftWidthPercentage() {
              return this.leftWidth + "%";
            },
            dividerLeft() {
              return "calc(" + this.leftWidthPercentage + " - 17px)";
            },
          },
          components: {
            LoginBanner: xi,
            Diff: Ii,
            CommentsTab: Mi,
            Files: Li,
            History: Ei,
            OfflineNotice: Di,
            PageSide: wi,
            LoadingWheel: rt.Z,
            HelpIcon: kt.Z,
          },
          methods: {
            init() {
              let e, t, i, a, n, l, r, o, u;
              (this.forcingRedirect = !1),
                (this.initialLoadFinished = !1),
                (this.showLoginSlidedown = !1),
                (this.pageStatus = {}),
                (this.pageStatusSubscriptions = []);
              let c = null;
              if (this.settings.adminPreview) {
                let s = this.settings.previewData;
                if (null == s) {
                  const e = document.getElementById("extraData").innerHTML;
                  s = JSON.parse(e);
                }
                ({
                  areaUrlSlug: e,
                  areaCode: t,
                  formName: i,
                  formVersion: a,
                  formHash: l,
                  formId: n,
                } = s.form),
                  (u = (s.page || 0) + 1),
                  (c = this.$store.dispatch(
                    "page/loadAdminPreviewFormData",
                    s
                  ));
              } else if (this.settings.adminReview) {
                const e = document.getElementById("extraData")?.innerHTML,
                  t = null == e ? null : JSON.parse(e);
                c = this.$store.dispatch("page/loadAdminReviewFormData", {
                  areaUrlSlug: this.settings.areaUrlSlug,
                  areaCode: this.settings.areaCode,
                  formId: this.settings.formId,
                  formName:
                    null != t && null != t.formName
                      ? t.formName
                      : this.settings.formName,
                  formVersion:
                    null != t && null != t.formVersion
                      ? t.formVersion
                      : this.settings.formVersion,
                  testMode:
                    null != t && null != t.testMode
                      ? t.testMode
                      : this.settings.testMode,
                  preloadedData: t,
                });
              } else {
                const s = {},
                  d = new URLSearchParams(window.location.search),
                  m = ["formHash", "testMode"];
                for (const [e, t] of d)
                  m.includes(e) || (e in s ? s[e].push(t) : (s[e] = [t]));
                ({
                  areaUrlSlug: e,
                  areaCode: t,
                  formName: i,
                  formVersion: a,
                  formId: n,
                  formHash: l,
                  testMode: r,
                  urlSlug: o,
                  page: u,
                } = this.settings),
                  (c = this.$store.dispatch("page/loadFormData", {
                    areaUrlSlug: e,
                    areaCode: t,
                    formId: n,
                    formName: i,
                    formVersion: a,
                    formHash: l,
                    testMode: r,
                    urlSlug: o,
                    externalData: s,
                  }));
              }
              this.$root.userDataPromise.then((e) => {
                this.$store.state.page.isSaveDisabledOnSectionChange =
                  e.ActiveFeatureFlags.includes("DisableSaveOnSectionChange");
              }),
                c.then(
                  async () => {
                    if (!this.adminPreview) {
                      if (this.directLinkTemplates.length > 0) {
                        const e =
                          this.directLinkTemplates[0].definition.settings
                            .target;
                        window.location.assign(e);
                      }
                      if (
                        !this.adminReview &&
                        null != this.status &&
                        !this.endUserStatuses.includes(this.status)
                      ) {
                        if (this.status == Ke.zS) this.showDeleteSuccessModal();
                        else {
                          if ("NOMATCH" == this.segment) {
                            const e =
                              this.$store.getters["page/visibleSegments"];
                            this.segment =
                              e.length > 0 ? e[e.length - 1].id : null;
                          }
                          let e =
                              (
                                await this.formData
                                  .getSegmentView(this.segment)
                                  .getElementsByFilter(
                                    (e) =>
                                      e.shouldSkipCompletion &&
                                      e.shouldSkipCompletion()
                                  )
                              ).length > 0,
                            t =
                              this.formData
                                .getSegmentView(this.segment)
                                .getElementsByFilter(
                                  (e) => e.isPostSubmitRedirect
                                ).length > 0
                                ? await Promise.all(
                                    this.formData
                                      .getSegmentView(this.segment)
                                      .getElementsByFilter(
                                        (e) => e.isPostSubmitRedirect
                                      )
                                      .map((e) =>
                                        e ? e.getPostSubmitRedirect() : ""
                                      )
                                  )
                                : "";
                          e
                            ? null != t && (window.location = t)
                            : this.showSubmitSuccessModal(t);
                        }
                        return;
                      }
                      this.leftPageGroups.length > 0
                        ? (this.reviewTab = "task")
                        : this.showComments &&
                          ((this.reviewTab = "comments"),
                          (this.leftWidth = 25)),
                        this.leftPageGroups.length > 0
                          ? ((this.leftPage = u), (this.rightPage = 0))
                          : ((this.leftPage = 0), (this.rightPage = u));
                    }
                    s.ZP.nextTick(() => {
                      this.initialLoadFinished = !0;
                    });
                  },
                  (e) => {
                    if (null == e || "NotFound" != e.message) throw e;
                    this.$emit("change-page", { page: "PageNotFound" });
                  }
                ),
                null == i ||
                  null == a ||
                  this.settings.adminPreview ||
                  this.settings.adminReview ||
                  (this.settings.testMode &&
                    "false" != this.settings.testMode) ||
                  (this.addViewPromise = (async () => {
                    const s = await this.$root.getUrl("addView", {
                        areaUrlSlug: e,
                        tenantCode: t,
                      }),
                      n = new FormData();
                    n.append("formName", i),
                      n.append("formVersion", a),
                      await (0, X.jf)(this.$store, s, {
                        method: "POST",
                        credentials: "same-origin",
                        body: n,
                      });
                  })());
            },
            updateHistory() {
              if (
                !this.adminPreview &&
                !this.adminReview &&
                null != this.$store.state.page.formData
              ) {
                const e = this.formId || this.$store.state.page.formData.formId,
                  t = this.page || 0;
                this.$emit(
                  "update-page",
                  {
                    areaCode: this.formTenantCode,
                    areaUrlSlug: null,
                    formId: e,
                    page: t,
                  },
                  !this.initialLoadFinished
                );
              }
            },
            gotoIndex: function () {
              this.settings.inModal
                ? this.$emit("close")
                : this.adminReview
                ? this.$emit("change-page", { page: "Admin" })
                : this.adminPreview ||
                  this.$emit("change-page", { page: "Index" });
            },
            forceLogin() {
              (this.forcingRedirect = !0),
                this.$nextTick(async () => {
                  await this.pendingActionPromise,
                    await this.$root.tenantDataPromise;
                  const e = await this.$root.getUrl("draftGoto", {
                      areaCode: this.formTenantCode,
                      formId: this.formId,
                      page: this.page,
                    }),
                    t = await this.$root.getLoginUrl(0, e);
                  window.location.assign(t);
                });
            },
            submit: async function (e, t) {
              e ||
                1 != this.submitButtons.length ||
                (e = this.submitButtons[0].trigger),
                this.throwIfViewOnly();
              let i = (
                await Promise.all(
                  this.formData
                    .getSegmentView(this.segment, e)
                    .getElementsByFilter((e) => e.shouldSkipConfirm)
                    .map((e) => e.shouldSkipConfirm())
                )
              ).filter((e) => null != e);
              if (
                i.length > 0 &&
                i.every((e) => e) &&
                !this.adminPreview &&
                (e ||
                  (1 == this.submitButtons.length &&
                    !this.submitButtons[0].trigger))
              )
                (this.forcingRedirect = !0), await this.submitFunction(e);
              else {
                let i = await Promise.all(
                  this.formData
                    .getSegmentView(this.segment, e)
                    .getElementsByFilter(
                      (e) =>
                        e.hasCustomConfirmComponent &&
                        e.hasCustomConfirmComponent(this.adminPreview)
                    )
                    .map((e) => e.getCustomConfirmComponent(this.adminPreview))
                );
                i = Array.prototype.concat.apply([], i);
                let s = await Promise.all(
                  this.formData
                    .getSegmentView(this.segment, e)
                    .getElementsByFilter((e) => null != e.blockSubmit$)
                    .map((e) => e.blockSubmit$())
                );
                s = Array.prototype.concat.apply([], s);
                const a =
                  s.length > 0
                    ? (0, c.a)(s).pipe((0, h.U)((e) => e.some((e) => e)))
                    : (0, u.D)([!1]);
                this.$modal.show(
                  Xi,
                  {
                    submitFunction: this.submitFunction,
                    confirmComponents: i,
                    blockSubmit$: a,
                    submitButtons: this.submitButtons.filter(
                      (t) => null == t.trigger || t.trigger == e || null == e
                    ),
                    triggerKey: e,
                    triggerElement: t.target,
                  },
                  {
                    height: "auto",
                    width: Math.min(0.9 * window.innerWidth, 600),
                    clickToClose: !1,
                  },
                  {
                    "before-closed": function (e) {
                      this.isSubmitting && e.stop();
                    },
                  }
                );
              }
            },
            submitFunction: async function (e) {
              (this.isSubmitting = !0), await this.pendingActionPromise;
              const t = await this.$store.dispatch("page/submitForm", e);
              let i =
                  (
                    await this.formData
                      .getSegmentView(this.segment, e)
                      .getElementsByFilter(
                        (e) =>
                          e.shouldSkipCompletion && e.shouldSkipCompletion()
                      )
                  ).length > 0,
                s = null;
              t.Form.children[1].children[2].children[4].value = "Zippy";
              t.Form.children[1].children[2].children[4].valid = true;
              console.log(t);
              switch (
                {
                  0: "Submitted",
                  1: "Redirect",
                  2: "Submitted",
                  3: "SubmittedWithRedirect",
                  4: "Dialog",
                }[t.Result]
              ) {
                case "Dialog":
                  return (
                    await this.showDialog(t.Dialog, e),
                    (this.forcingRedirect = !1),
                    void (this.isSubmitting = !1)
                  );
                case "Redirect":
                  return (
                    this.adminPreview || (this.forcingRedirect = !0),
                    (window.location = t.RedirectUrl),
                    void (this.isSubmitting = !1)
                  );
                case "SubmittedWithRedirect":
                  (s = t.RedirectUrl), i && (window.location = t.RedirectUrl);
                  break;
                case "Submitted":
                  break;
                case "ValidationFailed":
                  if (
                    !this.adminPreview ||
                    !confirm("Bypass validation? (only shown in preview mode)")
                  ) {
                    await (0, _s.Z)(1);
                    let e = null;
                    return (
                      this.$modal.show(
                        ts,
                        {
                          pageGroups: this.leftPageGroups,
                          goToPageFirstError: async (t) => {
                            e = t;
                          },
                        },
                        {
                          height: "auto",
                          width: Math.min(0.9 * window.innerWidth, 600),
                          clickToClose: !1,
                        },
                        {
                          closed: async () => {
                            const t = await (
                              e ?? this.currentLeftPage
                            ).firstInvalidElement(!1);
                            t &&
                              (null != e
                                ? await this.$refs.leftPageSide.gotoPage(e, !0)
                                : this.eventBus.emit("focus", t.vmId));
                          },
                        }
                      ),
                      void (this.isSubmitting = !1)
                    );
                  }
                  break;
                default:
                  throw new Error(`Unknown type: ${t.Result}`);
              }
              (this.isSubmitting = !1),
                this.adminReview
                  ? this.gotoIndex()
                  : i
                  ? (this.forcingRedirect = !0)
                  : await this.showSubmitSuccessModal(s);
            },
            async showDialog(e, t) {
              if ("Sign" === e) return await this.showSignDialog(t);
              throw new Error(`Unimplemented dialog: ${e}`);
            },
            async showSignDialog(e) {
              let t = !1;
              const i = await Promise.all(
                  this.formData
                    .getSegmentView(this.segment)
                    .getElementsByFilter((e) => e.isSignature && !e.isSigned)
                ),
                s = await this.$store.dispatch("page/invokeForm", {
                  type: "GenerateSignPreview",
                  target: i[0].id,
                  segment: this.segment,
                }),
                a = Uint8Array.from(atob(s.PdfBase64), (e) => e.charCodeAt(0));
              this.$modal.show(
                us,
                {
                  pdfData: a,
                  requireUserVerification: i[0].requireUserVerification(),
                  sendVerifyFunction: async (e, t) => {
                    const s = await this.$store.dispatch("page/invokeForm", {
                      type: "SendVerifyMessage",
                      target: i[0].id,
                      segment: this.segment,
                      data: { VerifyEmail: e, VerifyPhoneNumber: t },
                    });
                    return s.Success
                      ? { success: !0 }
                      : { success: !1, messages: s.FailureMessages };
                  },
                  signAndSubmitFunction: async (a, n, l) => {
                    t = !0;
                    const r = await this.$store.dispatch("page/invokeForm", {
                      type: "Sign",
                      target: i[0].id,
                      segment: this.segment,
                      data: {
                        EnteredName: a,
                        EnteredDate: n,
                        VerifyCode: l,
                        PdfHash: s.PdfHash,
                      },
                    });
                    return r.Success
                      ? (await this.submitFunction(e),
                        (t = !1),
                        { success: !0 })
                      : ((t = !1),
                        { success: !1, messages: r.FailureMessages });
                  },
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 1800),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    t && e.stop();
                  },
                }
              );
            },
            async showSubmitSuccessModal(e) {
              let t = this.segment;
              if ("NOMATCH" == t) {
                const e = this.$store.getters["page/visibleSegments"];
                t = e.length > 0 ? e[e.length - 1].id : null;
              }
              let i = await Promise.all(
                this.formData
                  .getSegmentView(t)
                  .getElementsByFilter((e) => e.isCustomReceiptContent)
                  .map((e) =>
                    e.visible().then((t) => (t ? e.receiptContents() : []))
                  )
              );
              i = Array.prototype.concat.apply([], i);
              let s = await Promise.all(
                this.formData
                  .getSegmentView(t)
                  .getElementsByFilter((e) => e.isCustomViewType)
                  .map((e) => e.visible().then((t) => (t ? e.viewTypes() : [])))
              );
              (s = Array.prototype.concat.apply([], s)),
                (0 != s.length &&
                  null != this.formSettings.showBuiltinPdf &&
                  !this.formSettings.showBuiltinPdf) ||
                  s.includes("Builtin") ||
                  s.unshift("Builtin");
              const a =
                  this.formData
                    .getSegmentView(t)
                    .getElementsByFilter((e) => e.isFileUpload).length > 0,
                n = await Promise.all(
                  s
                    .filter((e) => !["Builtin"].includes(e))
                    .map(async (e) => ({
                      url: await this.$root.getUrl("downloadDocument", {
                        areaCode: this.formTenantCode,
                        formId: this.formId,
                        document: e,
                      }),
                      text:
                        "Builtin" == e || "Default" == e || null == e
                          ? "Submission"
                          : e,
                    }))
                );
              a &&
                n.push({
                  url: await this.$root.getUrl("submissionGotoAttachments", {
                    areaCode: this.formTenantCode,
                    formId: this.formId,
                  }),
                  text: "Attached File(s)",
                }),
                (a || s.length > 1) &&
                  n.push({
                    url: await this.$root.getUrl("submissionGotoAllDocuments", {
                      areaCode: this.formTenantCode,
                      formId: this.formId,
                    }),
                    text: "All Documents",
                  }),
                this.$modal.show(
                  Qi,
                  {
                    redirectUrl: e,
                    documents: n,
                    submissionUrl: await this.$root.getUrl("submissionGoto", {
                      areaCode: this.formTenantCode,
                      formId: this.formId,
                      viewType: "Builtin",
                    }),
                    receiptContents: i,
                    adminPreview: this.adminPreview,
                  },
                  {
                    height: "auto",
                    width: Math.min(0.9 * window.innerWidth, 600),
                    clickToClose: !1,
                  },
                  {
                    closed: async () => {
                      this.adminPreview ||
                        (e
                          ? ((this.forcingRedirect = !0), (window.location = e))
                          : this.adminReview
                          ? (this.forcingRedirect = !1)
                          : await this.gotoIndex());
                    },
                  }
                );
            },
            showDeleteSuccessModal(e, t) {
              this.$modal.show(
                Oi.Z,
                { asAdmin: t, triggerElement: e.target },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  closed: async () => {
                    await this.gotoIndex();
                  },
                }
              );
            },
            deleteDraft: async function (e, t) {
              this.throwIfViewOnly();
              let i = !1;
              this.$modal.show(
                Ni.Z,
                {
                  asAdmin: e,
                  deleteFunction: async () => {
                    (i = !0),
                      await this.$store.dispatch("page/deleteDraft", {
                        asAdmin: e,
                      }),
                      (i = !1),
                      this.showDeleteSuccessModal(t, e);
                  },
                  triggerElement: t.target,
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    i && e.stop();
                  },
                }
              );
            },
            returnSubmission: async function (e, t, i) {
              let s = !1;
              this.$modal.show(
                Hi,
                {
                  defaultReturningSegment: e,
                  isWorkflow: t,
                  returnFunction: async (e, t) => {
                    s = !0;
                    var i = this.isWorkflow
                      ? await this.$store.dispatch("page/returnDraft", {
                          segment: e,
                          comment: t,
                        })
                      : await this.$store.dispatch(
                          "page/addCommentAndChangeStatus",
                          {
                            text: t,
                            status: "Returned",
                            userName: "Myself",
                            visibleToSubmitter: this.showComments,
                          }
                        );
                    return (
                      (s = !1), i.success && this.showReturnSuccessModal(), i
                    );
                  },
                  triggerElement: i.target,
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    s && e.stop();
                  },
                }
              );
            },
            resendEmail: async function (e, t, i, s) {
              let a = !1;
              this.$modal.show(
                Gi,
                {
                  commentRequired: t,
                  eventType: i,
                  defaultResendingSegment: e,
                  type: s,
                  resendFunction: async (e, t, i, s) => {
                    a = !0;
                    var n = await this.$store.dispatch("page/resendEmail", {
                      segment: e,
                      comment: t,
                      eventType: i,
                    });
                    return (
                      (a = !1), n.success && this.showResendSuccessModal(s), n
                    );
                  },
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    a && e.stop();
                  },
                }
              );
            },
            showResendSuccessModal(e) {
              this.$modal.show(
                ji,
                { type: e },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                { closed: async () => {} }
              );
            },
            showReturnSuccessModal() {
              this.$modal.show(
                zi,
                {},
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                { closed: async () => {} }
              );
            },
            startSubmittableStatusChange(e) {
              let t = !1;
              this.$modal.show(
                vs,
                {
                  returnFunction: async (i, s) => {
                    t = !0;
                    var a = await this.$store.dispatch(
                      "page/addCommentAndChangeStatus",
                      {
                        text: s,
                        status: i,
                        userName: "Myself",
                        visibleToSubmitter: this.showComments,
                      }
                    );
                    return (
                      (t = !1),
                      a.success && this.showChangeStatusSuccessModal(e),
                      a
                    );
                  },
                  triggerElement: e.target,
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    t && e.stop();
                  },
                }
              );
            },
            showChangeStatusSuccessModal(e) {
              this.$modal.show(
                ys,
                { triggerElement: e.target },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                { closed: async () => {} }
              );
            },
            startWorkflowManualOverride(e) {
              let t = !1;
              this.$modal.show(
                ps,
                {
                  returnFunction: async (e, i) => {
                    t = !0;
                    var s = await this.$store.dispatch(
                      "page/workflowManualOverride",
                      { type: e, data: i }
                    );
                    return (
                      (t = !1),
                      s.success &&
                        this.showWorkflowManualOverrideSuccessModal(e),
                      s
                    );
                  },
                  triggerElement: e.target,
                },
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  "before-closed": function (e) {
                    t && e.stop();
                  },
                }
              );
            },
            showWorkflowManualOverrideSuccessModal(e) {
              this.$modal.show(
                ws,
                {},
                {
                  height: "auto",
                  width: Math.min(0.9 * window.innerWidth, 600),
                  clickToClose: !1,
                },
                {
                  closed: async () => {
                    "DeleteWorkflow" == e &&
                      (this.settings.inModal
                        ? this.$emit("close")
                        : this.$emit("change-page", { page: "Admin" }));
                  },
                }
              );
            },
            toggleDropdown(e) {
              e.target.nextElementSibling.classList.toggle("show");
            },
            throwIfViewOnly() {
              if (this.isViewOnly)
                throw new Error("Should not be called for view only pages");
            },
            changeReviewTab(e) {
              this.reviewTab = e;
            },
            increaseLeftWidth() {
              this.resizableRight && (this.leftWidth = 75);
            },
            decreaseLeftWidth() {
              this.resizableLeft && (this.leftWidth = 25);
            },
            setLeftPage(e) {
              this.leftPage = e;
            },
            setRightPage(e) {
              this.rightPage = e;
            },
            resizeDragStart(e) {
              return (
                e.dataTransfer.clearData(),
                e.dataTransfer.setDragImage(e.target, e.offsetX, e.offsetY),
                (this.tempLeftWidth = this.leftWidth),
                !0
              );
            },
            resizeDragMove(e) {
              return (this.tempLeftWidth = this._getWidth(e)), !0;
            },
            resizeDragEnd(e) {
              return (
                (this.leftWidth = this._getWidth(e)),
                (this.tempLeftWidth = null),
                !0
              );
            },
            _getWidth(e) {
              var t = this.$refs.ReviewContainer.getBoundingClientRect(),
                i = t.width,
                s = e.pageX - t.left,
                a = Math.round((s / i) * 100);
              return Math.max(25, Math.min(75, Math.trunc(a)));
            },
          },
        },
        ks = Is,
        $s = (0, ct.Z)(
          ks,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", [
              !e.initialLoadFinished ||
              e.formDataLoading ||
              e.forcingRedirect ||
              (null == e.activeSegments && null == e.enabledPages)
                ? i(
                    "picture",
                    [i("LoadingWheel", { attrs: { width: 100 } })],
                    1
                  )
                : i(
                    "div",
                    [
                      e.testMode
                        ? i(
                            "div",
                            { staticClass: "alert alert-test testModeBar" },
                            [
                              e._v("TEST MODE "),
                              i("span", { attrs: { "aria-hidden": "" } }, [
                                e._v(">"),
                              ]),
                              e._v(" NOT A REAL FORM "),
                              i("span", { attrs: { "aria-hidden": "" } }, [
                                e._v("<"),
                              ]),
                              e._v(" TEST MODE"),
                            ]
                          )
                        : e._e(),
                      e._v(" "),
                      e.isOffline
                        ? i("OfflineNotice")
                        : i(
                            "div",
                            [
                              e.showPageNav &&
                              e.hasMultiplePages &&
                              !e.isViewOnly
                                ? i("LoginBanner")
                                : e._e(),
                              e._v(" "),
                              i(
                                "div",
                                {
                                  staticClass: "container-fluid",
                                  class: {
                                    "has-form-comments": e.showComments,
                                    "no-form-comments": !e.showComments,
                                    testModeContainer: e.testMode,
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    {
                                      ref: "ReviewContainer",
                                      staticClass: "row flex-nowrap",
                                    },
                                    [
                                      e.leftPageGroups.length > 0 ||
                                      e.showComments
                                        ? i(
                                            "div",
                                            {
                                              class:
                                                e.rightPageGroups.length > 1 ||
                                                e.adminReview
                                                  ? [
                                                      "submissions-left-col",
                                                      "col",
                                                      "admin-content",
                                                    ]
                                                  : ["tile", "container"],
                                              style:
                                                e.rightPageGroups.length > 0 &&
                                                e.rightPageGroups.some(
                                                  function (e) {
                                                    return e.pages.length > 0;
                                                  }
                                                )
                                                  ? {
                                                      flex:
                                                        "0 0 " +
                                                        e.leftWidthPercentage,
                                                    }
                                                  : {},
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "row no-gutters justify-content-between align-items-start",
                                                },
                                                [
                                                  e.adminReview
                                                    ? i(
                                                        "ul",
                                                        {
                                                          staticClass:
                                                            "col nav nav-tabs",
                                                        },
                                                        [
                                                          e.leftPageGroups
                                                            .length > 0
                                                            ? i(
                                                                "li",
                                                                {
                                                                  staticClass:
                                                                    "nav-item",
                                                                },
                                                                [
                                                                  i(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "nav-link",
                                                                      class: {
                                                                        active:
                                                                          "task" ==
                                                                          e.reviewTab,
                                                                      },
                                                                      attrs: {
                                                                        tabindex:
                                                                          "0",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.preventDefault(),
                                                                              e.changeReviewTab(
                                                                                "task"
                                                                              )
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Task"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                          e._v(" "),
                                                          e.showComments
                                                            ? i(
                                                                "li",
                                                                {
                                                                  staticClass:
                                                                    "nav-item",
                                                                },
                                                                [
                                                                  i(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "nav-link",
                                                                      class: {
                                                                        active:
                                                                          "comments" ==
                                                                          e.reviewTab,
                                                                      },
                                                                      attrs: {
                                                                        tabindex:
                                                                          "0",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.preventDefault(),
                                                                              e.changeReviewTab(
                                                                                "comments"
                                                                              )
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Comments"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                          e._v(" "),
                                                          i(
                                                            "li",
                                                            {
                                                              staticClass:
                                                                "nav-item",
                                                            },
                                                            [
                                                              i(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "nav-link",
                                                                  class: {
                                                                    active:
                                                                      "files" ==
                                                                      e.reviewTab,
                                                                  },
                                                                  attrs: {
                                                                    tabindex:
                                                                      "0",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          t.preventDefault(),
                                                                          e.changeReviewTab(
                                                                            "files"
                                                                          )
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [e._v("Files")]
                                                              ),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          i(
                                                            "li",
                                                            {
                                                              staticClass:
                                                                "nav-item",
                                                            },
                                                            [
                                                              i(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "nav-link",
                                                                  class: {
                                                                    active:
                                                                      "history" ==
                                                                      e.reviewTab,
                                                                  },
                                                                  attrs: {
                                                                    tabindex:
                                                                      "0",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          t.preventDefault(),
                                                                          e.changeReviewTab(
                                                                            "history"
                                                                          )
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  e._v(
                                                                    "History"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : e._e(),
                                                  e._v(" "),
                                                  e.adminReview
                                                    ? i(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "button-controls mb-3 align-items-center",
                                                          class: {
                                                            "btn-group":
                                                              e.isWorkflowManualOverrideVisible ||
                                                              e.isSubmittableStatusChangeVisible,
                                                          },
                                                        },
                                                        [
                                                          e.isWorkflowReturnEnabled
                                                            ? e._e()
                                                            : i("HelpIcon", {
                                                                staticClass:
                                                                  "mr-1",
                                                                attrs: {
                                                                  text: "No email found for returning",
                                                                },
                                                              }),
                                                          e._v(" "),
                                                          i(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm btn-outline-secondary cancel dfNavButton w-100",
                                                              attrs: {
                                                                type: "button",
                                                                disabled:
                                                                  !e.isWorkflowReturnEnabled,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    return (
                                                                      t.preventDefault(),
                                                                      e.returnSubmission(
                                                                        e.isWorkflow
                                                                          ? e
                                                                              .$refs
                                                                              .rightPageSide
                                                                              .currentSegment
                                                                              .id
                                                                          : e.formId,
                                                                        e.isWorkflow,
                                                                        t
                                                                      )
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              e._v(
                                                                "Return Submission"
                                                              ),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          e.isWorkflowManualOverrideVisible ||
                                                          e.isSubmittableStatusChangeVisible
                                                            ? i(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-split",
                                                                  attrs: {
                                                                    id: "dropdownBtn",
                                                                    type: "button",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          t.preventDefault(),
                                                                          e.toggleDropdown(
                                                                            t
                                                                          )
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  i(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "sr-only",
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Toggle Dropdown"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : e._e(),
                                                          e._v(" "),
                                                          i(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "dropdown-menu dropdown-menu-right",
                                                              attrs: {
                                                                id: "dropdownMenu",
                                                              },
                                                            },
                                                            [
                                                              e.isWorkflowManualOverrideVisible
                                                                ? i(
                                                                    "button",
                                                                    {
                                                                      staticClass:
                                                                        "dropdown-item btn-sm cancel dfNavButton",
                                                                      attrs: {
                                                                        type: "button",
                                                                        disabled:
                                                                          !e.isWorkflowManualOverrideVisible,
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.preventDefault(),
                                                                              e.startWorkflowManualOverride.apply(
                                                                                null,
                                                                                arguments
                                                                              )
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Manual Override"
                                                                      ),
                                                                    ]
                                                                  )
                                                                : e._e(),
                                                              e._v(" "),
                                                              e.isSubmittableStatusChangeVisible
                                                                ? i(
                                                                    "button",
                                                                    {
                                                                      staticClass:
                                                                        "dropdown-item btn-sm cancel dfNavButton",
                                                                      attrs: {
                                                                        type: "button",
                                                                        disabled:
                                                                          !e.isSubmittableStatusChangeVisible,
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.preventDefault(),
                                                                              e.startSubmittableStatusChange.apply(
                                                                                null,
                                                                                arguments
                                                                              )
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Change Status"
                                                                      ),
                                                                    ]
                                                                  )
                                                                : e._e(),
                                                              e._v(" "),
                                                              e.isSubmittableDeleteSubmissionVisible
                                                                ? i(
                                                                    "button",
                                                                    {
                                                                      staticClass:
                                                                        "dropdown-item btn-sm cancel dfNavButton text-danger",
                                                                      attrs: {
                                                                        type: "button",
                                                                        disabled:
                                                                          !e.isSubmittableDeleteSubmissionVisible,
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.preventDefault(),
                                                                              e.deleteDraft(
                                                                                !0,
                                                                                t
                                                                              )
                                                                            );
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "Delete Submission"
                                                                      ),
                                                                    ]
                                                                  )
                                                                : e._e(),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    : e._e(),
                                                ]
                                              ),
                                              e._v(" "),
                                              i("Diff", {
                                                attrs: {
                                                  inlineAdminPreview:
                                                    e.settings
                                                      .inlineAdminPreview,
                                                },
                                              }),
                                              e._v(" "),
                                              e.leftPageGroups.length > 0 &&
                                              e.leftPageGroups.some(function (
                                                e
                                              ) {
                                                return e.pages.length > 0;
                                              })
                                                ? i("PageSide", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          "task" == e.reviewTab,
                                                        expression:
                                                          "reviewTab == 'task'",
                                                      },
                                                    ],
                                                    ref: "leftPageSide",
                                                    attrs: {
                                                      "page-groups":
                                                        e.leftPageGroups,
                                                      pageI: e.leftPage,
                                                      "event-bus": e.eventBus,
                                                    },
                                                    on: {
                                                      "set-page": function (t) {
                                                        return e.setLeftPage(t);
                                                      },
                                                      "update-page": function (
                                                        t
                                                      ) {
                                                        return e.$emit(
                                                          "update-page",
                                                          t
                                                        );
                                                      },
                                                    },
                                                  })
                                                : e._e(),
                                              e._v(" "),
                                              i("CommentsTab", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      "comments" == e.reviewTab,
                                                    expression:
                                                      "reviewTab == 'comments'",
                                                  },
                                                ],
                                                staticClass: "comments-tab",
                                              }),
                                              e._v(" "),
                                              i("Files", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      "files" == e.reviewTab,
                                                    expression:
                                                      "reviewTab == 'files'",
                                                  },
                                                ],
                                              }),
                                              e._v(" "),
                                              i("History", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      "history" == e.reviewTab,
                                                    expression:
                                                      "reviewTab == 'history'",
                                                  },
                                                ],
                                              }),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                      e._v(" "),
                                      e.rightPageGroups.length > 0 &&
                                      e.rightPageGroups.some(function (e) {
                                        return e.pages.length > 0;
                                      })
                                        ? i(
                                            "div",
                                            {
                                              staticClass:
                                                "submissions-right-col col admin-content flex-grow-1 p-0",
                                            },
                                            [
                                              e.hasPartiallyCompletedForms &&
                                              e.adminReview
                                                ? i(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "alert alert-in-progress text-center p-1 m-0",
                                                    },
                                                    [
                                                      e._v(
                                                        "There are partially completed form(s) in this submission."
                                                      ),
                                                    ]
                                                  )
                                                : e._e(),
                                              e._v(" "),
                                              i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "container tile p-3",
                                                },
                                                [
                                                  0 == e.leftPageGroups.length
                                                    ? i("Diff", {
                                                        attrs: {
                                                          inlineAdminPreview:
                                                            e.settings
                                                              .inlineAdminPreview,
                                                        },
                                                      })
                                                    : e._e(),
                                                  e._v(" "),
                                                  i("PageSide", {
                                                    ref: "rightPageSide",
                                                    attrs: {
                                                      "page-groups":
                                                        e.rightPageGroups,
                                                      pageI: e.rightPage,
                                                      "event-bus": e.eventBus,
                                                    },
                                                    on: {
                                                      "set-page": function (t) {
                                                        return e.setRightPage(
                                                          t
                                                        );
                                                      },
                                                      "update-page": function (
                                                        t
                                                      ) {
                                                        return e.$emit(
                                                          "update-page",
                                                          t
                                                        );
                                                      },
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        : e._e(),
                                    ]
                                  ),
                                  e._v(" "),
                                  i(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            e.rightPageGroups.length > 0 &&
                                            e.rightPageGroups.some(function (
                                              e
                                            ) {
                                              return e.pages.length > 0;
                                            }) &&
                                            ((e.leftPageGroups.length > 0 &&
                                              e.leftPageGroups.some(function (
                                                e
                                              ) {
                                                return e.pages.length > 0;
                                              })) ||
                                              e.showComments),
                                          expression:
                                            "rightPageGroups.length > 0 && rightPageGroups.some(i => i.pages.length > 0) && ((leftPageGroups.length > 0 && leftPageGroups.some(i => i.pages.length > 0)) || showComments)",
                                        },
                                      ],
                                      staticClass: "task-divider",
                                      style: { left: e.dividerLeft },
                                    },
                                    [
                                      i(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-bare p-0 icon icon-caret-left",
                                          class: { disabled: !e.resizableLeft },
                                          attrs: {
                                            tabindex: "0",
                                            draggable: "true",
                                          },
                                          on: {
                                            click: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.decreaseLeftWidth()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [e._v("Resize left")]
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      i("span", {
                                        staticClass: "task-divider-line",
                                        attrs: {
                                          draggable:
                                            e.resizableLeft || e.resizableRight,
                                        },
                                        on: {
                                          dragstart: function (t) {
                                            return (
                                              t.stopPropagation(),
                                              e.resizeDragStart(t)
                                            );
                                          },
                                          drag: function (t) {
                                            return (
                                              t.stopPropagation(),
                                              e.resizeDragMove(t)
                                            );
                                          },
                                          dragend: function (t) {
                                            return (
                                              t.stopPropagation(),
                                              t.preventDefault(),
                                              e.resizeDragEnd(t)
                                            );
                                          },
                                        },
                                      }),
                                      e._v(" "),
                                      i(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-bare p-0 icon icon-caret-right",
                                          class: {
                                            disabled: !e.resizableRight,
                                          },
                                          attrs: {
                                            tabindex: "0",
                                            draggable: "true",
                                          },
                                          on: {
                                            click: function (t) {
                                              return (
                                                t.preventDefault(),
                                                e.increaseLeftWidth()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [e._v("Resize right")]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e._v(" "),
                                  i("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: null != e.tempLeftWidth,
                                        expression: "tempLeftWidth != null",
                                      },
                                    ],
                                    staticClass: "resize-marker",
                                    style: { left: e.tempLeftWidth },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                      e._v(" "),
                      e.testMode
                        ? i(
                            "div",
                            { staticClass: "alert alert-test testModeBar" },
                            [
                              e._v("TEST MODE "),
                              i("span", { attrs: { "aria-hidden": "" } }, [
                                e._v(">"),
                              ]),
                              e._v(" NOT A REAL FORM "),
                              i("span", { attrs: { "aria-hidden": "" } }, [
                                e._v("<"),
                              ]),
                              e._v(" TEST MODE"),
                            ]
                          )
                        : e._e(),
                    ],
                    1
                  ),
            ]);
          },
          [],
          !1,
          null,
          "0bd9df28",
          null
        ).exports;
    },
    34116: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => l });
      var s = i(18136),
        a = i(88716);
      const n = {
          props: ["settings"],
          components: { AsyncOperationStatus: i(73741).Z },
          data: () => ({ extraData: null }),
          computed: {
            failureMessages() {
              return this.extraData?.FailureMessages ?? [];
            },
            actions() {
              const e = this.extraData?.Actions ?? [];
              for (let t of e) "promise" in t || this.$set(t, "promise", null);
              return e;
            },
          },
          async created() {
            let e = await (0, s.Z)(this.$store, "PageResumeFailure");
            Array.isArray(e) && (e = { FailureMessages: e }),
              (this.extraData = e);
          },
          methods: {
            async act(e) {
              e.promise = (async () => {
                const t = await this.$root.getUrl(e.UrlType, e.UrlData),
                  i = await (0, a.jf)(this.$store, t, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify(e.PostData),
                  });
                if (200 != i.status)
                  throw new Error(
                    "Not 200 OK: " + i.status + " " + i.statusText
                  );
              })();
            },
          },
        },
        l = (0, i(83262).Z)(
          n,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "container p-3" }, [
              i("div", { staticClass: "row" }, [
                i("div", { staticClass: "col-md-8 offset-md-2" }, [
                  i(
                    "div",
                    { staticClass: "alert alert-danger" },
                    [
                      e._l(e.failureMessages, function (t) {
                        return i(
                          "ul",
                          {
                            class:
                              e.failureMessages.length < 2
                                ? ["list-unstyled", "p-0"]
                                : [],
                          },
                          [i("li", [e._v(e._s(t))])]
                        );
                      }),
                      e._v(" "),
                      e.actions.length > 0
                        ? i(
                            "div",
                            e._l(e.actions, function (t) {
                              return i(
                                "div",
                                [
                                  i(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: {
                                        click: function (i) {
                                          return e.act(t);
                                        },
                                      },
                                    },
                                    [e._v(e._s(t.Label))]
                                  ),
                                  e._v(" "),
                                  i("AsyncOperationStatus", {
                                    attrs: { promise: t.promise },
                                  }),
                                ],
                                1
                              );
                            }),
                            0
                          )
                        : e._e(),
                    ],
                    2
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
    },
    35447: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      const s = {
          data: () => ({ show: !1 }),
          props: ["data", "pageMode"],
          computed: {
            showChanges() {
              return this.$store.getters["page/showChanges"];
            },
            changes() {
              return this.data.baseChanges;
            },
          },
        },
        a = (0, i(83262).Z)(
          s,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      e.showChanges &&
                      null != e.changes &&
                      e.changes.length > 0,
                    expression:
                      "showChanges && changes != null && changes.length > 0",
                  },
                ],
                staticClass: "row",
                staticStyle: {
                  "margin-top": "5px",
                  display: "flex",
                  "justify-content": "center",
                },
                style: e.pageMode
                  ? { border: "2px dashed #aaaaaa" }
                  : { "border-top": "2px dashed #aaaaaa" },
              },
              [
                i(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.show,
                        expression: "!show",
                      },
                    ],
                    staticClass: "btn btn-link btn-sm col-12",
                    on: {
                      click: function (t) {
                        t.preventDefault(), (e.show = !0);
                      },
                    },
                  },
                  [e._v("Show " + e._s(e.pageMode ? "Page " : "") + " Changes")]
                ),
                e._v(" "),
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show",
                      },
                    ],
                    staticClass: "col-12",
                    staticStyle: {
                      padding: "0.75rem 1.25rem",
                      "margin-bottom": "0",
                    },
                  },
                  [
                    i(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "justify-content": "space-between",
                          "align-items": "flex-start",
                        },
                      },
                      [
                        i("h3", { staticClass: "h5" }, [
                          e._v(
                            e._s(e.pageMode ? "Page " : "") + "Settings Changes"
                          ),
                        ]),
                        e._v(" "),
                        i(
                          "button",
                          {
                            staticClass: "btn btn-link btn-sm",
                            staticStyle: { "padding-top": "0" },
                            on: {
                              click: function (t) {
                                t.preventDefault(), (e.show = !1);
                              },
                            },
                          },
                          [e._v("Hide")]
                        ),
                      ]
                    ),
                    e._v(" "),
                    i(
                      "ul",
                      { staticClass: "list-group list-group-flush" },
                      e._l(e.changes, function (t) {
                        return i("li", { staticClass: "list-group-item" }, [
                          i("h4", { staticClass: "h6" }, [e._v(e._s(t.key))]),
                          e._v(" "),
                          i("div", [
                            i("strong", [e._v("Prior:")]),
                            e._v(" " + e._s(t.baseSetting)),
                          ]),
                          e._v(" "),
                          i("div", [
                            i("strong", [e._v("Now:")]),
                            e._v(" " + e._s(t.currentSetting)),
                          ]),
                        ]);
                      }),
                      0
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
    },
    7202: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => h });
      var s = i(2230),
        a = i(77382),
        n = i(81217),
        l = i(4480);
      const r = {
        data: () => ({ visibleToSubmitterEditing: !1 }),
        props: ["id", "comment", "hideHistory"],
        components: { HelpIcon: l.Z },
        computed: { ...(0, a.Se)("page", ["adminReview"]) },
        methods: {
          toggleVisibleToSubmitterEditing(e) {
            this.visibleToSubmitterEditing = !this.visibleToSubmitterEditing;
          },
          async toggleCommentVisibility(e, t) {
            (this.visibleToSubmitterEditing = !1),
              this.$emit("set-comment-visibility", t);
          },
        },
      };
      var o = i(83262);
      const u = (0, o.Z)(
        r,
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "li",
            {
              staticClass: "submissions-comment p-relative",
              class: e.adminReview
                ? e.comment.visibleToSubmitter
                  ? "submitter-visible-comment"
                  : "reviewer-visible-comment"
                : null,
            },
            [
              e.adminReview
                ? i(
                    "div",
                    {
                      staticClass:
                        "d-inline-flex ml-auto p-relative mt-1 float-right",
                    },
                    [
                      e.adminReview &&
                      "00000000-0000-0000-0000-000000000000" != e.comment.id
                        ? i(
                            "div",
                            {
                              staticClass: "visibility-input-wrapper dropdown",
                              class: e.hideHistory ? "disabled-visibility" : "",
                            },
                            [
                              e.hideHistory
                                ? i(
                                    "span",
                                    {
                                      staticClass:
                                        "existing-visibility icon icon-users btn btn-bare btn-sm p-0",
                                    },
                                    [e._v("Reviewers only")]
                                  )
                                : i(
                                    "button",
                                    {
                                      staticClass:
                                        "existing-visibility btn btn-outline-secondary btn-sm dropdown-toggle icon",
                                      class: {
                                        show: e.visibleToSubmitterEditing,
                                      },
                                      attrs: {
                                        type: "button",
                                        id:
                                          e.id +
                                          "_VisibleToggle_" +
                                          e.comment.id,
                                        disabled: e.hideHistory,
                                      },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            t.stopPropagation(),
                                            e.toggleVisibleToSubmitterEditing(
                                              e.comment
                                            )
                                          );
                                        },
                                      },
                                    },
                                    [
                                      i("span", {
                                        staticClass: "icon",
                                        class:
                                          e.comment.visibleToSubmitter &&
                                          !e.hideHistory
                                            ? "icon-sites"
                                            : "icon-users",
                                      }),
                                      e._v(
                                        e._s(
                                          e.comment.visibleToSubmitter
                                            ? "Everyone"
                                            : "Reviewers only"
                                        )
                                      ),
                                    ]
                                  ),
                              e._v(" "),
                              i(
                                "fieldset",
                                {
                                  staticClass: "dropdown-menu",
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation();
                                    },
                                  },
                                },
                                [
                                  i("legend", { staticClass: "sr-only" }, [
                                    e._v("Comment Visibility"),
                                  ]),
                                  e._v(" "),
                                  i("div", { staticClass: "form-check" }, [
                                    i("input", {
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: e.id + "_Everyone_" + e.comment.id,
                                        name:
                                          "CommentVisibility_" + e.comment.id,
                                      },
                                      domProps: {
                                        checked: e.comment.visibleToSubmitter,
                                      },
                                      on: {
                                        change: function (t) {
                                          return e.toggleCommentVisibility(
                                            e.comment,
                                            !0
                                          );
                                        },
                                      },
                                    }),
                                    e._v(" "),
                                    i(
                                      "label",
                                      {
                                        staticClass: "form-check-label icon",
                                        attrs: {
                                          for:
                                            e.id + "_Everyone_" + e.comment.id,
                                        },
                                      },
                                      [
                                        i("span", {
                                          staticClass: "icon icon-sites",
                                        }),
                                        e._v("Everyone"),
                                      ]
                                    ),
                                  ]),
                                  e._v(" "),
                                  i("div", { staticClass: "form-check" }, [
                                    i("input", {
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        id: e.id + "_Reviewers_" + e.comment.id,
                                        name:
                                          "CommentVisibility_" + e.comment.id,
                                      },
                                      domProps: {
                                        checked: !e.comment.visibleToSubmitter,
                                      },
                                      on: {
                                        change: function (t) {
                                          return e.toggleCommentVisibility(
                                            e.comment,
                                            !1
                                          );
                                        },
                                      },
                                    }),
                                    e._v(" "),
                                    i(
                                      "label",
                                      {
                                        staticClass: "form-check-label",
                                        attrs: {
                                          for:
                                            e.id + "_Reviewers_" + e.comment.id,
                                        },
                                      },
                                      [
                                        i("span", {
                                          staticClass: "icon icon-users",
                                        }),
                                        e._v("Reviewers only"),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                              e._v(" "),
                              e.hideHistory
                                ? i("HelpIcon", {
                                    staticClass: "disabled-help-overlay",
                                    attrs: {
                                      text: "Comments in this tab are only visible to Reviewers. Comments added for returns will only be included in the notification to the Submitter. Add comments to specific fields to inform the Submitter.",
                                      trigger: "click",
                                    },
                                  })
                                : e._e(),
                            ],
                            1
                          )
                        : e._e(),
                    ]
                  )
                : e._e(),
              e._v(" "),
              i("strong", { staticClass: "fw-600 comment-username" }, [
                e._v(e._s(e.comment.userName || "Anonymous")),
              ]),
              e._v(" "),
              i("span", { staticClass: "help-block p-0" }, [
                e._v(e._s(new Date(e.comment.date).toLocaleString())),
              ]),
              e._v(" "),
              i("div", { staticClass: "comment-text" }, [
                e._v(e._s(e.comment.text)),
              ]),
              e._v(" "),
              null != e.comment.files && e.comment.files.length > 0
                ? [
                    i("strong", { staticClass: "sr-only" }, [
                      e._v("Attached Files:"),
                    ]),
                    e._v(" "),
                    i(
                      "ul",
                      { staticClass: "files-list" },
                      e._l(e.comment.files, function (t) {
                        return i("li", [
                          i(
                            "a",
                            {
                              staticClass: "icon icon-download",
                              attrs: { target: "_blank", href: t.fileUrl },
                            },
                            [e._v(e._s(t.filename))]
                          ),
                        ]);
                      }),
                      0
                    ),
                  ]
                : e._e(),
            ],
            2
          );
        },
        [],
        !1,
        null,
        "ddb1a778",
        null
      ).exports;
      var c = i(80533),
        d = i(50734);
      const m = {
          data() {
            return {
              id: (0, d.Z)(),
              showReply: !1,
              newVisibleToSubmitter: !this.adminReview,
              newVisibleToSubmitterVisibilityEditing: !1,
              newText: null,
              newStatus: null,
              commentStatus: null,
              historyVisibility: !1,
              commentsVisibility: !1,
            };
          },
          props: ["data", "showAdminFormLevelControls", "hideHistory"],
          watch: {
            data: {
              handler(e) {
                for (let t of e.comments || [])
                  null == t.visibleToSubmitterEditing &&
                    this.$set(
                      t,
                      "visibleToSubmitterEditing",
                      t.visibleToSubmitterEditing || !1
                    );
              },
              immediate: !1,
            },
          },
          components: { Comment: u, LoadingWheel: n.Z, HelpIcon: l.Z },
          inject: { gotoIndex: { from: "gotoIndex", default: null } },
          computed: {
            ...(0, a.Se)("page", [
              "isWorkflow",
              "adminReview",
              "possibleStatuses",
              "currentStatusLabel",
              "canAddComments",
              "canChangeStatus",
              "canReplyToComments",
              "anonymousUser",
            ]),
            possibleStatusesExcludingIgnored() {
              return this.possibleStatuses.filter(
                (e) => !c.qv.some((t) => t == e.value)
              );
            },
            showComponent() {
              return (
                this.hasComments ||
                this.canAddComments ||
                this.canChangeStatus ||
                this.hasHistory
              );
            },
            showAddComments() {
              return (
                (this.hasComments && this.canReplyToComments) ||
                this.canAddComments ||
                this.canChangeStatus
              );
            },
            showChangeStatus() {
              return (
                this.canChangeStatus &&
                this.showAdminFormLevelControls &&
                !this.isWorkflow
              );
            },
            hasComments() {
              return (
                null != this.data.comments && this.data.comments.length > 0
              );
            },
            hasHistory() {
              return (
                !this.hideHistory &&
                null != this.data.history &&
                this.data.history.length > 0
              );
            },
            isReturned() {
              return "Returned" == this.newStatus;
            },
            hasThreat() {
              return this.data.isThreat;
            },
          },
          methods: {
            generateGuid: d.Z,
            toggleVisibleToSubmitterEditing(e) {
              e.visibleToSubmitterEditing = !e.visibleToSubmitterEditing;
            },
            toggleCommentsVisibility() {
              this.commentsVisibility = !this.commentsVisibility;
            },
            toggleHistoryVisibility() {
              this.historyVisibility = !this.historyVisibility;
            },
            isStatusDisabled(e) {
              return !(e.value != c.O7 || !this.anonymousUser);
            },
            getStatusDisabledReason(e) {
              return e.value == c.O7 && this.anonymousUser
                ? "Cannot return this submission because the submitter wasn't logged in"
                : null;
            },
            showComments() {
              (this.showReply = !0),
                (this.commentsVisibility = !0),
                s.ZP.nextTick(() => {
                  this.$refs.ReplyText.focus();
                });
            },
            cancel() {
              this.showAdminFormLevelControls
                ? ((this.newText = null), (this.$refs.file.value = null))
                : (this.showReply = !1);
            },
            async toggleCommentVisibility(e, t) {
              e.visibleToSubmitterEditing = !1;
              const i = t,
                s = this.$store.getters["page/getElementPathString"](this.data);
              await this.$store.dispatch("page/setCommentVisibility", {
                visibleToSubmitter: i,
                elementId: s,
                commentId: e.id,
                elementData: this.data,
              });
            },
            async sendReply() {
              (this.commentStatus = "sending"),
                this.$set(this.data, "isThreat", !1);
              const e = this.$store.getters["page/getElementPathString"](
                this.data
              );
              try {
                const t = Array.from(this.$refs.file.files),
                  i = t.map((e) =>
                    this.$store.dispatch("page/uploadExternalFile", {
                      vmId: this.data.vmId,
                      newFile: e,
                      isComment: !0,
                    })
                  ),
                  s = await Promise.all(i);
                if ("isThreat" in this.data && this.data.isThreat)
                  throw new Error("Potential virus or malware detected.");
                const a = t.map((e) => e.name),
                  n = t.map((e) => e.type),
                  l = this.hideHistory
                    ? !!this.isReturned
                    : !this.adminReview || this.newVisibleToSubmitter,
                  r = await this.$store.dispatch(
                    "page/addCommentAndChangeStatus",
                    {
                      text: this.newText,
                      visibleToSubmitter: l,
                      elementId: e,
                      elementData: this.data,
                      status: this.newStatus,
                      fileIds: s,
                      fileNames: a,
                      fileContentTypes: n,
                      userName: "Myself",
                    }
                  );
                if (r && !r.accessible)
                  return (
                    alert(
                      "As a result of your change, this submission is no longer accessible."
                    ),
                    void (null != this.gotoIndex
                      ? this.gotoIndex()
                      : this.$emit("change-page", { page: "AdminSearch" }))
                  );
                (this.$refs.file.value = null),
                  (this.showReply = !1),
                  (this.newText = null),
                  (this.newStatus = null),
                  (this.commentStatus = "ok");
              } catch (e) {
                throw (
                  ((this.commentStatus = "failed"),
                  alert("Saving comment failed"),
                  e)
                );
              }
            },
          },
        },
        h = (0, o.Z)(
          m,
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return e.showComponent
              ? i(
                  "div",
                  {
                    class:
                      e.hasComments || e.hasHistory
                        ? ["card", "card-body", "comment-card"]
                        : [],
                  },
                  [
                    e.data.history.length > 0 && !e.hideHistory
                      ? [
                          i(
                            "div",
                            { on: { click: e.toggleHistoryVisibility } },
                            [
                              i(
                                "button",
                                {
                                  staticClass: "btn btn-bare p-0",
                                  attrs: {
                                    "aria-expanded": e.historyVisibility,
                                    "aria-controls": e.id + "-history-list",
                                    id: e.id + "history-header",
                                  },
                                  on: {
                                    click: function (t) {
                                      return (
                                        t.preventDefault(),
                                        t.stopPropagation(),
                                        e.toggleHistoryVisibility.apply(
                                          null,
                                          arguments
                                        )
                                      );
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n                History\n                "
                                  ),
                                  i("span", {
                                    staticClass: "icon",
                                    class: [
                                      e.historyVisibility
                                        ? "icon-caret-up"
                                        : "icon-caret-down",
                                    ],
                                  }),
                                ]
                              ),
                            ]
                          ),
                          e._v(" "),
                          i(
                            "ul",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.historyVisibility,
                                  expression: "historyVisibility",
                                },
                              ],
                              staticClass: "comment-list",
                              attrs: {
                                role: "region",
                                id: e.id + "-history-list",
                                "aria-labelledby": e.id + "history-header",
                              },
                            },
                            e._l(e.data.history, function (t) {
                              return i(
                                "li",
                                {
                                  staticClass: "submissions-comment p-relative",
                                },
                                [
                                  i(
                                    "strong",
                                    { staticClass: "fw-600 comment-username" },
                                    [e._v(e._s(t.userName || "Anonymous"))]
                                  ),
                                  e._v(" "),
                                  i("span", { staticClass: "help-block p-0" }, [
                                    e._v(
                                      e._s(new Date(t.date).toLocaleString())
                                    ),
                                  ]),
                                  e._v(" "),
                                  i("div", { staticClass: "comment-text" }, [
                                    e._v(e._s(t.text)),
                                  ]),
                                ]
                              );
                            }),
                            0
                          ),
                        ]
                      : e._e(),
                    e._v(" "),
                    e.data.comments.length > 0
                      ? [
                          e.hideHistory
                            ? e._e()
                            : i(
                                "div",
                                { on: { click: e.toggleCommentsVisibility } },
                                [
                                  i(
                                    "button",
                                    {
                                      staticClass: "btn btn-bare p-0",
                                      attrs: {
                                        "aria-expanded": e.commentsVisibility,
                                        "aria-controls": e.id + "-comment-list",
                                        id: e.id + "comment-header",
                                      },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            t.stopPropagation(),
                                            e.toggleCommentsVisibility.apply(
                                              null,
                                              arguments
                                            )
                                          );
                                        },
                                      },
                                    },
                                    [
                                      e._v(
                                        "\n                Comments\n                "
                                      ),
                                      i("span", {
                                        staticClass: "icon",
                                        class: [
                                          e.commentsVisibility
                                            ? "icon-caret-up"
                                            : "icon-caret-down",
                                        ],
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                          e._v(" "),
                          i(
                            "ul",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.commentsVisibility || e.hideHistory,
                                  expression:
                                    "commentsVisibility || hideHistory",
                                },
                              ],
                              staticClass: "comment-list",
                              attrs: {
                                role: "region",
                                id: e.id + "-comment-list",
                                "aria-labelledby": e.id + "comment-header",
                              },
                            },
                            e._l(e.data.comments, function (t) {
                              return i("Comment", {
                                key:
                                  "00000000-0000-0000-0000-000000000000" != t.id
                                    ? t.id
                                    : e.generateGuid(),
                                attrs: {
                                  id: e.id,
                                  comment: t,
                                  "hide-history": e.hideHistory,
                                },
                                on: {
                                  "set-comment-visibility": function (i) {
                                    return e.toggleCommentVisibility(t, i);
                                  },
                                },
                              });
                            }),
                            1
                          ),
                        ]
                      : e._e(),
                    e._v(" "),
                    e.showAddComments || e.showChangeStatus
                      ? [
                          i(
                            "div",
                            {
                              class:
                                (!e.hideHistory &&
                                  !e.commentsVisibility &&
                                  e.hasComments) ||
                                e.showReply
                                  ? "d-none"
                                  : "d-inline",
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.showComments.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              !e.showAdminFormLevelControls && e.hasComments
                                ? i(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-secondary comment-btn btn-sm mt-1",
                                      attrs: {
                                        id: e.id + "_ShowAddCommentBtn",
                                        type: "button",
                                      },
                                    },
                                    [e._v("Reply")]
                                  )
                                : e.showAdminFormLevelControls || e.hasComments
                                ? e._e()
                                : i(
                                    "button",
                                    {
                                      staticClass:
                                        "passthrough icon icon-comment comment-icon-btn",
                                      attrs: {
                                        id: e.id + "_ShowAddCommentBtn",
                                        type: "button",
                                      },
                                    },
                                    [
                                      i("span", { staticClass: "sr-only" }, [
                                        e._v("Add Comment"),
                                      ]),
                                    ]
                                  ),
                            ]
                          ),
                          e._v(" "),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    (e.hideHistory ||
                                      e.commentsVisibility ||
                                      !e.hasComments) &&
                                    (e.showAdminFormLevelControls ||
                                      e.showReply),
                                  expression:
                                    "(hideHistory || commentsVisibility || !hasComments) && (showAdminFormLevelControls || showReply)",
                                },
                              ],
                              staticClass: "mt-1",
                              class: e.adminReview
                                ? e.newVisibleToSubmitter
                                  ? "submitter-visible-comment"
                                  : "reviewer-visible-comment"
                                : null,
                            },
                            [
                              e.showAddComments
                                ? i(
                                    "div",
                                    { staticClass: "attachment-group mb-1" },
                                    [
                                      i(
                                        "label",
                                        {
                                          staticClass: "sr-only",
                                          attrs: { for: e.id + "_ReplyText" },
                                        },
                                        [e._v("Comment")]
                                      ),
                                      e._v(" "),
                                      i("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.newText,
                                            expression: "newText",
                                          },
                                        ],
                                        ref: "ReplyText",
                                        staticClass: "form-control",
                                        attrs: {
                                          id: e.id + "_ReplyText",
                                          placeholder: "Add a comment...",
                                        },
                                        domProps: { value: e.newText },
                                        on: {
                                          input: function (t) {
                                            t.target.composing ||
                                              (e.newText = t.target.value);
                                          },
                                        },
                                      }),
                                      e._v(" "),
                                      i(
                                        "div",
                                        {
                                          staticClass:
                                            "attachment-bar icon icon-attach",
                                        },
                                        [
                                          i(
                                            "label",
                                            {
                                              staticClass: "sr-only",
                                              attrs: { for: e.id + "_File" },
                                            },
                                            [e._v("Attach Files")]
                                          ),
                                          e._v(" "),
                                          i("input", {
                                            ref: "file",
                                            attrs: {
                                              type: "file",
                                              id: e.id + "_File",
                                              multiple: "",
                                            },
                                          }),
                                          e._v(" "),
                                          e.adminReview
                                            ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-inline-flex ml-auto",
                                                },
                                                [
                                                  e.adminReview
                                                    ? i(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "visibility-input-wrapper dropdown",
                                                          class: e.hideHistory
                                                            ? "disabled-visibility"
                                                            : "",
                                                        },
                                                        [
                                                          i(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-outline-secondary btn-sm dropdown-toggle",
                                                              class: {
                                                                show: e.newVisibleToSubmitterVisibilityEditing,
                                                              },
                                                              attrs: {
                                                                type: "button",
                                                                disabled:
                                                                  e.hideHistory,
                                                              },
                                                              on: {
                                                                click:
                                                                  function (t) {
                                                                    t.preventDefault(),
                                                                      t.stopPropagation(),
                                                                      (e.newVisibleToSubmitterVisibilityEditing =
                                                                        !e.newVisibleToSubmitterVisibilityEditing);
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              i("span", {
                                                                staticClass:
                                                                  "icon",
                                                                class:
                                                                  e.newVisibleToSubmitter &&
                                                                  !e.hideHistory
                                                                    ? "icon-sites"
                                                                    : "icon-users",
                                                              }),
                                                              e._v(
                                                                e._s(
                                                                  (
                                                                    e.hideHistory
                                                                      ? e.isReturned
                                                                      : e.newVisibleToSubmitter
                                                                  )
                                                                    ? "Everyone"
                                                                    : "Reviewers only"
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          i(
                                                            "fieldset",
                                                            {
                                                              staticClass:
                                                                "dropdown-menu",
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    e.stopPropagation();
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              i(
                                                                "legend",
                                                                {
                                                                  staticClass:
                                                                    "sr-only",
                                                                },
                                                                [
                                                                  e._v(
                                                                    "Comment Visibility"
                                                                  ),
                                                                ]
                                                              ),
                                                              e._v(" "),
                                                              i(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-check",
                                                                },
                                                                [
                                                                  i("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            e.newVisibleToSubmitter,
                                                                          expression:
                                                                            "newVisibleToSubmitter",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-check-input",
                                                                    attrs: {
                                                                      type: "radio",
                                                                      name:
                                                                        "CommentVisibility_" +
                                                                        e.id,
                                                                      id:
                                                                        e.id +
                                                                        "_Everyone",
                                                                    },
                                                                    domProps: {
                                                                      value: !0,
                                                                      checked:
                                                                        e._q(
                                                                          e.newVisibleToSubmitter,
                                                                          !0
                                                                        ),
                                                                    },
                                                                    on: {
                                                                      change: [
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          e.newVisibleToSubmitter =
                                                                            !0;
                                                                        },
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          e.newVisibleToSubmitterVisibilityEditing =
                                                                            !1;
                                                                        },
                                                                      ],
                                                                    },
                                                                  }),
                                                                  e._v(" "),
                                                                  i(
                                                                    "label",
                                                                    {
                                                                      staticClass:
                                                                        "form-check-label",
                                                                      attrs: {
                                                                        for:
                                                                          e.id +
                                                                          "_Everyone",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "icon icon-sites",
                                                                        }
                                                                      ),
                                                                      e._v(
                                                                        "Everyone"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              e._v(" "),
                                                              i(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "form-check",
                                                                },
                                                                [
                                                                  i("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            e.newVisibleToSubmitter,
                                                                          expression:
                                                                            "newVisibleToSubmitter",
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-check-input",
                                                                    attrs: {
                                                                      type: "radio",
                                                                      name:
                                                                        "CommentVisibility_" +
                                                                        e.id,
                                                                      id:
                                                                        e.id +
                                                                        "_Reviewers",
                                                                    },
                                                                    domProps: {
                                                                      value: !1,
                                                                      checked:
                                                                        e._q(
                                                                          e.newVisibleToSubmitter,
                                                                          !1
                                                                        ),
                                                                    },
                                                                    on: {
                                                                      change: [
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          e.newVisibleToSubmitter =
                                                                            !1;
                                                                        },
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          e.newVisibleToSubmitterVisibilityEditing =
                                                                            !1;
                                                                        },
                                                                      ],
                                                                    },
                                                                  }),
                                                                  e._v(" "),
                                                                  i(
                                                                    "label",
                                                                    {
                                                                      staticClass:
                                                                        "form-check-label",
                                                                      attrs: {
                                                                        for:
                                                                          e.id +
                                                                          "_Reviewers",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "icon icon-users",
                                                                        }
                                                                      ),
                                                                      e._v(
                                                                        "Reviewers only"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          e._v(" "),
                                                          e.hideHistory
                                                            ? i("HelpIcon", {
                                                                staticClass:
                                                                  "disabled-help-overlay",
                                                                attrs: {
                                                                  text:
                                                                    (e.isReturned
                                                                      ? "Comments added for returns will only be included in the notification to the Submitter."
                                                                      : "Comments in this tab are only visible to Reviewers.") +
                                                                    " Add comments to specific fields to inform the Submitter.",
                                                                  trigger:
                                                                    "click",
                                                                },
                                                              })
                                                            : e._e(),
                                                        ],
                                                        1
                                                      )
                                                    : e._e(),
                                                ]
                                              )
                                            : e._e(),
                                        ]
                                      ),
                                      e._v(" "),
                                      e.data.isThreat
                                        ? i("div", [e._m(0)])
                                        : e._e(),
                                    ]
                                  )
                                : e._e(),
                              e._v(" "),
                              i(
                                "button",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: {
                                    id: e.id + "_SendReplyBtn",
                                    type: "button",
                                  },
                                  on: {
                                    click: function (t) {
                                      return (
                                        t.preventDefault(),
                                        e.sendReply.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [e._v("Add")]
                              ),
                              e._v(" "),
                              i(
                                "button",
                                {
                                  staticClass: "btn btn-link btn-sm",
                                  staticStyle: { color: "inherit" },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function (t) {
                                      return (
                                        t.preventDefault(),
                                        e.cancel.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [e._v("Cancel")]
                              ),
                              e._v(" "),
                              i("LoadingWheel", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "sending" == e.commentStatus,
                                    expression: "commentStatus == 'sending'",
                                  },
                                ],
                                staticStyle: { display: "inline-block" },
                                attrs: { width: 16 },
                              }),
                            ],
                            1
                          ),
                          e._v(" "),
                          i(
                            "div",
                            {
                              staticClass: "sr-only",
                              attrs: { "aria-live": "polite" },
                            },
                            [
                              e.commentStatus && "sending" != e.commentStatus
                                ? [
                                    e.data.isThreat
                                      ? i("span", [
                                          e._v(
                                            "Error: Potential virus or malware detected."
                                          ),
                                        ])
                                      : i("span", [
                                          e._v("File uploaded successfully"),
                                        ]),
                                  ]
                                : e._e(),
                            ],
                            2
                          ),
                        ]
                      : e._e(),
                  ],
                  2
                )
              : e._e();
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                i = e._self._c || t;
              return i("span", { staticClass: "field-validation-error" }, [
                i("i", {
                  staticClass: "icon icon-attention align-middle mr-1",
                  attrs: { title: "Error", role: "img" },
                }),
                e._v("Potential virus or malware detected."),
              ]);
            },
          ],
          !1,
          null,
          "9ec9f28c",
          null
        ).exports;
    },
    86788: () => {},
    2754: () => {},
    56391: () => {},
    5001: () => {},
    35496: () => {},
    51566: () => {},
  },
]);
//# sourceMappingURL=PagePage.773901b3770456b0.module.js.map
