import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Post detail',
  description: 'Detail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Clean Blog</title>

        {/* Bootstrap Core CSS */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        {/* Theme CSS */}
        <link href="css/clean-blog.min.css" rel="stylesheet" />

        {/* Custom Fonts */}
        <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />

      </head>
      <body className={inter.className}>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                Menu <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" href="#">Start Bootstrap</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="post.html">Sample Post</Link>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="intro-header" style={{ backgroundImage: "url('img/home-bg.jpg')" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <hr className="small" />
                  <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <ul className="list-inline text-center">
                  <li>
                    <Link href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
                <p className="copyright text-muted">Copyright &copy; Your Website 2016</p>
              </div>
            </div>
          </div>
        </footer>
        <script async src="vendor/jquery/jquery.min.js"></script>

        <script async src="vendor/bootstrap/js/bootstrap.min.js"></script>

        <script async src="js/jqBootstrapValidation.js"></script>
        <script async src="js/contact_me.js"></script>

        <script async src="js/clean-blog.min.js"></script>
      </body>
    </html>
  )
}
